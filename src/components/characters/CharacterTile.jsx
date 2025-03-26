import { Avatar, Flex, Typography } from "antd";
import { Link } from "react-router";

const CharacterTile = (props) => {
    const { Title } = Typography;

    const getHpBarFontColor = (currentHealth, maxHealth) => {
        let percentage = (currentHealth / maxHealth) * 100;

        if (percentage <= 25) {
            return "red";
        }

        if (percentage <= 75) {
            return "orange";
        }

        return "green";
    };

    return (
        <Link style={{ textDecoration: "none", color: "inherit" }}>
            <Flex
                className={props.className}
                align="center"
            >
                <Avatar
                    size={70}
                    shape="square"
                    src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                    style={{ margin: "0 10px 0 0", padding: 0 }}
                />
                <Flex vertical style={{ maxWidth: "242px", width: "100%" }}>
                    <Title
                        level={4}
                        style={{ margin: "0 0 3px 0", padding: 0 }}
                    >
                        {props.name}
                    </Title>
                    <p
                        style={{
                            maxWidth: "242px",
                            margin: "0 0 8px 0",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                        }}
                    >
                        Это краткое описание персонажа о том, как он поражал
                        своих врагов
                    </p>
                    <p
                        style={{
                            margin: 0,
                            color: getHpBarFontColor(props.currentHp, props.hp),
                            fontFamily: "PT Mono, monospace",
                        }}
                    >
                        {props.currentHp + "/" + props.hp}
                    </p>
                </Flex>
            </Flex>
        </Link>
    );
};

export default CharacterTile;
