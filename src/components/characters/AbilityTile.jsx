import { Flex, Typography } from "antd";
import "./index.css";
import AbilityCheck from "./AbilityCheck";
import {
    calculateModifier,
    calculateModifierAsString,
} from "../services/ModifierService";

const AbilityTile = (props) => {
    const { Title } = Typography;
    const abilityModalTitle = `${props.name} ${calculateModifierAsString(
        props.value
    )}`;

    return (
        <Flex className="ability-tile" id={props.id} vertical>
            <Flex className="ability-tile-header" justify="space-between">
                <Title level={3}>{props.name.toUpperCase()}</Title>
                <Title level={3}>{props.score}</Title>
            </Flex>
            <Flex className="ability-checks">
                <AbilityCheck
                    key={`${props.name} check`}
                    name="проверка"
                    skill={false}
                    modalTitle={abilityModalTitle}
                    score={props.score}
                    modifier={calculateModifier(props.score)}
                />
                <AbilityCheck
                    key={`${props.name} saving throw`}
                    name="спасбросок"
                    skill={false}
                    modalTitle={abilityModalTitle}
                    score={props.score}
                    modifier={calculateModifier(props.score)}
                    checkable={true}
                    checked={props.savingThrowProficiency}
                />
            </Flex>
            {props.skills &&
                props.skills.map((skill, i) => (
                    <AbilityCheck
                        key={`${props.name} ability ${i}`}
                        name={skill}
                        skill={true}
                        value={calculateModifier(props.score)}
                        checkable={true}
                    />
                ))}
        </Flex>
    );
};

export default AbilityTile;
