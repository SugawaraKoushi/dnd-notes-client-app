import { Flex, Form, Input, InputNumber, Modal } from "antd";
import { capitalize } from "../../services/StringHelper";
import { useContext, useState } from "react";
import { AbilityContext } from "../context/AbilityContext";
import "./index.css";

const AttackModal = (props) => {
    const [showPrefix, setShowPrefix] = useState(true);
    let plusPrefix = showPrefix && props.bonus > 0 ? "+" : <span />;

    return (
        <Modal
            centered
            open={props.open}
            onCancel={props.onClose}
            footer={null}
        >
            <Form
                name="attack-modal"
                initialValues={{
                    remember: false,
                }}
            >
                <Flex justify="space-between">
                    <Form.Item name="name" initialValue={props.attack?.name}>
                        <Input size="large" />
                    </Form.Item>
                </Flex>
            </Form>
        </Modal>
    );
};

export default AttackModal;
