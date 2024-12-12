import { List } from "antd";

const CharacterList = () => {
    const characters = ["3", "4", "5"];

    return (
        <List
            header={<div>Мои персонажи</div>}
            dataSource={characters}
            renderItem={(item) => (
                <List.Item>
                    <a href={item}>{item}</a>
                </List.Item>
            )}
        />
    );
};

export default CharacterList;
