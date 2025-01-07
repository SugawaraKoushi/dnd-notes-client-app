import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Button, Flex } from "antd";
import { useEffect, useState } from "react";

const AbilityTile = (props) => {
    const [modifier, setModifier] = useState("+0");

    useEffect(() => {
        calculateModifier();
    });

    const onIncrementButtonClick = () => {
        if (props.value === 20) {
            return;
        }

        props.setValue(props.value + 1);
        calculateModifier();
    };

    const onDecrementButtonClick = () => {
        if (props.value === 0) {
            return;
        }

        props.setValue(props.value - 1);
        calculateModifier();
    };

    const calculateModifier = () => {
        const modifierValue = Math.floor((props.value - 10) / 2);

        if (modifierValue >= 0) {
            setModifier(`+${modifierValue}`);
            return;
        }

        setModifier(modifierValue);
    };

    return (
        <div>
            <Button
                onClick={onIncrementButtonClick}
                type="outlined"
                icon={<UpOutlined />}
                block
                disabled={props.value === 20}
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
                <span>{modifier}</span>
            </Flex>
            <Button
                onClick={onDecrementButtonClick}
                type="outlined"
                icon={<DownOutlined />}
                block
                disabled={props.value === 0}
            />
        </div>
    );
};

export default AbilityTile;
