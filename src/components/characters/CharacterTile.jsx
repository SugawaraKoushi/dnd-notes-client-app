import { Avatar, Flex, Typography } from "antd";
import { Link } from "react-router";
import "./index.css";

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
        <Link to={props.href} style={{ textDecoration: "none", color: "inherit", minWidth: 0}}>
            <Flex className="character-tile-list-item" align="center">
                <Avatar
                    size={70}
                    shape="square"
                    src="https://avatarko.ru/img/kartinka/1/Crazy_Frog.jpg"
                    style={{
                        margin: "0 10px 0 0",
                        padding: 0,
                        minWidth: "70px",
                        minHeight: "70px",
                    }}
                />
                <Flex vertical style={{ width: "calc(100% - 80px)" }}>
                    <Title
                        level={4}
                        style={{ margin: "0 0 3px 0", padding: 0 }}
                    >
                        {props.name}
                    </Title>
                    <p
                        style={{
                            margin: "0 0 8px 0",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            width: "100%",
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
