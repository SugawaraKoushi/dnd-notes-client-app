import { Flex, Typography } from "antd";
import Title from "antd/es/skeleton/Title";

const NotificationShort = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="notification-item-short">
            <span className="notification-result">
                {props.value + props.modifier}
            </span>
            <Flex className="notification-info" align="center">
                <Title className="notification-title" level={5}>
                    <span className="notification-title highlighted">
                        {props.type}
                    </span>{" "}
                    {props.ability}
                </Title>
            </Flex>
        </Flex>
    );
};

export default NotificationShort;
