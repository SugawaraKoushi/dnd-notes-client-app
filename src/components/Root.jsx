import { Layout, Menu, theme } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router";

const Root = () => {
    const navigate = useNavigate();
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

    const handleMenuItemClick = (e) => {
        navigate(e.key);
        console.log(e);
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header></Header>
            <Layout
                style={{ margin: "auto", width: "100%", maxWidth: "1152px" }}
            >
                <Sider>
                    <Menu theme={theme} items={items} />
                </Sider>
                <Content
                    style={{
                        padding: "0 48px",
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
            <Footer></Footer>
        </Layout>
    );
};

export default Root;
