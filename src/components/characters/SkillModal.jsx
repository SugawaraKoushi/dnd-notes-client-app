import { Form, InputNumber, Modal } from "antd";
import { capitalize } from "../services/StringHelper";
import { useContext, useState } from "react";
import { AbilityContext } from "./AbilityContext";

const SkillModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    const onValueChange = useContext(AbilityContext);
    let plusPrefix = showPrefix && props.modifier > 0 ? "+" : <span />;

    const handleInputClick = () => {
        console.log(plusPrefix);
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        console.log(plusPrefix);
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
                name="modal"
                initialValues={{
                    remember: false,
                }}
            >
                <Form.Item name="modificator" initialValue={props.modifier}>
                    <InputNumber
                        style={{ width: "100%" }}
                        placeholder="Бонус"
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

export default SkillModal;
