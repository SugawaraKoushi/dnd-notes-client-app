import { Drawer, Flex, Form, Input, InputNumber } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterContext } from "../context/CharacterHeaderContext";

const CharacterSettingsDrawer = (props) => {
    const [form] = useForm();
    const [showPrefix, setShowPrefix] = useState(true);
    const { onClose } = useContext(DrawerContext);
    const { onCharacterChange, character } = useContext(CharacterContext);
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

    const handleCharacterTextFieldChange = (event) => {
        const fieldName = event.target.id.split("_")[1];
        const value = event.target.value;
        const updatedCharacter = {
            ...character,
            [fieldName]: value,
        };
        onCharacterChange(updatedCharacter);
    };

    const handleSpeedValueChange = (value) => {
        const updatedCharacter = {...character, speed: value};
        onCharacterChange(updatedCharacter);
    };

    const handleInitiativeValueChange = (value) => {
        const updatedCharacter = {...character, initiative: value};
        onCharacterChange(updatedCharacter);
    };

    const handleArmorClassValueChange = (value) => {
        const updatedCharacter = {...character, armorClass: value};
        onCharacterChange(updatedCharacter);
    };

    const handleLevelChange = (value) => {
        const updatedCharacter = {...character, level: value};
        onCharacterChange(updatedCharacter);
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
                            onChange={handleCharacterTextFieldChange}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                        <Form.Item
                            label="Раса"
                            name="race"
                            style={{ width: "50%" }}
                            initialValue={character.race}
                            onChange={handleCharacterTextFieldChange}
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
                            onChange={handleCharacterTextFieldChange}
                        >
                            <Input placeholder="Класс" />
                        </Form.Item>
                        <Form.Item
                            label="Подкласс"
                            name="subclass"
                            style={{ width: "50%" }}
                            initialValue={character.subclass}
                            onChange={handleCharacterTextFieldChange}
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
                                onChange={handleLevelChange}
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
