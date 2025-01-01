import { Breadcrumb, List, theme } from "antd";
import BreadcrumbItem from "antd/es/breadcrumb/BreadcrumbItem";
import axios from "axios";
import { redirect, useLoaderData } from "react-router";

export const loader = async () => {
    const url = "http://localhost:8080/api/campaigns/get";
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        if (err.status === 401) {
            return redirect("/login");
        }
    }
};

const CampaignList = () => {
    const campaigns = useLoaderData();
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
                <BreadcrumbItem>Кампании</BreadcrumbItem>
            </Breadcrumb>
            <div
                style={{
                    background: colorBgContainer,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <List
                    dataSource={campaigns}
                    renderItem={(item) => (
                        <List.Item>
                            <a href={item}>{item.name}</a>
                        </List.Item>
                    )}
                />
            </div>
        </>
    );
};

export default CampaignList;
