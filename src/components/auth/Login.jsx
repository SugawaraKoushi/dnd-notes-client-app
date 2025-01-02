import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Flex, Form, Input, Typography } from "antd";
import axios from "axios";
import { Link, useNavigate } from "react-router";

const Login = () => {
    const { Title } = Typography;
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const url = "http://localhost:8080/auth/login";

        try {
            await axios.post(url, values).then(() => navigate("/campaigns"));
        } catch (e) {
            console.log(e);
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
                    <Flex justify="space-between" align="center">
                        <Form.Item
                            name="remember"
                            valuePropName="checked"
                            noStyle
                        >
                            <Checkbox>Запомнить</Checkbox>
                        </Form.Item>
                        <Link to="">Забыл пароль</Link>
                    </Flex>
                </Form.Item>
                <Form.Item>
                    <Button block type="primary" htmlType="submit">
                        Войти
                    </Button>
                    или <Link to="">Зарегистрироваться!</Link>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Login;
