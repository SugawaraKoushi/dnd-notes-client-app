import { Avatar, Divider, Drawer, Flex, Form, Input, InputNumber } from "antd";
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

    const handleCharacterNumberFieldChange = (event) => {
        const fieldName = event.target.id.split("_")[1];
        const value = +event.target.value;
        const updatedCharacter = {
            ...character,
            [fieldName]: value,
        };

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
                            onBlur={handleCharacterTextFieldChange}
                        >
                            <Input placeholder="Имя" />
                        </Form.Item>
                        <Form.Item
                            label="Раса"
                            name="race"
                            style={{ width: "50%" }}
                            initialValue={character.race}
                            onBlur={handleCharacterTextFieldChange}
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
                            onBlur={handleCharacterTextFieldChange}
                        >
                            <Input placeholder="Класс" />
                        </Form.Item>
                        <Form.Item
                            label="Подкласс"
                            name="subclass"
                            style={{ width: "50%" }}
                            initialValue={character.subclass}
                            onBlur={handleCharacterTextFieldChange}
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
                            onBlur={handleCharacterNumberFieldChange}
                        >
                            <InputNumber
                                placeholder="Уровень"
                                min={1}
                                max={20}
                                changeOnWheel
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                        <Form.Item
                            label="КЗ"
                            name="armorClass"
                            style={{ width: "50%" }}
                            initialValue={character.armorClass}
                            onBlur={handleCharacterNumberFieldChange}
                        >
                            <InputNumber
                                placeholder="КЗ"
                                min={0}
                                changeOnWheel
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item
                            label="Скорость"
                            name="speed"
                            style={{ width: "50%" }}
                            initialValue={character.speed}
                            onBlur={handleCharacterNumberFieldChange}
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
                            style={{ width: "50%" }}
                            initialValue={character.initiative}
                            onBlur={handleCharacterNumberFieldChange}
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
                    <Divider />
                    <Flex vertical align="center" style={{ width: "100%" }}>
                        <Avatar
                            size={256}
                            shape="square"
                            src={character.avatarLink}
                            style={{
                                margin: "0 10px 0 0",
                                padding: 0,
                                minWidth: "70px",
                                minHeight: "70px",
                            }}
                        />
                        <Form.Item
                            label="Ссылка на изображение"
                            name="avatarLink"
                            style={{ width: "100%", marginTop: "10px" }}
                            initialValue={character.avatarLink}
                            onBlur={handleCharacterTextFieldChange}
                        >
                            <Input placeholder="Ссылка на изображение" />
                        </Form.Item>
                        <Flex></Flex>
                    </Flex>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default CharacterSettingsDrawer;
