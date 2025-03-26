import { Checkbox, Flex } from "antd";
import CharacterHeaderInfo from "./CharacterHeaderInfo";

const CharacterHeader = () => {
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
                <CharacterHeaderInfo />
                <Flex
                    align="center"
                    justify="space-between"
                    style={{ width: "592px" }}
                >
                    <Flex justify="space-between" style={{ width: "224px" }}>
                        <Flex align="center">18</Flex>
                        <Flex vertical align="center">
                            25
                            <div>скорость</div>
                        </Flex>
                        <Flex vertical align="center">
                            +3
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
