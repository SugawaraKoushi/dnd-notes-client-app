import { List } from "antd";

const CampaignList = () => {
    const campaigns = ["1", "2", "3"];

    return (
        <List
            header={<div>Кампании</div>}
            dataSource={campaigns}
            renderItem={(item) => (
                <List.Item>
                    <a href={item}>{item}</a>
                </List.Item>
            )}
        />
    );
};

export default CampaignList;
