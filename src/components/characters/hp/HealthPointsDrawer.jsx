import { Button, Drawer, Flex, Form, InputNumber, Typography } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterContext } from "../context/CharacterHeaderContext";
import { getHealthBarColor } from "../../services/HealthService";

const HealthPointsDrawer = ({ open }) => {
    const { Title } = Typography;
    const [form] = useForm();
    const { onClose } = useContext(DrawerContext);
    const { character, onCharacterChange } = useContext(CharacterContext);
    const [hpValue, setHPValue] = useState(0);
    const [color, setColor] = useState(
        getHealthBarColor(
            character.currentHP,
            character.maxHP,
            character.temporaryHP
        )
    );

    const handleClose = () => {
        onClose();
    };

    const handleHPValueChange = (value) => {
        setHPValue(value);
    };

    const handleMaxHPChange = (value) => {
        onCharacterChange({
            ...character,
            currentHP:
                character.currentHP > value ? value : character.currentHP,
            temporaryHP: character.temporaryHP,
            maxHP: value,
        });
        setColor(
            getHealthBarColor(character.currentHP, value, character.temporaryHP)
        );
    };

    const handleAddTemporaryHPButtonClick = () => {
        onCharacterChange({
            ...character,
            currentHP: character.currentHP,
            temporaryHP: character.temporaryHP + hpValue,
            maxHP: character.maxHP,
        });
    };

    const handleDamageButtonClick = () => {
        let damagedTemporaryHP = character.temporaryHP - hpValue;
        let damagedCurrentHP =
            damagedTemporaryHP < 0
                ? character.currentHP + damagedTemporaryHP
                : character.currentHP;

        damagedCurrentHP = damagedCurrentHP < 0 ? 0 : damagedCurrentHP;
        damagedTemporaryHP = damagedTemporaryHP < 0 ? 0 : damagedTemporaryHP;

        onCharacterChange({
            ...character,
            currentHP: damagedCurrentHP,
            temporaryHP: damagedTemporaryHP,
            maxHP: character.maxHP,
        });
        setColor(
            getHealthBarColor(
                damagedCurrentHP,
                character.maxHP,
                damagedTemporaryHP
            )
        );
    };

    const handleHealButtonClick = () => {
        let healedCurrentHP =
            character.currentHP + hpValue >= character.maxHP
                ? character.maxHP
                : character.currentHP + hpValue;
                
        onCharacterChange({
            ...character,
            currentHP: healedCurrentHP,
            temporaryHP: character.temporaryHP,
            maxHP: character.maxHP,
        });
        setColor(
            getHealthBarColor(
                healedCurrentHP,
                character.maxHP,
                character.temporaryHP
            )
        );
    };

    return (
        <Drawer
            title={
                `${character.currentHP} / ${character.maxHP}` +
                (character.temporaryHP > 0 ? ` (${character.temporaryHP})` : "")
            }
            width={580}
            open={open}
            onClose={handleClose}
            style={{ color: `${color}` }}
        >
            <Form form={form} name="character-settings" className="drawer-form">
                <Flex vertical gap={0} style={{ margin: 0, padding: 0 }}>
                    <Form.Item name="input" style={{ width: "60%" }}>
                        <InputNumber
                            placeholder="Введите значение"
                            style={{ width: "100%" }}
                            changeOnWheel
                            onChange={(value) => handleHPValueChange(value)}
                        />
                    </Form.Item>
                    <Flex justify="space-between" style={{ width: "60%" }}>
                        <Button
                            className="tremporary-hp-button"
                            onClick={handleAddTemporaryHPButtonClick}
                        >
                            Временные
                        </Button>
                        <Button
                            className="damage-hp-button"
                            onClick={handleDamageButtonClick}
                        >
                            Урон
                        </Button>
                        <Button
                            className="heal-hp-button"
                            onClick={handleHealButtonClick}
                        >
                            Лечение
                        </Button>
                    </Flex>
                    <Title level={5}>Настройка хитов</Title>
                    <Form.Item
                        name="maxHP"
                        style={{ width: "60%" }}
                        initialValue={character.maxHP}
                    >
                        <InputNumber
                            placeholder="Максимальное значение"
                            style={{ width: "100%" }}
                            onChange={handleMaxHPChange}
                            changeOnWheel
                        />
                    </Form.Item>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default HealthPointsDrawer;
