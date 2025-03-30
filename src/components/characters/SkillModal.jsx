import { Form, InputNumber, Modal } from "antd";
import { capitalize } from "../services/StringHelper";
import { useContext, useState } from "react";
import { AbilityContext } from "./AbilityContext";

const SkillModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    const { onSkillBonusChange } = useContext(AbilityContext);
    let plusPrefix = showPrefix && props.bonus > 0 ? "+" : <span />;

    const handleInputClick = () => {
        console.log(showPrefix, plusPrefix, props.bonus)
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleSkillBonusChange = (value) => {
        onSkillBonusChange(props.id, value);
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
                <Form.Item name="modifier" initialValue={1}>
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
                        onChange={(value) => handleSkillBonusChange(value)}
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
