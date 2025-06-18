import { Checkbox, Drawer, Flex, Form, Input, InputNumber } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterHeaderContext } from "../context/CharacterHeaderContext";

const StatesDrawer = (props) => {
    const [form] = useForm();
    const [showPrefix, setShowPrefix] = useState(true);
    const { onClose } = useContext(DrawerContext);
    const {
        onInitiativeChange,
        onArmorClassChange,
        onSpeedChange,
        onNameChange,
        onRaceChange,
        onClassChange,
        onSubclassChange,
        name,
        race,
        className,
        subclass,
        armorClass,
        speed,
        initiative,
    } = useContext(CharacterHeaderContext);
    let plusPrefix = showPrefix && initiative > 0 ? "+" : <span />;

    const handleClose = () => {
        onClose();
    };

    return (
        <Drawer
            title="Состояния"
            width={480}
            open={props.open}
            onClose={handleClose}
        >
            <Form
                form={form}
                name="character-settings"
                className="drawer-form"
                labelCol={{ span: 12 }}
                wrapperCol={{ offset: 1 }}
            >
                <Flex vertical gap={0} style={{ margin: 0, padding: 0 }}>
                    <Form.Item
                        label="Бессознательный"
                        name="unconscious"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Испуганный"
                        name="frightened"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Истощённый"
                        name="exhaustion"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Невидимый"
                        name="invisible"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Недееспособный"
                        name="incapasitated"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Оглохший"
                        name="Defeaned"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Окаменевший"
                        name="petrified"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Опутанный"
                        name="restrained"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Ослеплённый"
                        name="blinded"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Отравленный"
                        name="poisoned"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Очарованный"
                        name="Charmed"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Ошеломлённый"
                        name="stunned"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Парализованный"
                        name="paralyzed"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Сбитый с ног"
                        name="prone"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                    <Form.Item
                        label="Схваченный"
                        name="grappled"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={name}
                    >
                        <Checkbox />
                    </Form.Item>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default StatesDrawer;
