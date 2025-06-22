import { Flex, Typography } from "antd";
import AbilityCheck from "./AbilityCheck";
import {
    calculateModifier,
    calculateModifierAsString,
} from "../../services/ModifierService";
import "./index.css";

const AbilityTile = (props) => {
    const {
        name,
        skills,
        score,
        id,
        notificationName,
        savingThrow,
        savingThrowBonus,
        savingThrowProficiency,
    } = props;
    const { Title } = Typography;
    const abilityModalTitle = `${name} ${calculateModifierAsString(score)}`;
    const modifier = calculateModifier(score);

    return (
        <Flex className="ability-tile" id={id} vertical>
            <Flex className="ability-tile-header" justify="space-between">
                <Title level={3}>{name.toUpperCase()}</Title>
                <Title level={3}>{score}</Title>
            </Flex>
            <Flex className="ability-checks">
                <AbilityCheck
                    id={id}
                    skills={skills}
                    name="проверка"
                    notificationName={notificationName}
                    skill={false}
                    modalTitle={abilityModalTitle}
                    score={score}
                    modifier={modifier}
                    bonus={savingThrowBonus}
                />
                <AbilityCheck
                    id={id}
                    skills={skills}
                    name="спасбросок"
                    notificationName={notificationName}
                    skill={false}
                    modalTitle={abilityModalTitle}
                    score={score}
                    modifier={savingThrow}
                    bonus={savingThrowBonus}
                    checkable={true}
                    checked={savingThrowProficiency}
                />
            </Flex>
            {skills &&
                skills.map((skill) => (
                    <AbilityCheck
                        id={skill.id}
                        key={skill.id}
                        name={skill.name}
                        notificationName={skill.notificationName}
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
