import { Avatar, Button, Flex, Typography } from "antd";
import { Link } from "react-router";
import "./index.css";
import { DeleteOutlined } from "@ant-design/icons";
import ConfirmModal from "./ConfirmModal";
import { useState } from "react";

const CharacterTile = (props) => {
    const { href, id, avatarLink, name, maxHP, currentHP, onDelete } = props;
    const { Title } = Typography;
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleDeleteButtonClick = () => {
        setIsModalOpen(true);
    };

    const handleDeleteCharacter = async () => {
        onDelete(id);
    };

    return (
        <Flex
            className="character-tile-list-item"
            justify="space-between"
            align="center"
        >
            <Link
                to={href}
                style={{
                    textDecoration: "none",
                    color: "inherit",
                    minWidth: 0,
                }}
            >
                <Flex align="center">
                    <Avatar
                        size={70}
                        shape="square"
                        src={avatarLink}
                        style={{
                            margin: "0 10px 0 0",
                            padding: 0,
                            minWidth: "70px",
                            minHeight: "70px",
                        }}
                    />
                    <Flex vertical style={{ width: "calc(95% - 80px)" }}>
                        <Title
                            level={4}
                            style={{
                                margin: "0 0 3px 0",
                                padding: 0,
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                            }}
                        >
                            {name}
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
                                color: getHpBarFontColor(currentHP, maxHP),
                                fontFamily: "PT Mono, monospace",
                            }}
                        >
                            {currentHP + "/" + maxHP}
                        </p>
                    </Flex>
                </Flex>
            </Link>
            <Flex
                justify="space-between"
                align="top"
                style={{ height: "100%" }}
            >
                <Button
                    icon={<DeleteOutlined size={16} />}
                    size="large"
                    style={{
                        padding: 0,
                        margin: 0,
                        border: "none",
                        boxShadow: "none",
                        width: "fit-content",
                        height: "fit-content",
                        color: "red",
                        zIndex: 1000,
                    }}
                    onClick={handleDeleteButtonClick}
                />
            </Flex>
            <ConfirmModal
                open={isModalOpen}
                onClose={handleModalClose}
                title={"вы действительно хотите удалить персонажа?"}
                onYes={handleDeleteCharacter}
                onNo={handleModalClose}
            />
        </Flex>
    );
};

export default CharacterTile;
