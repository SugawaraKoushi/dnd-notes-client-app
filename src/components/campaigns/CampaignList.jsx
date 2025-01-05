import { Breadcrumb, List, theme } from "antd";
import { redirect, useLoaderData } from "react-router";
import instance from "../../axios";


export const loader = async () => {
    const url = "/api/campaigns/get";
    try {
        const response = await instance.get(url, { withCredentials: true });
        return response.data;
    } catch (err) {
        console.log(err);
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

    const breadcrumbItems = [{ title: "Кампании" }];

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
