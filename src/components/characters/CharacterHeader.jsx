import { Checkbox, Flex } from "antd";
import CharacterHeaderInfo from "./CharacterHeaderInfo";
import { modifierAsString } from "../services/ModifierService";
import "./index.css";

const CharacterHeader = (props) => {
    return (
        <Flex
            className="character-header"
            align="center"
            justify="space-between"
        >
            <CharacterHeaderInfo name={props.name} />
            <Flex
                align="center"
                justify="space-between"
                style={{ width: "595px" }}
            >
                <Flex justify="space-between" style={{ width: "224px" }}>
                    <Flex vertical align="center">
                        <div className="stat-values">{props.armorClass}</div>
                        <div className="description">КЗ</div>
                    </Flex>
                    <Flex vertical align="center">
                        <div className="stat-values">{props.speed}</div>
                        <div className="description">скорость</div>
                    </Flex>
                    <Flex vertical align="center">
                        <div className="stat-values">
                            {modifierAsString(props.proficiencyBonus)}
                        </div>
                        <div className="description">владение</div>
                    </Flex>
                </Flex>
                <Flex>
                    <div>371.1</div>
                    <Checkbox />
                    <div>{`${props.currentHP} / ${
                        props.maxHP + props.bonusHP
                    }`}</div>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CharacterHeader;
