import { List } from "antd";
import axios from "axios";
import { useLoaderData } from "react-router";

export const loader = async () => {
    const url = "http://localhost:8080/api/campaign/get";
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (err) {
        alert(err.message);
    }
}

const CampaignList = () => {
    const campaigns = useLoaderData();

    return (
        <List
            header={<div>Кампании</div>}
            dataSource={campaigns}
            renderItem={(item) => (
                <List.Item>
                    <a href={item}>{item.name}</a>
                </List.Item>
            )}
        />
    );
};

export default CampaignList;
