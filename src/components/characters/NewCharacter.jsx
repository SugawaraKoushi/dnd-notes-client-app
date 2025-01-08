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

const NewCharacter = () => {
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
            <Input disabled value="Вшадек" />
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

    return (
        <Form
            style={{ lineHeight: "inherit" }}
            name="character"
            layout="vertical"
        >
            <Title level={4}>Описание персонажа</Title>
            <List
                grid={{
                    gutter: 12,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={characterDetails}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider style={{ borderColor: "#d0d0d0" }} />
            <Title level={4}>Внешность</Title>
            <List
                grid={{
                    gutter: 12,
                    xs: 1,
                    sm: 1,
                    md: 2,
                    lg: 2,
                    xl: 3,
                    xxl: 3,
                }}
                dataSource={appearance}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />
            <Divider style={{ borderColor: "#d0d0d0" }} />
            <Title level={4}>Характеристики</Title>
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
            <Title level={4}>Спас-броски</Title>
            <List
                grid={{
                    gutter: 12,
                    xs: 2,
                    sm: 3,
                    md: 3,
                    lg: 6,
                    xl: 6,
                    xxl: 6,
                }}
                dataSource={savingThrows}
                renderItem={(item) => <List.Item>{item}</List.Item>}
            />

            <Title level={4}>Навыки</Title>
        </Form>
    );
};

export default NewCharacter;
