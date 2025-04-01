import { Flex, Typography } from "antd";
import "./index.css";

const Notification = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="notification-item">
            <Flex className="notification-info" vertical align="flex-start">
                <Title className="notification-title" level={5}>
                    <span className="notification-title highlighted">
                        проверка
                    </span>{" "}
                    харизмы
                </Title>
                <span className="notification-result-details">(15)+5</span>
                <span className="notification-result-dice">(1к20)+5</span>
            </Flex>
            <span className="notification-result">15</span>
        </Flex>
    );
};

export default Notification;
