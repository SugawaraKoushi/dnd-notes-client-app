import { Flex, Input, Modal, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";
import { useState } from "react";
import { calculateModifier, calculateModifierAsString } from "../services/ModifierService";

const AbilityTile = (props) => {
    const { Title } = Typography;
    const [skills, setSkills] = useState(props.skills);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState(props.value);
    const [modifier, setModifier] = useState(0);

    const handleModalOpen = () => {
        calculateModifier(value);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleValueChange = (event) => {
        setValue(event.target.value);
    };

    const handleModifierChange = (event) => {
        setModifier(event.target.value);
    };

    return (
        <Flex className="ability-tile" vertical>
            <Flex className="ability-tile-header" justify="space-between">
                <Title level={3} >{props.name.toUpperCase()}</Title>
                <Title level={3}>{props.value}</Title>
            </Flex>
            <Flex className="ability-checks">
                <AbilityCheck name="проверка" small={true} value={0} />
                <AbilityCheck name="спасбросок" small={true} value={0} checkable={true} />
            </Flex>
            {props.skills && props.skills.map((skill, i) => (
                <AbilityCheck name={skill} value={0} checkable={true} />
            ))}
        </Flex>
    );
};

export default AbilityTile;
