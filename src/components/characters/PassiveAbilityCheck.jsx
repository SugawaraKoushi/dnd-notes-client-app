import { CheckCircleFilled } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useState } from "react";
import { Link } from "react-router";
import { modifierAsString } from "../services/ModifierService";

const PassiveAbilityCheck = (props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleModalOpen = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    return (
        <Flex className="passive-ability-check" justify="space-between" align="center">
            <Button className="ability-check-button-reversed" disabled>
                {props.score}
            </Button>
            <Flex className="ability-check-wrap-reversed" align="center">
                <Link className="ability-check-label" to="" onClick={handleModalOpen}>
                    {props.name.toUpperCase()}
                </Link>
            </Flex>
        </Flex>
    );
};

export default PassiveAbilityCheck;
