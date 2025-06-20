import { FloatButton, List } from "antd";
import CharacterTile from "./CharacterTile";
import { PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./index.css";
import axios from "axios";
import { useNavigate } from "react-router";

const CharacterList = () => {
    const [characters, setCharacters] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const data = await getCharacters();
            setCharacters(data);
        };

        fetchData();
    }, []);

    const getCharacters = async () => {
        try {
            let url = "/characters/list";
            const response = await axios.get(url);
            return response.data;
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
        const response = await axios.post(url);
        return response.data.id;
    };

    return (
        <>
            <List
                className="content-layout"
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
                            name={character.name}
                            hp={character.maxHP}
                            currentHp={character.currentHP}
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
