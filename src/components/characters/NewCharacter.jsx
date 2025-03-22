import { Flex, Form, Input, InputNumber, Select, Typography } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import AbilityTile from "./AbilityTile";



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

    const characterDetails = [
        <Form.Item name="name" label="Имя:" required>
            <Input />
        </Form.Item>,
        <Form.Item name="sex" label="Пол:" required>
            <Select options={sex} />
        </Form.Item>,
        <Form.Item name="alignment" label="Мировоззрение:" required>
            <Select options={alignments} />
        </Form.Item>,
        <Form.Item name="author" label="Игрок:" required>
            <Input disabled />
        </Form.Item>,
        <Form.Item name="EXP" label="Текущий опыт:" required>
            <InputNumber
                style={{ width: "100%" }}
                prefix="EXP"
                min={0}
                precision={0}
            />
        </Form.Item>,
        <Form.Item name="deity" label="Божество:" required>
            <Input />
        </Form.Item>,
    ];

    const strengthSkills = ["атлетика"];
    const agilitySkills = ["акробатика", "ловкость рук", "скрытность"];
    const intelligenceSkills = [
        "анализ",
        "история",
        "магия",
        "природа",
        "религия",
    ];
    const wisdomSkills = [
        "восприятие",
        "выживание",
        "медицина",
        "проницательность",
        "уход за животными",
    ];
    const charismaSkills = ["выступление", "запугивание", "обман", "убеждение"];

    return (
        <Form
            style={{ lineHeight: "inherit" }}
            name="character"
            layout="vertical"
        >
            <Flex justify="space-between" gap="small">
                <Flex vertical wrap className="abilities" gap="small">
                    <AbilityTile
                        className
                        name="сила"
                        value={10}
                        skills={strengthSkills}
                    />
                    <AbilityTile name="телосложение" value={10} />
                    <AbilityTile
                        name="интеллект"
                        value={10}
                        skills={intelligenceSkills}
                    />
                    <AbilityTile
                        name="харизма"
                        value={10}
                        skills={charismaSkills}
                    />
                    <AbilityTile
                        name="мудрость"
                        value={10}
                        skills={wisdomSkills}
                    />
                    <AbilityTile
                        name="ловкость"
                        value={10}
                        skills={agilitySkills}
                    />
                </Flex>
                <Flex className="abilities">
                    Текст
                </Flex>
            </Flex>
        </Form>
    );
};

export default NewCharacterPage;
