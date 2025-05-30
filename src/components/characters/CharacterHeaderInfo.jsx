import { Avatar, Flex, Typography } from "antd";
import { capitalize } from "../services/StringHelper";
import "./index.css";
import { useContext } from "react";
import { CharacterHeaderContext } from "./context/CharacterHeaderContext";

const CharacterHeaderInfo = () => {
    const { Title } = Typography;
    const { name, race, className, subclass } = useContext(
        CharacterHeaderContext
    );

    return (
        <Flex
            justify="center"
            align="flex-start"
            style={{ height: "auto", overflow: "visible" }}
        >
            <Avatar
                size={68}
                shape="square"
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                style={{ margin: "0 10px 0 0", padding: "0" }}
            />
            <Flex vertical style={{ minWidth: "300px", width: "300px" }}>
                <Title level={4} style={{ margin: "0 0 3px 0", padding: "0" }}>
                    {capitalize(name)}
                </Title>
                <p
                    style={{
                        maxWidth: "100%",
                        margin: "0 0 0 0",
                        whiteSpace: "nowrap",
                    }}
                >
                    {`${race} — ${className}, ${subclass}`}
                </p>
            </Flex>
        </Flex>
    );
};

export default CharacterHeaderInfo;
