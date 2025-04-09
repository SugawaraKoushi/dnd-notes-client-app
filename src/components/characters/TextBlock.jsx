import { Flex, Input, Typography } from "antd";
import "./index.css";

const TextBlock = () => {
    const { Title } = Typography;
    const { TextArea } = Input;

    return (
        <Flex vertical>
            <Title level={5} style={{ margin: "0" }}>
                ПРОЧИЕ ВЛАДЕНИЯ И ЯЗЫКИ
            </Title>
            <TextArea style={{ height: "68px", resize: "none" }} />
        </Flex>
    );
};

export default TextBlock;
