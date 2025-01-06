import { FloatButton, List } from "antd";
import CharacterTile from "./CharacterTile";
import { PlusOutlined } from "@ant-design/icons";

const CharacterList = () => {
    const characters = [
        <CharacterTile name="Дундобород железный" hp="100" currentHp="25" />,
        <CharacterTile name="Дундобород железный" hp="100" currentHp="75" />,
        <CharacterTile name="Дундобород железный" hp="100" currentHp="100" />,
    ];

    return (
        <>
            <List
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
