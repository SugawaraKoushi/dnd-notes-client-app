import { Breadcrumb, List } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import { theme } from "antd";

const CharacterList = () => {
    const characters = ["3", "4", "5"];
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <>
            <Breadcrumb
                style={{
                    margin: "16px 0",
                }}
            >
                <BreadcrumbItem>GПрсонажи</BreadcrumbItem>
            </Breadcrumb>
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
