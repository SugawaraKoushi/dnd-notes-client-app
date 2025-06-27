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
        { value: 0, label: "Без характеристики" },
        { value: 1, label: "Сила" },
        { value: 2, label: "Ловкость" },
        { value: 3, label: "Телосложение" },
        { value: 4, label: "Интеллект" },
        { value: 5, label: "Мудрость" },
        { value: 6, label: "Харизма" },
    ];

    const handleAttackNameChange = (event) => {
        setAttack({ ...attack, name: event.target.value });
    };

    const handleAttackAbilityChange = (ability) => {
        const abilityModifier = getAbilityModifier(ability);
        setAttack({
            ...attack,
            ability: ability,
            abilityBonus: attack.proficiency ? abilityModifier : 0,
        });
    };

    const handleProficiencyToggle = () => {
        const proficiency = !attack.proficiency;
        const abilityModifier = getAbilityModifier(attack.ability);
        setAttack({
            ...attack,
            proficiency: proficiency,
            abilityBonus: proficiency ? abilityModifier : 0
        });
    };

    const getAbilityModifier = (ability) => {
        let abilityModifier;

        switch (ability) {
            case 1:
                abilityModifier = calculateModifier(character.strength);
                break;
            case 2:
                abilityModifier = calculateModifier(character.dexterity);
                break;
            case 3:
                abilityModifier = calculateModifier(character.constitution);
                break;
            case 4:
                abilityModifier = calculateModifier(character.intelligence);
                break;
            case 5:
                abilityModifier = calculateModifier(character.wisdom);
                break;
            case 6:
                abilityModifier = calculateModifier(character.charisma);
                break;
            default:
                abilityModifier = 0;
        }

        return abilityModifier;
    }

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
                        <Form.Item name="proficiency" label="Бонус характеристики">
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
