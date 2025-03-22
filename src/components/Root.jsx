import { Button, Flex, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet, useNavigate } from "react-router";
import instance from "../axios";
import logoImage from "../../src/icons/logo.png";

const Root = () => {
    const navigate = useNavigate();

    const items = [
        {
            key: "/campaigns/list",
            label: <Link to="/campaigns/list">Кампании</Link>,
        },
        {
            key: "/characters/list",
            label: <Link to="/characters/list">Персонажи</Link>,
        },
        {
            key: "/characters/not-new",
            label: <Link to="/characters/not-new">Новый персонаж</Link>,
        }
    ];

    const handleLogoutButtonClick = async () => {
        const url = "/logout";

        try {
            await instance.get(url).then(() => navigate("/login"));
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <Layout style={{ minHeight: "100vh" }}>
            <Header>
                <Flex
                    style={{ maxWidth: "1200px", margin: "auto" }}
                    align="center"
                    justify="space-between"
                >
                    <div
                        style={{
                            display: "inline-flex",
                            alignItems: "center",
                            margin: "0",
                        }}
                    >
                        <Link
                            to="/"
                            style={{ display: "flex", marginRight: "20px" }}
                        >
                            <img
                                id="logo"
                                alt="logo"
                                src={logoImage}
                                style={{ height: "40px" }}
                            />
                        </Link>
                        <Menu theme="dark" items={items} mode="horizontal" />
                    </div>
                    <Button
                        id="logout"
                        type="link"
                        onClick={handleLogoutButtonClick}
                    >
                        Выход
                    </Button>
                </Flex>
            </Header>
            <Layout
                style={{ margin: "auto", width: "100%", maxWidth: "1200px" }}
            >
                <Content
                    style={{
                        padding: 24,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Root;
