import { Modal, Typography } from "antd";

const SkillModal = (props) => {
    const { Title } = Typography;


    
    return (
        <Modal
            centered
            open={props.open}
            onOk={props.onClose}
            onCancel={props.onClose}
            footer={null}
        >
            <Title level={2}>{props.title.capitalize()}</Title>
        </Modal>
    );
};

export default SkillModal;
