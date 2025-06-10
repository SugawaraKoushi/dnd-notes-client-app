import { Checkbox, Flex, Form, Input, InputNumber, Modal, Select } from "antd";
import "./index.css";
import { useState } from "react";
import AttackAbilityEnum from "../../../model/enum/AttackAbilityEnum";

const AttackModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    const [attack, setAttack] = useState(props.attack);
    let plusPrefix = showPrefix && props.bonus > 0 ? "+" : <span />;
    const abilityOptions = [
        { value: AttackAbilityEnum.EMPTY, label: "Без характеристики" },
        { value: AttackAbilityEnum.STRENGTH, label: "Сила" },
        { value: AttackAbilityEnum.DEXTERITY, label: "Ловкость" },
        { value: AttackAbilityEnum.CONSTITUTION, label: "Телосложение" },
        { value: AttackAbilityEnum.INTELLIGENCE, label: "Интеллект" },
        { value: AttackAbilityEnum.WISDOM, label: "Мудрость" },
        { value: AttackAbilityEnum.CHARISMA, label: "Харизма" },
    ];

    const handleProficiencyToggle = () => {
        setAttack({ ...attack, proficiency: !attack.proficiency });
    };

    return (
        <Modal
            centered
            open={props.open}
            onCancel={props.onClose}
            footer={null}
        >
            <Form
                name="attack-modal"
                initialValues={{
                    remember: false,
                }}
            >
                <Flex vertical>
                    <Form.Item
                        name="name"
                        initialValue={attack?.name}
                        style={{ width: "70%" }}
                    >
                        <Input size="large" />
                    </Form.Item>
                    <Flex align="center" gap={12}>
                        <Form.Item
                            name="ability"
                            style={{ width: "50%" }}
                            initialValue={attack?.ability}
                        >
                            <Select options={abilityOptions} size="large" />
                        </Form.Item>
                        <Form.Item name="proficiency" label="Бонус владения">
                            <Checkbox checked={attack?.proficiency} />
                        </Form.Item>
                    </Flex>
                </Flex>
            </Form>
        </Modal>
    );
};

export default AttackModal;
