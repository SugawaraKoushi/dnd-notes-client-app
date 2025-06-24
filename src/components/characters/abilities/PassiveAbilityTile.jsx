import { Flex, Typography } from "antd";
import PassiveAbilityCheck from "./PassiveAbilityCheck";
import "./index.css";

const PassiveAbilityTile = (props) => {
    const { Title } = Typography;

    return (
        <Flex className="passive-ability-tile" vertical>
            <Title level={5} style={{ margin: "0" }}>
                {"пассивные чувства".toUpperCase()}
            </Title>
            {props.skills &&
                props.skills.map((skill, i) => (
                    <PassiveAbilityCheck
                        key={skill.name}
                        name={skill.name}
                        score={skill.score}
                    />
                ))}
        </Flex>
    );
};

export default PassiveAbilityTile;
