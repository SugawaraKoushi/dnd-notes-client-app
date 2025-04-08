import { Flex, FloatButton } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import MemoizedNotification from "./MemoizedNotification";
import MemoizedNotificationShort from "./MemoizedNotificationShort";

const NotificationStack = (props) => {
    const { onClose } = props;

    const handleCloseButtonClick = () => {
        onClose();
    };

    const shortNotifications = useMemo(
        () => props.items.slice(0, -1),
        [props.items]
    );

    const lastNotification = useMemo(
        () => props.items[props.items.length - 1],
        [props.items]
    );

    return (
        props.items &&
        props.items.length > 0 && (
            <Flex className="notification-stack" vertical>
                {shortNotifications.map((item, i) => (
                    <MemoizedNotificationShort
                        key={`short_${item.id}_${i}`}
                        type={item.type}
                        ability={item.ability}
                        value={item.value}
                        modifier={item.modifier}
                    />
                ))}
                <MemoizedNotification
                    key={`main_${lastNotification.id}`}
                    type={lastNotification.type}
                    ability={lastNotification.ability}
                    value={lastNotification.value}
                    modifier={lastNotification.modifier}
                    dice={lastNotification.dice}
                    times={lastNotification.times}
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
