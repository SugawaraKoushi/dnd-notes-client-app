import { Button, Flex, Modal } from "antd";
import { capitalize } from "../services/StringHelper";

const ConfirmModal = (props) => {
    const { title, open, onClose, onYes, onNo } = props;

    const handleYesButtonClick = () => {
        onYes();
        onClose();
    };

    const handleNoButtonClick = () => {
        onNo();
        onClose();
    };

    return (
        <Modal
            title={capitalize(title)}
            centered
            open={open}
            onCancel={onClose}
            footer={null}
            width={350}
        >
            <Flex justify="space-around">
                <Button
                    style={{ width: "100px" }}
                    size="large"
                    onClick={handleYesButtonClick}
                >
                    Да
                </Button>
                <Button
                    style={{ width: "100px" }}
                    size="large"
                    onClick={handleNoButtonClick}
                >
                    Нет
                </Button>
            </Flex>
        </Modal>
    );
};

export default ConfirmModal;
