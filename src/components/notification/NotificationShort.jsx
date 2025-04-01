import { Flex, Typography } from "antd";
import Title from "antd/es/skeleton/Title";

const NotificationShort = () => {
    const { Title } = Typography;

    return (
        <Flex className="notification-item-short">
            <span className="notification-result">15</span>
            <Flex className="notification-info" align="center">
                <Title className="notification-title" level={5}>
                    <span className="notification-title highlighted">
                        проверка
                    </span>{" "}
                    харизмы
                </Title>
            </Flex>
        </Flex>
    );
};

export default NotificationShort;
