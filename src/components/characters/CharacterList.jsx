import { Breadcrumb, List } from "antd";
import { theme } from "antd";

const CharacterList = () => {
    const characters = ["3", "4", "5"];
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const breadcrumbItems = [{ title: "Мои персонажи" }];

    return (
        <>
            <Breadcrumb
                style={{
                    margin: "16px 0",
                }}
                items={breadcrumbItems}
            />
            <div
                style={{
                    background: colorBgContainer,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <List
                    dataSource={characters}
                    renderItem={(item) => (
                        <List.Item>
                            <a href={item}>{item}</a>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};

export default CharacterList;
