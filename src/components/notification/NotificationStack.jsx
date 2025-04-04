import { Flex, FloatButton } from "antd";
import Notification from "./Notification";
import NotificationShort from "./NotificationShort";
import { CloseOutlined } from "@ant-design/icons";

const NotificationStack = (props) => {
    const { onClose } = props;

    const handleCloseButtonClick = () => {
        onClose();
    };

    return (
        props.items &&
        props.items.length > 0 && (
            <Flex className="notification-stack" vertical>
                {props.items.slice(0, -1).map((item, i) => (
                    <NotificationShort
                        key={
                            Date.now() +
                            `${item.type}-${item.value}-${item.modifier}-${i}` +
                            Date.now()
                        }
                        type={item.type}
                        ability={item.ability}
                        value={item.value}
                        modifier={item.modifier}
                    />
                ))}
                <Notification
                    key={props.items[props.items.length - 1].type + Date.now()}
                    type={props.items[props.items.length - 1].type}
                    ability={props.items[props.items.length - 1].ability}
                    value={props.items[props.items.length - 1].value}
                    modifier={props.items[props.items.length - 1].modifier}
                    dice={props.items[props.items.length - 1].dice}
                    times={props.items[props.items.length - 1].times}
                />
                <FloatButton
                    className="notification-stack-button"
                    icon={<CloseOutlined />}
                    onClick={handleCloseButtonClick}
                />
            </Flex>
        )
    );
};

export default NotificationStack;
