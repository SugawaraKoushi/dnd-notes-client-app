import { Flex, FloatButton } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { useMemo } from "react";
import MemoizedNotification from "./MemoizedNotification";
import MemoizedNotificationShort from "./MemoizedNotificationShort";

const NotificationStack = (props) => {
    const { onClose, items } = props;

    const handleCloseButtonClick = () => {
        onClose();
    };

    const notificationsWithKeys = useMemo(() => {
        return items.map((item) => ({
            ...item,
            stableKey: item.id || Math.random().toString(36),
        }));
    }, [items]);

    const shortNotifications = useMemo(
        () => notificationsWithKeys.slice(0, -1),
        [notificationsWithKeys]
    );

    const lastNotification = useMemo(
        () => notificationsWithKeys[notificationsWithKeys.length - 1],
        [notificationsWithKeys]
    );

    return (
        notificationsWithKeys &&
        notificationsWithKeys.length > 0 && (
            <Flex className="notification-stack" vertical>
                {shortNotifications.map((item, i) => (
                    <MemoizedNotificationShort
                        key={`short_${item.stableKey}`}
                        type={item.type}
                        ability={item.ability}
                        value={item.value}
                        modifier={item.modifier}
                    />
                ))}
                <MemoizedNotification
                    key={`main_${lastNotification.stableKey}`}
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
