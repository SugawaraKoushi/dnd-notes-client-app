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
            <Flex className="ability-checks">
                <AbilityCheck name="проверка" value={0} />
                <AbilityCheck name="спас-бросок" value={0} checkable={true} />
            </Flex>
            <AbilityCheck name="атлетика" value={0} checkable={true} skill={true} />
        </Flex>
    );
};

export default NewAbilityTile;
