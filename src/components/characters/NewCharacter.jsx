import { Flex, List } from "antd";
import AbilityTile from "../abilities/AbilityTile";
import { useState } from "react";

const NewCharacter = () => {
    const [strength, setStrength] = useState(10);
    const incrementStrength = (value) => {
        value++;
        setStrength(value);
    };

    return (
        <>
            <Flex wrap gap="small" justify="space-between">
                <AbilityTile name="сила" value={strength} increment={incrementStrength} />
                <AbilityTile name="ловкость" value={10} />
                <AbilityTile name="телосложение" value={10} />
                <AbilityTile name="интеллект" value={10} />
                <AbilityTile name="мудрость" value={10} />
                <AbilityTile name="харизма" value={10} />
            </Flex>
        </>
    );
};

export default NewCharacter;
