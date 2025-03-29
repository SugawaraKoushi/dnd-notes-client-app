import { Button, Checkbox, Flex } from "antd";
import { useContext, useState } from "react";
import { Link } from "react-router";
import { modifierAsString } from "../services/ModifierService";
import SkillModal from "./SkillModal";
import AbilityModal from "./AbilityModal";
import { AbilityContext } from "./AbilityContext";

const AbilityCheck = (props) => {
    const { onSavingThrowProficiencyChange } = useContext(AbilityContext);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const modifier = props.checked ? props.modifier + 2 : props.modifier;

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
        onSavingThrowProficiencyChange();
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
                <Button className="ability-check-button">
                    {modifierAsString(modifier)}
                </Button>
            </Flex>
            {props.skill ? (
                <SkillModal
                    title={props.name}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    modifier={props.modifier}
                />
            ) : (
                <AbilityModal
                    title={props.modalTitle}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    score={props.score}
                    modifier={props.modifier}
                />
            )}
        </>
    );
};

export default AbilityCheck;
