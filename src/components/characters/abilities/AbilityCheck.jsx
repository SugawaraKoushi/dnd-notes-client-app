import { Button, Checkbox, Flex } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { modifierAsString } from "../../services/ModifierService";
import AbilityModal from "./AbilityModal";
import SkillModal from "../SkillModal";
import { rollDice } from "../../services/RollDiceService";
import { NotificationContext } from "../context/NotificationContext";
import { CharacterContext } from "../context/CharacterHeaderContext";

const AbilityCheck = (props) => {
    const { onRollButtonClick } = useContext(NotificationContext);
    const { character, onCharacterChange } = useContext(CharacterContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const labelClassName = props.skill
        ? "ability-check-label"
        : "ability-check-label-small";
    const checkboxClassName = props.skill
        ? "ability-check-checkbox"
        : "ability-check-checkbox-small";

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleProficiencyChange = (event) => {
        if (props.skill) {
            handleSkillProficiencyChange(event);
        } else {
            handleAbilitySavingThrowProficiencyChange(event);
        }
    };

    const handleSkillProficiencyChange = (event) => {
        const k = event.target.checked ? 1 : -1;
        const updatedCharacter = {
            ...character,
            [`${props.id}Proficiency`]: event.target.checked,
            [props.id]: character[props.id] + k * character.proficiencyBonus,
        };
        onCharacterChange(updatedCharacter);
    };

    const handleAbilitySavingThrowProficiencyChange = (event) => {
        const k = event.target.checked ? 1 : -1;
        const updatedCharacter = {
            ...character,
            [`${props.id}SavingThrowProficiency`]: event.target.checked,
            [`${props.id}SavingThrow`]:
                character[`${props.id}SavingThrow`] +
                k * character.proficiencyBonus,
        };
        onCharacterChange(updatedCharacter);
    };

    const handleRollButtonClick = () => {
        let dice = 20;
        let times = 1;
        let value = rollDice(times, dice);

        let type = props.skill ? "проверка" : props.name;

        let result = {
            type: type,
            value: value,
            modifier: props.modifier,
            dice: dice,
            times: times,
            ability: props.notificationName,
        };

        onRollButtonClick(result);
    };

    return (
        <>
            <Flex
                className="ability-check"
                justify="space-between"
                align="center"
            >
                <Flex className="ability-check-wrap" align="center">
                    {props.checkable && (
                        <Checkbox
                            className={checkboxClassName}
                            checked={
                                props.skill
                                    ? character[`${props.id}Proficiency`]
                                    : character[
                                          `${props.id}SavingThrowProficiency`
                                      ]
                            }
                            onChange={handleProficiencyChange}
                        />
                    )}
                    <Link
                        className={labelClassName}
                        to=""
                        onClick={handleModalOpen}
                    >
                        {props.name.toUpperCase()}
                    </Link>
                </Flex>
                <Button
                    className="ability-check-button"
                    onClick={handleRollButtonClick}
                >
                    {modifierAsString(props.modifier)}
                </Button>
            </Flex>
            {props.skill ? (
                <SkillModal
                    id={props.id}
                    title={props.name}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    bonus={props.bonus}
                />
            ) : (
                <AbilityModal
                    title={props.modalTitle}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    score={props.score}
                    modifier={props.modifier}
                    bonus={props.bonus}
                />
            )}
        </>
    );
};

export default AbilityCheck;
