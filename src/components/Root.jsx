import { Layout, Menu, theme } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { Link, Outlet } from "react-router";

const Root = () => {
    const items = [
        {
            key: "/campaigns",
            label: <Link to="/campaigns">Кампании</Link>,
        },
        {
            key: "/characters",
            label: <Link to="/characters">Персонажи</Link>,
        },
    ];

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header></Header>
            <Layout
                style={{ margin: "auto", width: "100%", maxWidth: "1152px" }}
            >
                <Sider>
                    <Menu theme="dark" items={items} mode="inline" />
                </Sider>
                <Content
                    style={{
                        padding: 24,
                    }}
                >
                    <div
                        style={{
                            background: colorBgContainer,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Root;
