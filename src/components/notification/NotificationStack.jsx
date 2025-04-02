import { Flex, FloatButton } from "antd";
import Notification from "./Notification";
import NotificationShort from "./NotificationShort";
import { CloseOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";

const NotificationStack = (props) => {
    const { onClose, onPush } = props;
    const [items, setItems] = useState(props.items);
    const [currentNotification, setCurrentNotification] = useState();

    useEffect(() => {
        console.log(props.items);
    });

    const handleCloseButtonClick = () => {
        setItems([]);
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
                        ability="силы"
                        value={item.value}
                        modifier={item.modifier}
                    />
                ))}
                <Notification
                    key={props.items[props.items.length - 1].type + Date.now()}
                    type={props.items[props.items.length - 1].type}
                    ability="силы"
                    value={props.items[props.items.length - 1].value}
                    modifier={props.items[props.items.length - 1].modifier}
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
