import { Checkbox, Flex } from "antd";
import CharacterHeaderInfo from "./CharacterHeaderInfo";
import { modifierAsString } from "../services/ModifierService";
import "./index.css";
import { Link } from "react-router";
import HealthInfo from "./hp/HealthInfo";

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
                    <Link className="link-no-highlight">
                        <Flex vertical align="center">
                            <div className="stat-values">
                                {props.armorClass}
                            </div>
                            <div className="description">КЗ</div>
                        </Flex>
                    </Link>
                    <Link className="link-no-highlight">
                        <Flex vertical align="center">
                            <div className="stat-values">{props.speed}</div>
                            <div className="description">скорость</div>
                        </Flex>
                    </Link>
                    <Link className="link-no-highlight">
                        <Flex vertical align="center">
                            <div className="stat-values">
                                {modifierAsString(props.proficiencyBonus)}
                            </div>
                            <div className="description">владение</div>
                        </Flex>
                    </Link>
                </Flex>
                <Flex>
                    <div>371.1</div>
                    <Checkbox />
                    <HealthInfo
                        current={props.currentHP}
                        max={props.maxHP}
                        temporary={props.temporaryHP}
                    />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default CharacterHeader;
