import { Flex, Input, Typography } from "antd";
import "./index.css";
import { useEffect, useState } from "react";

const TextBlock = (props) => {
    const { title, id, onChange, value } = props;
    const { Title } = Typography;
    const { TextArea } = Input;
    const [text, setText] = useState("");

    useEffect(() => {
        setText(value);
    }, [value]);

    const handleBlur = (event) => {
        onChange(event.target.value);
    };

    const handleInput = (event) => {
        setText(event.target.value);
    };

    return (
        <Flex id={id} vertical style={{ flexGrow: 1 }}>
            <Title level={5} style={{ margin: "0" }}>
                {title.toUpperCase()}
            </Title>
            <TextArea
                style={{ height: "100%", resize: "none", width: "100%" }}
                value={text}
                onBlur={handleBlur}
                onInput={handleInput}
            />
        </Flex>
    );
};

export default TextBlock;
