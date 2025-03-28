import { Flex, Form, Input, InputNumber, Select, Typography } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import AbilityTile from "./AbilityTile";
import CharacterHeader from "./CharacterHeader";
import { AbilityContext } from "./AbilityContext";

const NewCharacterPage = () => {
    const { Title } = Typography;

    const [setBreadcrumbItems] = useOutletContext();
    const [strength, setStrength] = useState(13);
    const [dexterity, setDexterity] = useState(13);
    const [constitution, setConstitution] = useState(13);
    const [intelligence, setIntelligence] = useState(13);
    const [wisdom, setWisdom] = useState(5);
    const [charisma, setCharisma] = useState(7);

    const handleStrengthValueChange = (value) => {
        setStrength(value);
    };

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
    const dexteritySkills = ["акробатика", "ловкость рук", "скрытность"];
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
        <>
            <CharacterHeader />
            <Form
                className="content-layout"
                style={{ lineHeight: "inherit" }}
                name="character"
                layout="vertical"
            >
                <Flex justify="space-between" gap="small">
                    <Flex vertical wrap className="abilities" gap="small">
                        <AbilityContext.Provider
                            value={handleStrengthValueChange}
                        >
                            <AbilityTile
                                id="strength"
                                name="сила"
                                value={strength}
                                skills={strengthSkills}
                            />
                        </AbilityContext.Provider>
                        <AbilityTile
                            id="dexterity"
                            name="ловкость"
                            value={dexterity}
                            skills={dexteritySkills}
                        />
                        <AbilityTile
                            id="constitution"
                            name="телосложение"
                            value={constitution}
                        />
                        <AbilityTile
                            id="intelligence"
                            name="интеллект"
                            value={intelligence}
                            skills={intelligenceSkills}
                        />
                        <AbilityTile
                            id="wisdom"
                            name="мудрость"
                            value={wisdom}
                            skills={wisdomSkills}
                        />
                        <AbilityTile
                            id="charisma"
                            name="харизма"
                            value={charisma}
                            skills={charismaSkills}
                        />
                    </Flex>
                    <Flex className="abilities">Текст</Flex>
                </Flex>
            </Form>
        </>
    );
};

export default NewCharacterPage;
