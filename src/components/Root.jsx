import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

const Root = () => {
    return (
        <Layout>
            <Header></Header>
            <Layout>
                <Sider></Sider>
                <Content></Content>
            </Layout>
            <Footer></Footer>
        </Layout>
    );
};

export default Root;
