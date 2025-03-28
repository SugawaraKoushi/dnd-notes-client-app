import { Flex, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";
import { calculateModifier } from "../services/ModifierService";

const AbilityTile = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="ability-tile" id={props.id} vertical>
            <Flex className="ability-tile-header" justify="space-between">
                <Title level={3} >{props.name.toUpperCase()}</Title>
                <Title level={3}>{props.value}</Title>
            </Flex>
            <Flex className="ability-checks">
                <AbilityCheck name="проверка" small={true} value={calculateModifier(props.value)}/>
                <AbilityCheck name="спасбросок" small={true} value={calculateModifier(props.value)} checkable={true} />
            </Flex>
            {props.skills && props.skills.map((skill, i) => (
                <AbilityCheck name={skill} value={calculateModifier(props.value)} checkable={true} />
            ))}
        </Flex>
    );
};

export default AbilityTile;
