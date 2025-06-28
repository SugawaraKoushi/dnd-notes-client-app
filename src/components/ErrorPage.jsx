import {
    Card,
    Typography,
    Divider,
    Collapse,
    Tag,
    Space,
    Alert,
    Row,
    Col,
    Button,
} from "antd";
import {
    WarningOutlined,
    CodeOutlined,
    FileTextOutlined,
    HomeOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router";

const { Title, Text, Paragraph } = Typography;
const { Panel } = Collapse;

const ErrorPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const error = location.state?.error || {
        message: "Unknown error occurred",
        stack: "No stack trace available",
        code: "NO_ERROR_CODE",
    };

    return (
        <Row justify="center" style={{ marginTop: 40 }}>
            <Col xs={24} sm={22} md={20} lg={18} xl={16}>
                <Card>
                    <Space
                        direction="vertical"
                        size="middle"
                        style={{ width: "100%" }}
                    >
                        <Alert
                            message={
                                <Space>
                                    <WarningOutlined />
                                    <Text strong>Ошибка</Text>
                                </Space>
                            }
                            description={error.message} // Используем переданное сообщение
                            type="error"
                            showIcon
                            closable
                        />

                        <Card size="small">
                            <Title level={5} type="danger">
                                Детализация ошибки
                            </Title>
                            <Paragraph>
                                <Text strong>Сообщение:</Text> {error.message}
                            </Paragraph>
                            <Paragraph>
                                <Text strong>Код:</Text>{" "}
                                <Tag color="red">{error.code}</Tag>
                            </Paragraph>
                        </Card>

                        {error.stack && (
                            <Collapse ghost>
                                <Panel
                                    header={
                                        <Space>
                                            <FileTextOutlined />
                                            <Text>Трассировка ошибки</Text>
                                        </Space>
                                    }
                                    key="1"
                                >
                                    <pre
                                        style={{
                                            background: "#f6f6f6",
                                            padding: 12,
                                            borderRadius: 4,
                                            margin: 0,
                                            whiteSpace: "pre-wrap",
                                        }}
                                    >
                                        <code>{error.stack}</code>
                                    </pre>
                                </Panel>
                            </Collapse>
                        )}

                        <Divider />

                        <Space>
                            <Button
                                type="primary"
                                icon={<HomeOutlined />}
                                onClick={() => navigate("/")}
                            >
                                На главную
                            </Button>
                            <Text type="secondary">
                                Если эта ошибка повторяется, обратитесь в службу
                                поддержки, указав данные выше.
                            </Text>
                        </Space>
                    </Space>
                </Card>
            </Col>
        </Row>
    );
};

export default ErrorPage;
