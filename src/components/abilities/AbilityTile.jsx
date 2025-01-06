import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";

const AbilityTile = (props) => {
    const onIncrementButtonClick = () => {
        props.increment();
    };

    return (
        <div>
            <Button
                onClick={onIncrementButtonClick}
                type="outlined"
                icon={<UpOutlined />}
                block
            />
            <Flex
                vertical
                align="center"
                style={{
                    borderRadius: "8px",
                    border: "1px solid #d0d0d0",
                    width: "120px",
                    padding: "8px",
                }}
            >
                <span
                    style={{
                        fontSize: "11pt",
                    }}
                >
                    {props.name.toUpperCase()}
                </span>
                <span
                    style={{
                        fontSize: "32pt",
                        fontWeight: 500,
                    }}
                >
                    {props.value}
                </span>
                <span>+0</span>
            </Flex>
            <Button type="outlined" icon={<DownOutlined />} block />
        </div>
    );
};

export default AbilityTile;
