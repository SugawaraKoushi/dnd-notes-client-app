import {
    Checkbox,
    Divider,
    Flex,
    Form,
    Input,
    InputNumber,
    List,
    Select,
    Typography,
} from "antd";
import AbilityTile from "./AbilityTile";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router";
import NewAbilityTile from "./NewAbilityTile";

const NewCharacterPage = () => {
    const { Title } = Typography;

    const [setBreadcrumbItems] = useOutletContext();
    const [strength, setStrength] = useState(10);
    const [dexterity, setDexterity] = useState(10);
    const [constitution, setConstitution] = useState(10);
    const [intelligence, setIntelligence] = useState(10);
    const [wisdom, setWisdom] = useState(10);
    const [charisma, setCharisma] = useState(10);

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

    const strengthSkills = [{ name: "атлетика", value: 0 }];

    const dexteritySkills = [
        { name: "акробатика", value: 0 },
        { name: "ловкость рук", value: 0 },
        { name: "скрытность", value: 0 },
    ];

    const intellegenceSkills = [
        { name: "анализ", value: 0 },
        { name: "история", value: 0 },
        { name: "магия", value: 0 },
        { name: "природа", value: 0 },
        { name: "религия", value: 0 },
    ];
    const wisdomSkills = [
        { name: "восприятие", value: 0 },
        { name: "выживание", value: 0 },
        { name: "медицина", value: 0 },
        { name: "проницательность", value: 0 },
        { name: "уход за животными", value: 0 },
    ];

    const charismaSkills = [
        { name: "выступление", value: 0 },
        { name: "запугивание", value: 0 },
        { name: "обман", value: 0 },
        { name: "убеждение", value: 0 },
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
