import { Form, InputNumber, Modal } from "antd";
import { capitalize } from "../services/StringHelper";
import { useContext, useState } from "react";
import "./index.css";
import { CharacterContext } from "./context/CharacterHeaderContext";

const SkillModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    const { character, onCharacterChange } = useContext(CharacterContext);
    let plusPrefix = showPrefix && props.bonus > 0 ? "+" : <span />;

    const handleInputClick = () => {
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleSkillBonusChange = (event) => {
        const value = +event.target.value;
        const skillValue =
            character[props.id] - character[`${props.id}Bonus`] + value;
        onCharacterChange({
            ...character,
            [props.id]: skillValue,
            [`${props.id}Bonus`]: value,
        });
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
                <Form.Item
                    name="modifier"
                    initialValue={props.bonus}
                    onBlur={handleSkillBonusChange}
                >
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
