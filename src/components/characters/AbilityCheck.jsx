import { Button, Checkbox, Flex } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import { modifierAsString } from "../services/ModifierService";
import SkillModal from "./SkillModal";
import AbilityModal from "./AbilityModal";

const AbilityCheck = (props) => {
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

    return (
        <>
            <Flex
                className="ability-check"
                justify="space-between"
                align="center"
            >
                <Flex className="ability-check-wrap" align="center">
                    {props.checkable && (
                        <Checkbox className={checkboxClassName} />
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
                    {modifierAsString(props.value)}
                </Button>
            </Flex>
            {props.skill ? (
                <SkillModal
                    title={props.name}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    modifier={props.value}
                />
            ) : (
                <AbilityModal
                    title={props.modalTitle}
                    open={isModalOpen}
                    onClose={handleModalClose}
                    value={props.value}
                />
            )}
        </>
    );
};

export default AbilityCheck;
