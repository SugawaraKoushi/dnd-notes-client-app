import { Button, Drawer, Flex, Form, InputNumber, Typography } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterHeaderContext } from "../context/CharacterHeaderContext";
import { getHealthBarColor } from "../../services/HealthService";

const HealthPointsDrawer = ({ open }) => {
    const { Title } = Typography;
    const [form] = useForm();
    const { onClose } = useContext(DrawerContext);
    const { currentHP, maxHP, temporaryHP, onHPChange } = useContext(
        CharacterHeaderContext
    );
    const [hpValue, setHPValue] = useState(0);
    const [color, setColor] = useState(
        getHealthBarColor(currentHP, maxHP, temporaryHP)
    );

    const handleClose = () => {
        onClose();
    };

    const handleHPValueChange = (value) => {
        setHPValue(value);
    };

    const handleMaxHPChange = (value) => {
        onHPChange({
            currentHP: currentHP > value ? value : currentHP,
            temporaryHP: temporaryHP,
            maxHP: value,
        });
        setColor(getHealthBarColor(currentHP, value, temporaryHP));
    };

    const handleAddTemporaryHPButtonClick = () => {
        onHPChange({
            currentHP: currentHP,
            temporaryHP: temporaryHP + hpValue,
            maxHP: maxHP,
        });
    };

    const handleDamageButtonClick = () => {
        let damagedTemporaryHP = temporaryHP - hpValue;
        let damagedCurrentHP =
            damagedTemporaryHP < 0 ? currentHP + damagedTemporaryHP : currentHP;

        damagedCurrentHP = damagedCurrentHP < 0 ? 0 : damagedCurrentHP;
        damagedTemporaryHP = damagedTemporaryHP < 0 ? 0 : damagedTemporaryHP;
        onHPChange({
            currentHP: damagedCurrentHP,
            temporaryHP: damagedTemporaryHP,
            maxHP: maxHP,
        });
        setColor(
            getHealthBarColor(damagedCurrentHP, maxHP, damagedTemporaryHP)
        );
    };

    const handleHealButtonClick = () => {
        let healedCurrentHP =
            currentHP + hpValue >= maxHP ? maxHP : currentHP + hpValue;
        onHPChange({
            currentHP: healedCurrentHP,
            temporaryHP: temporaryHP,
            maxHP: maxHP,
        });
        setColor(getHealthBarColor(healedCurrentHP, maxHP, temporaryHP));
    };

    return (
        <Drawer
            title={
                `${currentHP} / ${maxHP}` +
                (temporaryHP > 0 ? ` (${temporaryHP})` : "")
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
                        initialValue={maxHP}
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
