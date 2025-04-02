import { Flex, Typography } from "antd";
import "./index.css";
import { modifierAsString } from "../services/ModifierService";

const Notification = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="notification-item">
            <Flex className="notification-info" vertical align="flex-start">
                <Title className="notification-title" level={5}>
                    <span className="notification-title highlighted">
                        {props.type}
                    </span>{" "}
                    {props.ability}
                </Title>
                <span className="notification-result-details">
                    ({props.value}){modifierAsString(props.modifier)}
                </span>
                <span className="notification-result-dice">
                    (1к20){modifierAsString(props.modifier)}
                </span>
            </Flex>
            <span className="notification-result">
                {props.value + props.modifier}
            </span>
        </Flex>
    );
};

export default Notification;
