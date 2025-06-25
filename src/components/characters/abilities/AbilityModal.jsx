import { Flex, Form, InputNumber, Modal } from "antd";
import { capitalize } from "../../services/StringHelper";
import { useContext, useState } from "react";
import "./index.css";
import { CharacterContext } from "../context/CharacterHeaderContext";
import { calculateModifier } from "../../services/ModifierService";

const AbilityModal = (props) => {
    const { id, skills } = props;
    const [showPrefix, setShowPrefix] = useState(true);
    const { character, onCharacterChange } = useContext(CharacterContext);
    let plusPrefix = showPrefix && props.bonus > 0 ? "+" : <span />;

    const handleInputClick = () => {
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleScoreChange = (event) => {
        const value = event.target.value;
        const updatedCharacter = { ...character };
        const savingThrow =
            calculateModifier(value) +
            character[`${id}SavingThrowBonus`] +
            (character[`${id}SavingThrowProficiency`]
                ? character.proficiencyBonus
                : 0);
        updatedCharacter[id] = value;
        updatedCharacter[`${id}SavingThrow`] = savingThrow;

        if (skills) {
            skills.forEach((skill) => {
                const skillValue =
                    calculateModifier(value) +
                    character[`${skill.id}Bonus`] +
                    (character[`${skill.id}Proficiency`]
                        ? character.proficiencyBonus
                        : 0);
                updatedCharacter[skill.id] = skillValue;
            });
        }

        onCharacterChange(updatedCharacter);
    };

    const handleSavingThrowBonusChange = (event) => {
        const value = +event.target.value;
        const savingThrow =
            character[`${id}SavingThrow`] -
            character[`${id}SavingThrowBonus`] +
            value;
        console.log(
            character[`${id}SavingThrow`],
            character[`${id}SavingThrowBonus`],
            value, savingThrow
        );

        onCharacterChange({
            ...character,
            [`${id}SavingThrow`]: savingThrow,
            [`${id}SavingThrowBonus`]: value,
        });
    };

    return (
        <Modal
            title={capitalize(props.title)}
            centered
            open={props.open}
            onCancel={props.onClose}
            footer={null}
        >
            <Form
                name="ability-modal"
                initialValues={{
                    remember: false,
                }}
            >
                <Flex justify="space-between">
                    <Form.Item
                        name="ability-score"
                        initialValue={props.score}
                        onBlur={(value) => handleScoreChange(value)}
                    >
                        <InputNumber
                            style={{ width: "auto" }}
                            placeholder="Значение"
                            size="large"
                            variant="outlined"
                            changeOnWheel
                            min={-30}
                            max={30}
                        />
                    </Form.Item>
                    <Form.Item
                        name="bonus"
                        initialValue={props.bonus}
                        onBlur={handleSavingThrowBonusChange}
                    >
                        <InputNumber
                            style={{ width: "auto" }}
                            placeholder="Бонус к спасброску"
                            size="large"
                            variant="outlined"
                            changeOnWheel
                            onClick={handleInputClick}
                            onBlur={handleBlurInput}
                            min={-30}
                            max={30}
                            prefix={plusPrefix}
                        />
                    </Form.Item>
                </Flex>
                <Form.Item name="value">
                    <InputNumber
                        style={{ width: "100%" }}
                        placeholder="Переопределённое значение"
                        size="large"
                        variant="outlined"
                        changeOnWheel
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AbilityModal;
