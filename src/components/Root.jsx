import { Button, Flex, Layout, Menu } from "antd";
import { Content, Header } from "antd/es/layout/layout";
import { Link, Outlet, useNavigate } from "react-router";
import instance from "../axios";
import logoImage from "../../src/icons/logo.png";

const Root = () => {
    const navigate = useNavigate();

    const items = [
        {
            key: "/characters/list",
            label: <Link to="/characters/list">Мои персонажи</Link>,
        },
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
                    <Flex align="center">
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
                        <Menu
                            className="menu-toolbar"
                            theme="dark"
                            items={items}
                            mode="horizontal"
                            disabledOverflow={true}
                        />
                    </Flex>
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
                style={{ margin: "auto", width: "100%",minWidth: 0, maxWidth: "1200px" }}
            >
                <Content>
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};

export default Root;
