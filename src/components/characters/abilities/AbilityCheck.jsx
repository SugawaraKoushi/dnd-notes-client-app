import { Button, Checkbox, Flex } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { modifierAsString } from "../../services/ModifierService";
import { AbilityContext } from "../context/AbilityContext";
import AbilityModal from "./AbilityModal";
import SkillModal from "../SkillModal";
import { rollD20 } from "../../services/RollDiceService";

const AbilityCheck = (props) => {
    const {
        onSavingThrowProficiencyChange,
        onSkillProficiencyChange,
        onRollButtonClick,
    } = useContext(AbilityContext);
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

    const handleProficiencyChange = () => {
        if (props.skill) {
            onSkillProficiencyChange(props.id);
        } else {
            onSavingThrowProficiencyChange();
        }
    };

    const handleRollButtonClick = () => {
        let value = rollD20();
        let result = {
            value: value,
            valueWithModifier: value + props.modifier,
            modifier: props.modifier,
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
                            checked={props.checked}
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
