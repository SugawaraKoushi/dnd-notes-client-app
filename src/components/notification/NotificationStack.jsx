import { Flex, FloatButton } from "antd";
import Notification from "./Notification";
import NotificationShort from "./NotificationShort";
import { CloseOutlined } from "@ant-design/icons";
import { useState } from "react";

const NotificationStack = (props) => {
    const [notifications, setNotifications] = useState(props.items);

    const handleCloseButtonClick = () => {
        setNotifications([]);
    };

    return (
        notifications && notifications.length > 0 && (
            <Flex className="notification-stack" vertical>
                <NotificationShort />
                <NotificationShort />
                <NotificationShort />
                <NotificationShort />
                <Notification />
                <FloatButton
                    size
                    icon={<CloseOutlined />}
                    onClick={handleCloseButtonClick}
                    style={{
                        width: "30px",
                        height: "30px",
                        position: "fixed",
                        bottom: "20px",
                        left: "410px",
                        border: "1px solid #d9d9d9",
                    }}
                />
            </Flex>
        )
    );
};

export default NotificationStack;
