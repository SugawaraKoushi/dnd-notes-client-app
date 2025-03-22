import { Flex, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";

const NewAbilityTile = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="ability-tile" vertical>
            <Flex className="ability-tile-header" justify="space-between">
                <Title level={3} >{props.name.toUpperCase()}</Title>
                <Title level={3}>{props.value}</Title>
            </Flex>
            <Flex className="ability-checks">
                <AbilityCheck name="проверка" small={true} value={0} />
                <AbilityCheck name="спасбросок" small={true} value={0} checkable={true} />
            </Flex>
            {props.skills && props.skills.map((skill, i) => (
                <AbilityCheck name={skill} value={0} checkable={true} />
            ))}
        </Flex>
    );
};

export default NewAbilityTile;
