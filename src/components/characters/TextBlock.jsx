import { Flex, Input, Typography } from "antd";
import "./index.css";

const TextBlock = (props) => {
    const { title } = props;
    const { Title } = Typography;
    const { TextArea } = Input;

    return (
        <Flex vertical style={{flexGrow: 1}}>
            <Title level={5} style={{ margin: "0" }}>
                {title.toUpperCase()}
            </Title>
            <TextArea style={{ minHeight: "68px", height: "93%", resize: "none" }} />
        </Flex>
    );
};

export default TextBlock;
