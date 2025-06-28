import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Flex, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router";
import axios from "axios";

const Login = () => {
    const { Title } = Typography;
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const url = "/auth/login";

        try {
            await axios
                .post(url, values)
                .then(() => navigate("/characters/list"));
        } catch (error) {
            navigate("/error", {
                state: {
                    error: {
                        message: error.message,
                        stack: error.stack,
                        code: error.code || "NO_CODE",
                    },
                },
            });
        }
    };

    return (
        <div
            style={{
                width: 360,
                margin: "200px auto",
                textAlign: "center",
                alignItems: "center",
            }}
        >
            <Title level={1}>Вход в DnD Notes</Title>
            <Form
                name="login"
                initialValues={{
                    remember: false,
                }}
                onFinish={onFinish}
            >
                <Flex vertical>
                    <Form.Item
                        name="username"
                        rules={[
                            {
                                required: true,
                                message: "Введите Ваш логин!",
                            },
                        ]}
                    >
                        <Input prefix={<UserOutlined />} placeholder="Логин" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: "Введите Ваш пароль!",
                            },
                        ]}
                    >
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Пароль"
                        />
                    </Form.Item>
                    <Form.Item>
                        <Button block type="primary" htmlType="submit">
                            Войти
                        </Button>
                        или <Link to="/register">Зарегистрироваться!</Link>
                    </Form.Item>
                </Flex>
            </Form>
        </div>
    );
};

export default Login;
