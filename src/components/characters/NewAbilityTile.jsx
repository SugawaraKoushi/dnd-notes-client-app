import { Flex, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";

const NewAbilityTile = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="ability-tile" vertical>
            <Flex className="ability-tile-header" justify="space-between">
                <Title level={2}>{props.name.toUpperCase()}</Title>
                <Title level={2}>{props.value}</Title>
            </Flex>
            <div style={{ display: "flex" }}>
                <AbilityCheck name="проверка" value={0} checkable={false} />
                <AbilityCheck name="спас-бросок" value={0} checkable={true} />
            </div>
        </Flex>
    );
};

export default NewAbilityTile;
