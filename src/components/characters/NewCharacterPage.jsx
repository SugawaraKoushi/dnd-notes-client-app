import { Flex, Form, Typography } from "antd";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import NewAbilityTile from "./NewAbilityTile";
import { calculateModifier, calculateModifierAsString } from "../services/ModifierService";

const NewCharacterPage = () => {
    const { Title } = Typography;

    const [setBreadcrumbItems] = useOutletContext();
    const [strength, setStrength] = useState(12);
    const [dexterity, setDexterity] = useState(13);
    const [constitution, setConstitution] = useState(15);
    const [intelligence, setIntelligence] = useState(17);
    const [wisdom, setWisdom] = useState(7);
    const [charisma, setCharisma] = useState(20);

    const sex = [
        { value: "MALE", label: <span>Мужской</span> },
        { value: "FEMALE", label: <span>Женский</span> },
        { value: "OTHER", label: <span>Другое</span> },
    ];

    const alignments = [
        { value: "LAWFUL_GOOD", label: <span>Законно-добрый</span> },
        { value: "NEUTRAL_GOOD", label: <span>Нейтрально-добрый</span> },
        { value: "CHAOTIC_GOOD", label: <span>Хаотично-добрый</span> },
        { value: "LAWFUL_NEUTRAL", label: <span>Законно-нейтральный</span> },
        { value: "NEUTRAL", label: <span>Нейтральный</span> },
        { value: "CHAOTIC_NEUTRAL", label: <span>Хаотично-добрый</span> },
        { value: "LAWFUL_EVIL", label: <span>Законно-злой</span> },
        { value: "NEUTRAL_EVIL", label: <span>Нейтрально-злой</span> },
        { value: "CHAOTIC_EVIL", label: <span>Хаотично-злой</span> },
    ];

    const strengthSkills = [{ name: "атлетика", value: calculateModifierAsString(strength) }];

    const dexteritySkills = [
        { name: "акробатика", value: calculateModifierAsString(dexterity) },
        { name: "ловкость рук", value: calculateModifierAsString(dexterity) },
        { name: "скрытность", value: calculateModifierAsString(dexterity) },
    ];

    const intellegenceSkills = [
        { name: "анализ", value: calculateModifierAsString(intelligence) },
        { name: "история", value: calculateModifierAsString(intelligence) },
        { name: "магия", value: calculateModifierAsString(intelligence) },
        { name: "природа", value: calculateModifierAsString(intelligence) },
        { name: "религия", value: calculateModifierAsString(intelligence) },
    ];
    const wisdomSkills = [
        { name: "восприятие", value: calculateModifierAsString(wisdom) },
        { name: "выживание", value: calculateModifierAsString(wisdom) },
        { name: "медицина", value: calculateModifierAsString(wisdom) },
        { name: "проницательность", value: calculateModifierAsString(wisdom) },
        { name: "уход за животными", value: calculateModifierAsString(wisdom) },
    ];

    const charismaSkills = [
        { name: "выступление", value: calculateModifierAsString(charisma) },
        { name: "запугивание", value: calculateModifierAsString(charisma) },
        { name: "обман", value: calculateModifierAsString(charisma) },
        { name: "убеждение", value: calculateModifierAsString(charisma) },
    ];

    useEffect(() => {
        const items = [{ title: "Персонажи" }, { title: "Новый персонаж" }];
        setBreadcrumbItems(items);
    }, []);

    return (
        <Form
            style={{ lineHeight: "inherit" }}
            name="character"
            layout="vertical"
        >
            <Flex className="ability-container" vertical>
                <NewAbilityTile
                    name="сила"
                    value={strength}
                    skills={strengthSkills}
                />
                <NewAbilityTile
                    name="ловкость"
                    value={dexterity}
                    skills={dexteritySkills}
                />
                <NewAbilityTile name="телосложение" value={constitution} />
                <NewAbilityTile
                    name="интеллект"
                    value={intelligence}
                    skills={intellegenceSkills}
                />
                <NewAbilityTile
                    name="мудрость"
                    value={wisdom}
                    skills={wisdomSkills}
                />
                <NewAbilityTile
                    name="харизма"
                    value={charisma}
                    skills={charismaSkills}
                />
            </Flex>
        </Form>
    );
};

export default NewCharacterPage;
