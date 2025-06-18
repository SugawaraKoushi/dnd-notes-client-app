import {
    Button,
    Checkbox,
    Flex,
    Form,
    Input,
    InputNumber,
    Modal,
    Select,
} from "antd";
import "./index.css";
import { useState } from "react";

import AttackAbilityEnum from "../../../model/enum/AttackAbilityEnum";
import { calculateModifier } from "../../services/ModifierService";

const AttackModal = ({
    open,
    onClose,
    onDelete,
    attack: initialAttack,
    character,
}) => {
    const [attack, setAttack] = useState(initialAttack);
    const [showPrefix, setShowPrefix] = useState(true);
    const [deleteButtonText, setDeleteButtonText] = useState("Удалить");
    let plusPrefix = showPrefix && attack.additionalBonus > 0 ? "+" : <span />;
    const abilityOptions = [
        { value: AttackAbilityEnum.EMPTY, label: "Без характеристики" },
        { value: AttackAbilityEnum.STRENGTH, label: "Сила" },
        { value: AttackAbilityEnum.DEXTERITY, label: "Ловкость" },
        { value: AttackAbilityEnum.CONSTITUTION, label: "Телосложение" },
        { value: AttackAbilityEnum.INTELLIGENCE, label: "Интеллект" },
        { value: AttackAbilityEnum.WISDOM, label: "Мудрость" },
        { value: AttackAbilityEnum.CHARISMA, label: "Харизма" },
    ];

    const handleAttackNameChange = (event) => {
        setAttack({ ...attack, name: event.target.value });
    };

    const handleAttackAbilityChange = (ability) => {
        let abilityModifier;

        switch (ability) {
            case AttackAbilityEnum.STRENGTH:
                abilityModifier = calculateModifier(character.strength);
                break;
            case AttackAbilityEnum.DEXTERITY:
                abilityModifier = calculateModifier(character.dexterity);
                break;
            case AttackAbilityEnum.CONSTITUTION:
                abilityModifier = calculateModifier(character.constitution);
                break;
            case AttackAbilityEnum.INTELLIGENCE:
                abilityModifier = calculateModifier(character.intelligence);
                break;
            case AttackAbilityEnum.WISDOM:
                abilityModifier = calculateModifier(character.wisdom);
                break;
            case AttackAbilityEnum.CHARISMA:
                abilityModifier = calculateModifier(character.charisma);
                break;
            case AttackAbilityEnum.EMPTY:
            default:
                abilityModifier = 0;
        }

        setAttack({
            ...attack,
            ability: ability,
            abilityBonus: abilityModifier,
        });
    };

    const handleProficiencyToggle = () => {
        const proficiency = !attack.proficiency;
        setAttack({
            ...attack,
            proficiency: proficiency,
            proficiencyBonus: proficiency ? character.proficiencyBonus : 0,
        });
    };

    const handleAttackDamageChange = (event) => {
        setAttack({ ...attack, damage: event.target.value });
    };

    const handleAttackAdditionalBonusChange = (value) => {
        setAttack({ ...attack, additionalBonus: value });
    };

    const handleAdditionalBonusInputClick = () => {
        setShowPrefix(false);
    };

    const handleAdditionalBonusInputBlur = () => {
        setShowPrefix(true);
    };

    const handleDeleteButtonClick = () => {
        if (deleteButtonText !== "Точно?") {
            setDeleteButtonText("Точно?");
            return;
        }

        setDeleteButtonText("Удалить");
        onDelete();
    };

    const handleModalClose = () => {
        setDeleteButtonText("Удалить");
        onClose(attack);
    };

    return (
        <Modal
            centered
            open={open}
            onCancel={() => handleModalClose()}
            footer={null}
        >
            <Form
                name="attack-modal"
                initialValues={{
                    remember: false,
                }}
            >
                <Flex vertical>
                    <Form.Item name="name" initialValue={attack.name}>
                        <Input
                            size="large"
                            style={{ width: "70%" }}
                            onChange={handleAttackNameChange}
                        />
                    </Form.Item>
                    <Flex align="center" gap={12}>
                        <Form.Item
                            name="ability"
                            style={{ width: "50%" }}
                            initialValue={attack.ability}
                        >
                            <Select
                                options={abilityOptions}
                                size="large"
                                onChange={handleAttackAbilityChange}
                            />
                        </Form.Item>
                        <Form.Item name="proficiency" label="Бонус владения">
                            <Checkbox
                                checked={attack?.proficiency}
                                onChange={handleProficiencyToggle}
                            />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between">
                        <Form.Item name="damage" initialValue={attack.damage}>
                            <Input
                                size="large"
                                style={{ width: "auto" }}
                                onChange={handleAttackDamageChange}
                            />
                        </Form.Item>
                        <Form.Item
                            name="bonus"
                            initialValue={attack.additionalBonus}
                        >
                            <InputNumber
                                size="large"
                                placeholder="доп. бонус"
                                style={{ width: "auto" }}
                                prefix={plusPrefix}
                                onChange={(value) =>
                                    handleAttackAdditionalBonusChange(value)
                                }
                                onClick={handleAdditionalBonusInputClick}
                                onBlur={handleAdditionalBonusInputBlur}
                                changeOnWheel
                            />
                        </Form.Item>
                    </Flex>
                    <Flex justify="end">
                        <Button
                            onClick={handleDeleteButtonClick}
                            variant="outlined"
                            color="danger"
                            size="large"
                            style={{ width: "95px" }}
                        >
                            {deleteButtonText}
                        </Button>
                    </Flex>
                </Flex>
            </Form>
        </Modal>
    );
};

export default AttackModal;
