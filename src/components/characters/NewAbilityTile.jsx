import { Flex, Input, Modal, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";
import { useState } from "react";

const NewAbilityTile = (props) => {
    const { Title } = Typography;
    const [skills, setSkills] = useState(props.skills);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState(props.value);
    const [modifier, setModifier] = useState(0);

    const calculateModifier = () => {
        const modifierValue = Math.floor((props.value - 10) / 2);

        if (modifierValue >= 0) {
            setModifier(modifierValue);
            return;
        }

        setModifier(modifierValue);
    };

    const handleModalOpen = () => {
        calculateModifier();
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
                    value={0}
                    openModal={setIsModalOpen}
                />
                <AbilityCheck
                    name="спасбросок"
                    value={0}
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
                title={props.name.toUpperCase()}
                open={isModalOpen}
                onClose={handleModalClose}
                onCancel={handleModalClose}
            >
                <Flex>
                    <Input
                        variant="borderless"
                        size="large"
                        type="number"
                        placeholder="Значение"
                        value={value}
                        onChange={handleValueChange}
                    />
                    <Input
                        variant="borderless"
                        size="large"
                        type="number"
                        placeholder="Бонус к спасброску"
                        prefix={modifier > 0 ? <span>+</span> : <span />}
                        value={modifier}
                        onChange={handleModifierChange}
                    />
                </Flex>
            </Modal>
        </Flex>
    );
};

export default NewAbilityTile;
