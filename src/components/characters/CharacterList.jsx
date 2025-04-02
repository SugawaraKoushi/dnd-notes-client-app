import { Breadcrumb, FloatButton, List } from "antd";
import CharacterTile from "./CharacterTile";
import { PlusOutlined } from "@ant-design/icons";
import { useOutletContext } from "react-router";
import { useEffect } from "react";
import "./index.css";

const CharacterList = () => {
    const characters = [
        <CharacterTile className="character-tile-list-item" name="Дундобород железный" hp="100" currentHp="25" />,
        <CharacterTile className="character-tile-list-item" name="Дундобород железный" hp="100" currentHp="75" />,
        <CharacterTile className="character-tile-list-item" name="Дундобород железный" hp="100" currentHp="100" />,
    ];

    const [setBreadcrumbItems] = useOutletContext();
    const items = [{ title: "Персонажи" }, { title: "Мои персонажи" }];

    useEffect(() => {
        const items = [{ title: "Персонажи" }, { title: "Мои персонажи" }];
        setBreadcrumbItems(items);
    }, []);

    return (
        <>
            <Breadcrumb
                style={{
                    margin: "16px 0",
                }}
                items={items}
            />
            <List
                className="content-layout"
                grid={{
                    gutter: 12,
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 3,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={characters}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <FloatButton
                href="/characters/new"
                icon={<PlusOutlined />}
                style={{
                    width: "50px",
                    height: "50px",
                }}
            />
        </>
    );
};

export default CharacterList;
