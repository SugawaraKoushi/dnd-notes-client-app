import { Flex, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import AbilityTile from "./AbilityTile";
import CharacterHeader from "./CharacterHeader";
import { AbilityContext } from "./AbilityContext";
import Character from "../../entity/Character";

const NewCharacterPage = () => {
    const [setBreadcrumbItems] = useOutletContext();
    const [character, setCharacter] = useState(new Character());

    const handleStrengthScoreChange = (value) => {
        setCharacter({ ...character, strength: value });
    };

    const handleStrengthSavingThrowProficiencyChange = () => {
        setCharacter({
            ...character,
            strengthSavingThrowProficiency:
                !character.strengthSavingThrowProficiency,
        });
    };

    const handleDexterityValueChange = (value) => {
        setCharacter({ ...character, strength: value });
    };

    const handleDexteritySavingThrowProficiencyChange = () => {
        setCharacter({
            ...character,
            strengthSavingThrowProficiency:
                !character.strengthSavingThrowProficiency,
        });
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
            <CharacterHeader
                name={character.name}
                proficiencyBonus={character.proficiencyBonus}
            />
            <Form
                className="content-layout"
                style={{ lineHeight: "inherit" }}
                name="character"
                layout="vertical"
            >
                <Flex justify="space-between" gap="small">
                    <Flex vertical wrap className="abilities" gap="small">
                        <AbilityContext.Provider
                            value={{
                                onScoreChange: handleStrengthScoreChange,
                                onSavingThrowProficiencyChange: handleStrengthSavingThrowProficiencyChange
                            }}
                        >
                            <AbilityTile
                                key="strength"
                                id="strength"
                                name="сила"
                                score={character.strength}
                                skills={strengthSkills}
                                savingThrowProficiency={
                                    character.strengthSavingThrowProficiency
                                }
                            />
                        </AbilityContext.Provider>
                        <AbilityTile
                            key="dexterity"
                            id="dexterity"
                            name="ловкость"
                            score={character.dexterity}
                            skills={dexteritySkills}
                        />
                        <AbilityTile
                            key="constitution"
                            id="constitution"
                            name="телосложение"
                            score={character.constitution}
                        />
                        <AbilityTile
                            key="intelligence"
                            id="intelligence"
                            name="интеллект"
                            score={character.intelligence}
                            skills={intelligenceSkills}
                        />
                        <AbilityTile
                            key="wisdom"
                            id="wisdom"
                            name="мудрость"
                            score={character.wisdom}
                            skills={wisdomSkills}
                        />
                        <AbilityTile
                            key="charisma"
                            id="charisma"
                            name="харизма"
                            score={character.charisma}
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
