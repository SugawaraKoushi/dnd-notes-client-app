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
    const {
        id,
        name,
        skill,
        checkable,
        modifier,
        notificationName,
        bonus,
        skills,
        modalTitle,
        score,
    } = props;
    const { onRollButtonClick } = useContext(NotificationContext);
    const { character, onCharacterChange } = useContext(CharacterContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const labelClassName = skill
        ? "ability-check-label"
        : "ability-check-label-small";
    const checkboxClassName = skill
        ? "ability-check-checkbox"
        : "ability-check-checkbox-small";

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleProficiencyChange = (event) => {
        if (skill) {
            handleSkillProficiencyChange(event);
        } else {
            handleAbilitySavingThrowProficiencyChange(event);
        }
    };

    const handleSkillProficiencyChange = (event) => {
        const k = event.target.checked ? 1 : -1;
        const updatedCharacter = {
            ...character,
            [`${id}Proficiency`]: event.target.checked,
            [id]: character[id] + k * character.proficiencyBonus,
        };
        onCharacterChange(updatedCharacter);
    };

    const handleAbilitySavingThrowProficiencyChange = (event) => {
        const k = event.target.checked ? 1 : -1;
        const updatedCharacter = {
            ...character,
            [`${id}SavingThrowProficiency`]: event.target.checked,
            [`${id}SavingThrow`]:
                character[`${id}SavingThrow`] + k * character.proficiencyBonus,
        };
        onCharacterChange(updatedCharacter);
    };

    const handleRollButtonClick = () => {
        let dice = 20;
        let times = 1;
        let value = rollDice(times, dice);

        let type = skill ? "проверка" : name;

        let result = {
            type: type,
            value: value,
            modifier: modifier,
            dice: dice,
            times: times,
            ability: notificationName,
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
                    {checkable && (
                        <Checkbox
                            className={checkboxClassName}
                            checked={
                                skill
                                    ? character[`${id}Proficiency`]
                                    : character[`${id}SavingThrowProficiency`]
                            }
                            onChange={handleProficiencyChange}
                        />
                    )}
                    <Link
                        className={labelClassName}
                        to=""
                        onClick={handleModalOpen}
                    >
                        {name.toUpperCase()}
                    </Link>
                </Flex>
                <Button
                    className="ability-check-button"
                    onClick={handleRollButtonClick}
                >
                    {modifierAsString(modifier)}
                </Button>
            </Flex>
            {skill ? (
                <SkillModal
                    id={id}
                    title={name}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    bonus={bonus}
                />
            ) : (
                <AbilityModal
                    id={id}
                    skills={skills}
                    title={modalTitle}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    score={score}
                    modifier={modifier}
                    bonus={bonus}
                />
            )}
        </>
    );
};

export default AbilityCheck;
