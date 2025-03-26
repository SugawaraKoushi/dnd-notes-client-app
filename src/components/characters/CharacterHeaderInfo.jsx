import { Avatar, Flex, Typography } from "antd";

const CharacterHeaderInfo = () => {
    const { Title } = Typography;

    return (
        <Flex
            align="flex-start"
            style={{ maxWidth: "70000px", width: "100%", height: "100%" }}
        >
            <Avatar
                size={68}
                shape="square"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style={{ margin: "0 10px 0 0", padding: "0" }}
            />
            <Flex vertical style={{ maxWidth: "242px", width: "100%" }}>
                <Title level={4} style={{ margin: "0 0 3px 0", padding: "0" }}>
                    Имя
                </Title>
                <p
                    style={{
                        maxWidth: "242px",
                        margin: "0 0 0 0",
                        textOverflow: "ellipsis",
                        overflow: "visible",
                        whiteSpace: "nowrap",
                    }}
                >
                    Это краткое описание персонажа о том, как он поражал своих
                    врагов
                </p>
            </Flex>
        </Flex>
    );
};

export default CharacterHeaderInfo;
