import { Button, Drawer, Flex, Form, Input, InputNumber } from "antd";
import { useContext, useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterHeaderContext } from "../context/CharacterHeaderContext";

const HealthPointsDrawer = (props) => {
    const [form] = useForm();
    const { onClose } = useContext(DrawerContext);
    const { currentHP, maxHP, temporaryHP } = useContext(
        CharacterHeaderContext
    );
    const [hp, setHp] = useState({ currentHP, maxHP, temporaryHP });

    const handleClose = () => {
        onClose();
    };

    return (
        <Drawer
            title={
                `${currentHP} / ${maxHP}` +
                (hp.temporaryHP > 0 ? ` (+${hp.temporaryHP})` : "")
            }
            width={580}
            open={props.open}
            onClose={handleClose}
        >
            <Form form={form} name="character-settings" className="drawer-form">
                <Flex vertical gap={0} style={{ margin: 0, padding: 0 }}>
                    <Flex justify="space-between" gap={24}>
                        <Form.Item name="input" style={{ width: "60%" }}>
                            <InputNumber
                                placeholder="Введите значение"
                                style={{ width: "100%" }}
                            />
                        </Form.Item>
                    </Flex>
                    <Flex justify="space-between" style={{ width: "60%" }}>
                        <Button className="tremporary-hp-button">
                            Временные
                        </Button>
                        <Button className="damage-hp-button">Урон</Button>
                        <Button className="heal-hp-button">Лечение</Button>
                    </Flex>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default HealthPointsDrawer;
