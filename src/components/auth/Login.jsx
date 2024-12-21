import { Button, Form, Input, Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

const Login = () => {
    const { Title } = Typography;
    const navigate = useNavigate();

    const onFinish = (values) => {
        const url = "http://localhost:8080/api/auth/login"
        try {
            axios.post(url,{ params: values }).then(() => navigate("/campaigns"))
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div
            style={{
                width: 600,
                margin: "200px auto",
                textAlign: "center",
                alignItems: "center"
            }}
        >
            <Title level={1}>Вход в DnD Notes</Title>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="Логин"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: "Поле должно быть заполнено",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: "Поле должно быть заполнено",
                        },
                    ]}
                >
                    <Input type="password" />
                </Form.Item>
                <Form.Item label={null}>
                    <Button type="primary" htmlType="submit">
                        Войти
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
