import { Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
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

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Menu
                    style={{ maxWidth: "1152px", margin: "auto" }}
                    theme="dark"
                    items={items}
                    mode="horizontal"
                />
            </Header>
            <Layout
                style={{ margin: "auto", width: "100%", maxWidth: "1152px" }}
            >
                <Content
                    style={{
                        padding: 24,
                    }}
                >
                    {/* <div
                        style={{
                            background: colorBgContainer,
                            padding: 24,
                            borderRadius: borderRadiusLG,
                        }}
                    > */}
                    <Outlet />
                    {/* </div> */}
                </Content>
            </Layout>
        </Layout>
    );
};

export default Root;
