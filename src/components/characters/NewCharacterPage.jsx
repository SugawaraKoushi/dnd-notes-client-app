import {
    Checkbox,
    Col,
    Divider,
    Flex,
    Form,
    Grid,
    Input,
    InputNumber,
    List,
    Row,
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

    const appearance = [
        <Form.Item name="age" label="Возраст:" required>
            <Input />
        </Form.Item>,
        <Form.Item name="height" label="Рост:" required>
            <Input />
        </Form.Item>,
        <Form.Item name="weight" label="Вес:" required>
            <Input />
        </Form.Item>,
        <Form.Item name="eyes" label="Глаза:" required>
            <Input />
        </Form.Item>,
        <Form.Item name="skin" label="Кожа:" required>
            <Input />
        </Form.Item>,
        <Form.Item name="hair" label="Волосы:" required>
            <Input />
        </Form.Item>,
    ];

    const savingThrows = [
        <Form.Item name="strengthST">
            <Checkbox>Сила</Checkbox>
        </Form.Item>,
        <Form.Item>
            <Checkbox>Ловкость</Checkbox>
        </Form.Item>,
        <Form.Item>
            <Checkbox>Телосложение</Checkbox>
        </Form.Item>,
        <Form.Item>
            <Checkbox>Интеллект</Checkbox>
        </Form.Item>,
        <Form.Item>
            <Checkbox>Мудрость</Checkbox>
        </Form.Item>,
        <Form.Item>
            <Checkbox>Харизма</Checkbox>
        </Form.Item>,
    ];

    useEffect(() => {
        const items = [{ title: "Персонажи" }, { title: "Новый персонаж" }];
        setBreadcrumbItems(items);
    }, []);

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
            <Flex justify="space-between">
                <Flex wrap className="abilities" vertical gap="small">
                    <NewAbilityTile
                        className
                        name="сила"
                        value={10}
                        skills={strengthSkills}
                    />
                    <NewAbilityTile name="телосложение" value={10} />
                    <NewAbilityTile
                        name="интеллект"
                        value={10}
                        skills={intelligenceSkills}
                    />
                    <NewAbilityTile
                        name="харизма"
                        value={10}
                        skills={charismaSkills}
                    />
                    <NewAbilityTile
                        name="мудрость"
                        value={10}
                        skills={wisdomSkills}
                    />
                    <NewAbilityTile
                        name="ловкость"
                        value={10}
                        skills={agilitySkills}
                    />
                </Flex>
                <Flex className="abilities">
                    <NewAbilityTile
                        name="сила"
                        value={10}
                        skills={strengthSkills}
                    />
                    <NewAbilityTile name="телосложение" value={10} />
                    <NewAbilityTile
                        name="интеллект"
                        value={10}
                        skills={intelligenceSkills}
                    />

                    <NewAbilityTile
                        name="харизма"
                        value={10}
                        skills={charismaSkills}
                    />
                    <NewAbilityTile
                        name="мудрость"
                        value={10}
                        skills={wisdomSkills}
                    />
                    <NewAbilityTile
                        name="ловкость"
                        value={10}
                        skills={agilitySkills}
                    />
                </Flex>
            </Flex>
        </Form>
    );
};

export default NewCharacterPage;
