import { Layout, Menu } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { useState } from "react";

const Root = () => {
    const [theme, setTheme] = useState("dark");
    const items = [{ key: "0", label: "Кампании" }];

    return (
        <Layout style={{ height: "100vh" }}>
            <Header></Header>
            <Layout
                style={{ margin: "auto", width: "100%", maxWidth: "1270px" }}
            >
                <Sider>
                    <Menu theme={theme} items={items} />
                </Sider>
                <Content></Content>
            </Layout>
            <Footer></Footer>
        </Layout>
    );
};

export default Root;
