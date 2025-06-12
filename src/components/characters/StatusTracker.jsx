import { Button, Checkbox, Dropdown, Flex } from "antd";
import { modifierAsString } from "../services/ModifierService";
import { useContext } from "react";
import { StatusTrackerContext } from "./context/StatusTrackerContext";
import "./index.css";
import { rollDice } from "../services/RollDiceService";
import { NotificationContext } from "./context/NotificationContext";

const StatusTracker = (props) => {
    const { onInspirationChange, onExhaustChange } =
        useContext(StatusTrackerContext);
    const { onRollButtonClick } = useContext(NotificationContext);

    const exhaustingLevels = [
        { key: 1, label: <span>0</span>, onClick: () => onExhaustChange(0) },
        { key: 2, label: <span>1</span>, onClick: () => onExhaustChange(1) },
        { key: 3, label: <span>2</span>, onClick: () => onExhaustChange(2) },
        { key: 4, label: <span>3</span>, onClick: () => onExhaustChange(3) },
        { key: 5, label: <span>4</span>, onClick: () => onExhaustChange(4) },
        { key: 6, label: <span>5</span>, onClick: () => onExhaustChange(5) },
        { key: 7, label: <span>6</span>, onClick: () => onExhaustChange(6) },
    ];

    const handleIniativeButtonClick = () => {
        let dice = 20;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "проверка",
            value: value,
            modifier: props.initiative,
            dice: dice,
            times: times,
            ability: "инициативы",
        };

        onRollButtonClick(result);
    };

    const handleInspirationChange = () => {
        onInspirationChange();
    };

    return (
        <Flex
            justify="space-between"
            align="center"
            gap="small"
            style={{ width: "100%" }}
        >
            <Flex className="status-tracker-item-small" vertical align="center">
                <Button
                    id="initiative-button"
                    onClick={handleIniativeButtonClick}
                >
                    {modifierAsString(props.initiative)}
                </Button>
                <span className="small-description">инициатива</span>
            </Flex>
            <Flex className="status-tracker-item-small" vertical align="center">
                <Checkbox
                    className="inspire-checkbox"
                    checked={props.inspiration}
                    onChange={handleInspirationChange}
                />
                <label className="small-description">вдохновение</label>
            </Flex>
            <Flex className="status-tracker-item-small" vertical align="center">
                <Dropdown
                    menu={{ items: exhaustingLevels }}
                    placement="bottom"
                    trigger={["click"]}
                >
                    <Button id="exhaust-button">{props.exhausted}</Button>
                </Dropdown>
                <span className="small-description">истощение</span>
            </Flex>
            <Flex className="status-tracker-item" vertical align="center">
                <Button style={{ width: "100%", height: "44px" }}>
                    <Flex vertical>
                        <p style={{ padding: 0, margin: 0 }}>-</p>
                        <span className="small-description">состояния</span>
                    </Flex>
                </Button>
            </Flex>
        </Flex>
    );
};

export default StatusTracker;
