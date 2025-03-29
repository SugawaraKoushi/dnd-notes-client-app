import { Checkbox, Flex } from "antd";
import CharacterHeaderInfo from "./CharacterHeaderInfo";
import { modifierAsString } from "../services/ModifierService";

const CharacterHeader = (props) => {
    return (
        <div className="character-header">
            <Flex
                align="center"
                justify="space-between"
                style={{
                    maxWidth: "1200px",
                    width: "100%",
                    height: "100%",
                    margin: "auto",
                }}
            >
                <CharacterHeaderInfo name={props.name} />
                <Flex
                    align="center"
                    justify="space-between"
                    style={{ width: "592px" }}
                >
                    <Flex justify="space-between" style={{ width: "224px" }}>
                        <Flex align="center">10</Flex>
                        <Flex vertical align="center">
                            25
                            <div>скорость</div>
                        </Flex>
                        <Flex vertical align="center">
                            {modifierAsString(props.proficiencyBonus)}
                            <div>владение</div>
                        </Flex>
                    </Flex>
                    <Flex>
                        <div>371.1</div>
                        <Checkbox />
                        <div>0 / 100</div>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    );
};

export default CharacterHeader;
