import React from "react";
import NotificationShort from "./NotificationShort";

const MemoizedNotificationShort = React.memo((props) => {
    return (
        <NotificationShort
            key={Math.random().toString(36)}
            type={props.type}
            ability={props.ability}
            value={props.value}
            modifier={props.modifier}
        />
    );
});

export default MemoizedNotificationShort;
