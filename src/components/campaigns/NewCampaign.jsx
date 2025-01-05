import { Button, Flex, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

const NewCampaign = () => {
    const { TextArea } = Input;
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const url = "/api/campaigns/create";

        try {
            await axios
                .post(url, values)
                .then(() => navigate("/campaigns/list"));
        } catch (e) {
            console.log(e);
        }
    };

    const handleCancelButtonClick = () => {
        navigate("/campaigns/list");
    };

    return (
        <Form name="campaign" onFinish={onFinish} labelCol={{ span: 2 }}>
            <Form.Item
                required
                name="name"
                label="Название:"
                rules={[
                    {
                        required: true,
                        message: "Введите название кампании!",
                    },
                ]}
            >
                <Input />
            </Form.Item>
            <Form.Item name="shortDescription" label="Краткое описание:">
                <Input />
            </Form.Item>
            <Form.Item name="description" label="Описание:">
                <TextArea autoSize={{ maxRows: 25 }} />
            </Form.Item>
            <Form.Item>
                <Flex gap="small" style={{ float: "right" }}>
                    <Button id="save-btn" type="primary" htmlType="submit">
                        Сохранить
                    </Button>
                    <Button
                        id="cancel-btn"
                        type="default"
                        onClick={handleCancelButtonClick}
                    >
                        Отмена
                    </Button>
                </Flex>
            </Form.Item>
        </Form>
    );
};

export default NewCampaign;
