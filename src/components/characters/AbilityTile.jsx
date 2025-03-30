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
        props.score
    )}`;
    const modifier = calculateModifier(props.score);

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
                    modifier={modifier}
                    bonus={props.savingThrowBonus}
                />
                <AbilityCheck
                    key={`${props.name} saving throw`}
                    name="спасбросок"
                    skill={false}
                    modalTitle={abilityModalTitle}
                    score={props.score}
                    modifier={props.savingThrow}
                    bonus={props.savingThrowBonus}
                    checkable={true}
                    checked={props.savingThrowProficiency}
                />
            </Flex>
            {props.skills &&
                props.skills.map((skill, i) => (
                    <AbilityCheck
                        key={skill.name}
                        id={i}
                        name={skill.name}
                        skill={true}
                        modifier={skill.score}
                        bonus={skill.bonus}
                        checkable={true}
                        checked={skill.proficiency}
                    />
                ))}
        </Flex>
    );
};

export default AbilityTile;
