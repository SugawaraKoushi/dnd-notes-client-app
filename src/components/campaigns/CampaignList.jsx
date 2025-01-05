import { FloatButton, List } from "antd";
import { redirect, useLoaderData } from "react-router";
import instance from "../../axios";
import { PlusCircleTwoTone, PlusOutlined } from "@ant-design/icons";

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

    return (
        <>
            <List
                dataSource={campaigns}
                renderItem={(item) => (
                    <List.Item>
                        <List.Item.Meta
                            title={item.name}
                            description={item.description}
                        />
                    </List.Item>
                )}
            />
            <FloatButton
                href="/campaigns/new"
                icon={<PlusOutlined />}
                style={{
                    width: "50px",
                    height: "50px",
                }}
            />
        </>
    );
};

export default CampaignList;
