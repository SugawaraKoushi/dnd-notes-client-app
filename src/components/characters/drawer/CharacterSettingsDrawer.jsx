import { Drawer, Flex, Form, Input, InputNumber } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";

const CharacterSettingsDrawer = (props) => {
    const [form] = useForm();
    const [showPrefix, setShowPrefix] = useState(true);
    const {
        onClose,
        name,
        race,
        className,
        subclass,
        armorClass,
        speed,
        initiative,
    } = useContext(DrawerContext);
    let plusPrefix = showPrefix && initiative > 0 ? "+" : <span />;

    const handleInputClick = () => {
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleClose = () => {
        onClose();
    };

    return (
        <Drawer
            title="Настройки"
            width={580}
            open={props.open}
            onClose={handleClose}
        >
            <Form form={form} name="character-settings" className="drawer-form">
                <Flex vertical gap={0} style={{ margin: 0, padding: 0 }}>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="Имя"
                            name="name"
                            style={{ width: "60%" }}
                            initialValue={name}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                        <Form.Item
                            label="Раса"
                            name="race"
                            style={{ width: "40%" }}
                            initialValue={race}
                        >
                            <Input placeholder="Раса" />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="Класс"
                            name="class"
                            style={{ width: "50%" }}
                            initialValue={className}
                        >
                            <Input placeholder="Класс" />
                        </Form.Item>
                        <Form.Item
                            label="Подкласс"
                            name="subclass"
                            style={{ width: "50%" }}
                            initialValue={subclass}
                        >
                            <Input placeholder="Подкласс" />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="КЗ"
                            name="armor-class"
                            style={{ width: "33%" }}
                            initialValue={armorClass}
                        >
                            <InputNumber
                                placeholder="КЗ"
                                min={0}
                                changeOnWheel
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Скорость"
                            name="speed"
                            style={{ width: "33%" }}
                            initialValue={speed}
                        >
                            <InputNumber
                                placeholder="Скорость"
                                min={0}
                                changeOnWheel
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="Инициатива"
                            name="initiative"
                            style={{ width: "33%" }}
                            initialValue={initiative}
                        >
                            <InputNumber
                                placeholder="Инициатива"
                                changeOnWheel
                                style={{ width: "100%" }}
                                prefix={plusPrefix}
                                onClick={handleInputClick}
                                onBlur={handleBlurInput}
                            />
                        </Form.Item>
                    </Flex>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default CharacterSettingsDrawer;
