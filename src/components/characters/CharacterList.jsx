import { FloatButton, List } from "antd";
import CharacterTile from "./CharacterTile";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./index.css";
import { useNavigate } from "react-router";
import api from "../../api";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            await getCharacters();
        };

        fetchData();
    }, []);

    const getCharacters = async () => {
        try {
            let url = "/characters/list";
            const response = await api.get(url);
            setCharacters(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const handleNewCharacterButtonClick = async () => {
        const characterId = await createCharacter();
        console.log(characterId);
        navigate(`/characters/${characterId}`);
    };

    const createCharacter = async () => {
        const url = "/characters/create";
        const response = await api.post(url);
        return response.data.id;
    };

    const deleteCharacter = async (id) => {
        const url = `/characters/delete/${id}`;
        await api.delete(url);
        await getCharacters();
    };

    return (
        <>
            <List
                className={"content-layout content-layout-centered".concat(
                    characters.length <= 0 ? " content-layout-empty" : 0
                )}
                grid={{
                    gutter: 12,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={characters}
                renderItem={(character) => (
                    <List.Item>
                        <CharacterTile
                            href={`/characters/${character.id}`}
                            id={character.id}
                            name={character.name}
                            maxHP={character.maxHP}
                            currentHP={character.currentHP}
                            onDelete={deleteCharacter}
                        />
                    </List.Item>
                )}
            />
            <FloatButton
                icon={<PlusOutlined />}
                style={{
                    width: "50px",
                    height: "50px",
                }}
                onClick={handleNewCharacterButtonClick}
            />
        </>
    );
};

export default CharacterList;
