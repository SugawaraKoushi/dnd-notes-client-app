import { Flex, Form, InputNumber, Modal } from "antd";
import { capitalize } from "../services/StringHelper";
import { useContext, useState } from "react";
import { CharacterContext } from "./CharacterContext";

const AbilityModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    const onValueChange = useContext(CharacterContext);
    let plusPrefix = showPrefix && props.modifier > 0 ? "+" : <span />;

    const handleInputClick = () => {
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleModifierValueChange = (e) => {
        onValueChange(e);
    };

    return (
        <Modal
            title={capitalize(props.title)}
            centered
            open={props.open}
            onCancel={props.onClose}
            footer={null}
        >
            <Form
                name="ability-modal"
                initialValues={{
                    remember: false,
                }}
            >
                <Flex justify="space-between">
                    <Form.Item name="ability" initialValue={props.value}>
                        <InputNumber
                            style={{ width: "auto" }}
                            placeholder="Значение"
                            size="large"
                            variant="outlined"
                            changeOnWheel
                            onClick={handleInputClick}
                            onBlur={handleBlurInput}
                            min={-30}
                            max={30}
                            onChange={(e) => handleModifierValueChange(e)}
                        />
                    </Form.Item>
                    <Form.Item name="bonus" initialValue={0}>
                        <InputNumber
                            style={{ width: "auto" }}
                            placeholder="Бонус к спасброску"
                            size="large"
                            variant="outlined"
                            changeOnWheel
                            onClick={handleInputClick}
                            onBlur={handleBlurInput}
                            min={-30}
                            max={30}
                            prefix={plusPrefix}
                            onChange={(e) => handleModifierValueChange(e)}
                        />
                    </Form.Item>
                </Flex>
                <Form.Item name="value">
                    <InputNumber
                        style={{ width: "100%" }}
                        placeholder="Переопределённое значение"
                        size="large"
                        variant="outlined"
                        changeOnWheel
                    />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AbilityModal;
