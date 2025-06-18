import React from "react";
import Notification from "./Notification";

const MemoizedNotification = React.memo((props) => {
    return (
        <Notification
            type={props.type}
            ability={props.ability}
            value={props.value}
            modifier={props.modifier}
            dice={props.dice}
            times={props.times}
        />
    );
});

export default MemoizedNotification;
