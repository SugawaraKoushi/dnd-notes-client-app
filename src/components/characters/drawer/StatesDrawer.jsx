import { Checkbox, Drawer, Flex, Form } from "antd";
import { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";
import { useForm } from "antd/es/form/Form";
import { CharacterContext } from "../context/CharacterHeaderContext";

const StatesDrawer = (props) => {
    const { open } = props;
    const [form] = useForm();
    const { onClose } = useContext(DrawerContext);
    const { character, onCharacterChange } = useContext(CharacterContext);

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
        <Drawer title="Состояния" width={480} open={open} onClose={handleClose}>
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
                    >
                        <Checkbox
                            checked={character.unconscious}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Испуганный"
                        name="frightened"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.frightened}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Истощённый"
                        name="exhaustion"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.exhaustion}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Невидимый"
                        name="invisible"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.invisible}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Недееспособный"
                        name="incapacitated"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.incapacitated}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Оглохший"
                        name="deafened"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.deafened}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Окаменевший"
                        name="petrified"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.petrified}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Опутанный"
                        name="restrained"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.restrained}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Ослеплённый"
                        name="blinded"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.blinded}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Отравленный"
                        name="poisoned"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.poisoned}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Очарованный"
                        name="charmed"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.charmed}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Ошеломлённый"
                        name="stunned"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.stunned}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Парализованный"
                        name="paralyzed"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.paralyzed}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Сбитый с ног"
                        name="prone"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.prone}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                    <Form.Item
                        label="Схваченный"
                        name="grappled"
                        style={{ width: "60%", margin: 0 }}
                    >
                        <Checkbox
                            checked={character.grappled}
                            onChange={handleStateChange}
                        />
                    </Form.Item>
                </Flex>
            </Form>
        </Drawer>
    );
};

export default StatesDrawer;
