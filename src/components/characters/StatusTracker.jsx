import { Button, Checkbox, Dropdown, Flex } from "antd";

const StatusTracker = () => {
    const exhaustingLevels = [
        { key: 1, label: <span>0</span> },
        { key: 2, label: <span>1</span> },
        { key: 3, label: <span>2</span> },
        { key: 4, label: <span>2</span> },
        { key: 5, label: <span>4</span> },
        { key: 6, label: <span>5</span> },
        { key: 7, label: <span>6</span> },
    ];

    return (
        <Flex
            justify="space-between"
            align="center"
            gap="small"
            style={{ width: "100%" }}
        >
            <Flex className="status-tracker-item-small" vertical align="center">
                <Button style={{ width: "100%" }}>+0</Button>
                <span class="small-description">инициатива</span>
            </Flex>
            <Flex className="status-tracker-item-small" vertical align="center">
                <Checkbox className="inspire-checkbox" />
                <label class="small-description">вдохновение</label>
            </Flex>
            <Flex className="status-tracker-item-small" vertical align="center">
                <Dropdown menu={{ items: exhaustingLevels }} placement="bottom">
                    <Button style={{ width: "100%" }}>0</Button>
                </Dropdown>
                <span class="small-description">истощение</span>
            </Flex>
            <Flex className="status-tracker-item" vertical align="center">
                <Button style={{ width: "100%" }}>+0</Button>
                <span class="small-description">состояния</span>
            </Flex>
        </Flex>
    );
};

export default StatusTracker;
