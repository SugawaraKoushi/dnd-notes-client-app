import { Checkbox, Drawer, Flex, Form } from "antd";
import { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { StatusTrackerContext } from "../context/StatusTrackerContext";

const StatesDrawer = (props) => {
    const [form] = useForm();
    const { onClose, onCharacterChange } = useContext(DrawerContext);
    const { character } = useContext(StatusTrackerContext);

    const handleClose = () => {
        onClose();
    };

    const handleStateChange = (event) => {
        const stateName = event.target.id.split("_")[1];
        const updatedCharacter = {
            ...character,
            [stateName]: event.target.checked,
        };

        onCharacterChange(updatedCharacter);
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
                        initialValue={character.unconscious}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Испуганный"
                        name="frightened"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.frightened}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Истощённый"
                        name="exhaustion"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.exhaustion}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Невидимый"
                        name="invisible"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.invisible}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Недееспособный"
                        name="incapasitated"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.incapasitated}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Оглохший"
                        name="defeaned"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.defeaned}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Окаменевший"
                        name="petrified"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.petrified}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Опутанный"
                        name="restrained"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.restrained}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Ослеплённый"
                        name="blinded"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.blinded}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Отравленный"
                        name="poisoned"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.poisoned}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Очарованный"
                        name="charmed"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.charmed}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Ошеломлённый"
                        name="stunned"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.stunned}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Парализованный"
                        name="paralyzed"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.paralyzed}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Сбитый с ног"
                        name="prone"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.prone}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                    <Form.Item
                        label="Схваченный"
                        name="grappled"
                        style={{ width: "60%", margin: 0 }}
                        initialValue={character.grappled}
                    >
                        <Checkbox onChange={handleStateChange} />
                    </Form.Item>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default StatesDrawer;
