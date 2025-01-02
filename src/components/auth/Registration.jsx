import { Button, Form, Input, Typography } from "antd";
import axios from "axios";
import { useNavigate } from "react-router";

const Registration = () => {
    const { Title } = Typography;
    const navigate = useNavigate();

    const onFinish = async (values) => {
        const url = "http://localhost:8080/api/users/create";

        try {
            await axios.post(url, values).then(() => navigate("/login"));
        } catch (e) {
            console.log(e);
        }
    };

    const validateLogin = async (username) => {
        if (username.length < 3) {
            return Promise.reject(
                new Error("Логин должен содержать более 2-х символов!")
            );
        }

        const url = "http://localhost:8080/api/users/is-exist?";
        const params = {
            username: username,
        };

        try {
            const response = await axios.get(url, { params });
            if (response.data) {
                return Promise.reject(
                    new Error("Пользователь с таким логином уже существует!")
                );
            }
            return Promise.resolve();
        } catch (e) {
            return Promise.reject(new Error(e.message));
        }
    };

    return (
        <div
            style={{
                maxWidth: 600,
                margin: "200px auto",
                textAlign: "center",
                alignItems: "center",
            }}
        >
            <Title level={1}>Регистрация в DnD Notes</Title>
            <Form
                layout="horizontal"
                name="register"
                onFinish={onFinish}
                scrollToFirstError
                labelCol={{ span: 6 }}
            >
                <Form.Item
                    name="firstName"
                    label="Имя:"
                    rules={[
                        {
                            required: true,
                            message: "Введите Ваше имя!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="lastName"
                    label="Фамилия:"
                    rules={[
                        {
                            required: true,
                            message: "Введите Вашу фамилию!",
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    name="username"
                    label="Логин:"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Введите Ваш логин!",
                        },
                        {
                            validator: async (_, value) =>
                                await validateLogin(value),
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="password"
                    label="Пароль:"
                    rules={[
                        {
                            required: true,
                            message: "Введите Ваш пароль!",
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="confirm"
                    label="Повторите пароль:"
                    dependencies={["password"]}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: "Повторите Ваш пароль!",
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (
                                    !value ||
                                    getFieldValue("password") === value
                                ) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(
                                    new Error("Пароли не совпадают!")
                                );
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item style={{ margin: "auto !important" }}>
                    <Button type="primary" htmlType="submit">
                        Зарегистрироваться
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default Registration;
