import { Flex } from "antd";
import AbilityTile from "./AbilityTile";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";

const NewCharacter = () => {
    const [setBreadcrumbItems] = useOutletContext();

    useEffect(() => {
        const items = [{ title: "Персонажи" }, { title: "Новый персонаж" }];
        setBreadcrumbItems(items);
    }, []);

    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [constitution, setConstitution] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [wisdom, setWisdom] = useState(10);
    const [charisma, setCharisma] = useState(10);

    return (
        <>
            <Flex wrap gap="small" justify="space-between">
                <AbilityTile
                    name="сила"
                    value={strength}
                    setValue={setStrength}
                />
                <AbilityTile
                    name="ловкость"
                    value={dexterity}
                    setValue={setDexterity}
                />
                <AbilityTile
                    name="телосложение"
                    value={constitution}
                    setValue={setConstitution}
                />
                <AbilityTile
                    name="интеллект"
                    value={intelligence}
                    setValue={setIntelligence}
                />
                <AbilityTile
                    name="мудрость"
                    value={wisdom}
                    setValue={setWisdom}
                />
                <AbilityTile
                    name="харизма"
                    value={charisma}
                    setValue={setCharisma}
                />
            </Flex>
        </>
    );
};

export default NewCharacter;
