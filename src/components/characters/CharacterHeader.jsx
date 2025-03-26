import { Flex } from "antd";
import { Header } from "antd/es/layout/layout";
import CharacterHeaderInfo from "./CharacterHeaderInfo";

const CharacterHeader = () => {
    return (
        <div className="character-header">
            <Flex align="center" style={{ height: "100%" }}>
                <CharacterHeaderInfo />
            </Flex>
        </div>
    );
};

export default CharacterHeader;
