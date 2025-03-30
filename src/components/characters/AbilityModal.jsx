import { Flex, Form, InputNumber, Modal } from "antd";
import { capitalize } from "../services/StringHelper";
import { useContext, useEffect, useState } from "react";
import { AbilityContext } from "./AbilityContext";

const AbilityModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    const { onScoreChange, onSavingThrowBonusChange } =
        useContext(AbilityContext);
    let plusPrefix = showPrefix && props.bonus > 0 ? "+" : <span />;

    const handleInputClick = () => {
        setShowPrefix(false);
    };

    const handleBlurInput = () => {
        setShowPrefix(true);
    };

    const handleScoreChange = (value) => {
        onScoreChange(value);
    };

    const handleSavingThrowBonusChange = (value) => {
        onSavingThrowBonusChange(value);
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
                    <Form.Item name="ability-score" initialValue={props.score}>
                        <InputNumber
                            style={{ width: "auto" }}
                            placeholder="Значение"
                            size="large"
                            variant="outlined"
                            changeOnWheel
                            min={-30}
                            max={30}
                            onChange={(value) => handleScoreChange(value)}
                        />
                    </Form.Item>
                    <Form.Item name="bonus" initialValue={props.bonus}>
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
                            onChange={(value) =>
                                handleSavingThrowBonusChange(value)
                            }
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
