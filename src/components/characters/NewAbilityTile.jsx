import { Flex, Input, Modal, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";
import { useState } from "react";
import { calculateModifier, calculateModifierAsString } from "../services/ModifierService";

const NewAbilityTile = (props) => {
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
            <Flex
                className="ability-tile-header"
                justify="space-between"
                onClick={handleModalOpen}
            >
                <Title level={2}>{props.name.toUpperCase()}</Title>
                <Title level={2}>{value}</Title>
            </Flex>
            <Flex className="ability-checks">
                <AbilityCheck
                    name="проверка"
                    value={calculateModifierAsString(value)}
                    openModal={setIsModalOpen}
                />
                <AbilityCheck
                    name="спасбросок"
                    value={calculateModifierAsString(value)}
                    checkable={true}
                    openModal={setIsModalOpen}
                />
            </Flex>
            {skills !== undefined &&
                skills.map((skill, i) => {
                    return (
                        <AbilityCheck
                            key={i}
                            name={skill.name}
                            value={skill.value}
                            checkable={true}
                            skill={true}
                        />
                    );
                })}
            <Modal
                title={props.name.toUpperCase() + " " + calculateModifierAsString(value)}
                open={isModalOpen}
                onClose={handleModalClose}
                onCancel={handleModalClose}
                centered
                footer={null}
            >
                <Flex justify="space-around" gap={10}>
                    <div>
                        <Input
                            size="large"
                            type="number"
                            value={value}
                            onChange={handleValueChange}
                            max={30}
                        />
                        <span>ЗНАЧЕНИЕ</span>
                    </div>
                    <div>
                        <Input
                            size="large"
                            type="number"
                            onChange={handleModifierChange}
                        />
                        <span>БОНУС К СПАСБРОСКУ</span>
                    </div>
                </Flex>
            </Modal>
        </Flex>
    );
};

export default NewAbilityTile;
