import { Button, Checkbox, Flex } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import SkillModal from "./SkillModal";

const AbilityCheck = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const labelClassName = props.small
        ? "ability-check-label-small"
        : "ability-check-label";
    const checkboxClassName = props.small
        ? "ability-check-checkbox-small"
        : "ability-check-checkbox";

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
                justify="space-beetwen"
                align="center"
                onClick={handleModalOpen}
            >
                <Flex className="ability-check-wrap" align="center">
                    {props.checkable && (
                        <Checkbox className={checkboxClassName} />
                    )}
                    <Link className={labelClassName} to="">
                        {props.name.toUpperCase()}
                    </Link>
                </Flex>
                <Button className="ability-check-button">{props.value}</Button>
            </Flex>
            <SkillModal
                title={props.name}
                open={isModalOpen}
                onClose={handleModalClose}
            />
        </>
    );
};

export default AbilityCheck;
