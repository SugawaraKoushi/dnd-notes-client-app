import { Drawer, Flex, Form, Input, InputNumber } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterHeaderContext } from "../context/CharacterHeaderContext";

const CharacterSettingsDrawer = (props) => {
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
        onLevelChange,
        character,
    } = useContext(CharacterHeaderContext);
    let plusPrefix = showPrefix && character.initiative > 0 ? "+" : <span />;

    const handleInputClick = () => {
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleClose = () => {
        onClose();
    };

    const handleSpeedValueChange = (value) => {
        onSpeedChange(value);
    };

    const handleInitiativeValueChange = (value) => {
        onInitiativeChange(value);
    };

    const handleArmorClassValueChange = (value) => {
        onArmorClassChange(value);
    };

    const handleNameValueChange = (event) => {
        onNameChange(event.target.value);
    };

    const handleRaceValueChange = (event) => {
        onRaceChange(event.target.value);
    };

    const handleClassValueChange = (event) => {
        onClassChange(event.target.value);
    };

    const handleSubclassValueChange = (event) => {
        onSubclassChange(event.target.value);
    };

    const handleLevelChange = (value) => {
        onLevelChange(value);
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
                            style={{ width: "50%" }}
                            initialValue={character.name}
                            onChange={handleNameValueChange}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                        <Form.Item
                            label="Раса"
                            name="race"
                            style={{ width: "50%" }}
                            initialValue={character.race}
                            onChange={handleRaceValueChange}
                        >
                            <Input placeholder="Раса" />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="Класс"
                            name="className"
                            style={{ width: "50%" }}
                            initialValue={character.className}
                            onChange={handleClassValueChange}
                        >
                            <Input placeholder="Класс" />
                        </Form.Item>
                        <Form.Item
                            label="Подкласс"
                            name="subclass"
                            style={{ width: "50%" }}
                            initialValue={character.subclass}
                            onChange={handleSubclassValueChange}
                        >
                            <Input placeholder="Подкласс" />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="Уровень"
                            name="level"
                            style={{ width: "50%" }}
                            initialValue={character.level}
                        >
                            <InputNumber
                                placeholder="Уровень"
                                min={0}
                                max={20}
                                changeOnWheel
                                style={{ width: "100%" }}
                                onChange={(value) => handleLevelChange(value)}
                            />
                        </Form.Item>
                        <Form.Item
                            label="КЗ"
                            name="armor-class"
                            style={{ width: "50%" }}
                            initialValue={character.armorClass}
                        >
                            <InputNumber
                                placeholder="КЗ"
                                min={0}
                                changeOnWheel
                                style={{ width: "100%" }}
                                onChange={(value) =>
                                    handleArmorClassValueChange(value)
                                }
                            />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="Скорость"
                            name="speed"
                            style={{ width: "50%" }}
                            initialValue={character.speed}
                        >
                            <InputNumber
                                placeholder="Скорость"
                                min={0}
                                changeOnWheel
                                style={{ width: "100%" }}
                                onChange={(value) =>
                                    handleSpeedValueChange(value)
                                }
                            />
                        </Form.Item>
                        <Form.Item
                            label="Инициатива"
                            name="initiative"
                            style={{ width: "50%" }}
                            initialValue={character.initiative}
                            onChange={(value) =>
                                handleInitiativeValueChange(value)
                            }
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
