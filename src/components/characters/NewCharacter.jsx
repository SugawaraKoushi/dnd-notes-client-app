import { Flex, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import { useOutletContext } from "react-router";
import AbilityTile from "./AbilityTile";
import CharacterHeader from "./CharacterHeader";
import { AbilityContext } from "./AbilityContext";
import Character from "../../model/Character";
import { calculateModifier } from "../services/ModifierService";

const NewCharacterPage = () => {
    const [setBreadcrumbItems] = useOutletContext();
    const [character, setCharacter] = useState(new Character());

    //#region Сила

    const handleStrengthScoreChange = (score) => {
        const athletics =
            calculateModifier(score) +
            character.athleticsBonus +
            (character.athleticsProficiency ? character.proficiencyBonus : 0);
        const savingThrow =
            calculateModifier(score) +
            character.strengthSavingThrowBonus +
            (character.strengthSavingThrowProficiency
                ? character.proficiencyBonus
                : 0);

        setCharacter({
            ...character,
            strength: score,
            strengthSavingThrow: savingThrow,
            athletics: athletics,
        });
    };

    const handleStrengthSavingThrowProficiencyChange = () => {
        const proficiency = !character.strengthSavingThrowProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            strengthSavingThrowProficiency: proficiency,
            strengthSavingThrow:
                character.strengthSavingThrow + k * character.proficiencyBonus,
        });
    };

    const handleStrengthSavingThrowBonusChange = (bonus) => {
        const savingThrow =
            character.strengthSavingThrow -
            character.strengthSavingThrowBonus +
            bonus;

        setCharacter({
            ...character,
            strengthSavingThrow: savingThrow,
            strengthSavingThrowBonus: bonus,
        });
    };

    const handleAthleticsProficiencyChange = () => {
        const proficiency = !character.athleticsProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            athleticsProficiency: proficiency,
            athletics: character.athletics + k * character.proficiencyBonus,
        });
        const ch = character;
    };

    const handleAthleticsBonusChange = (bonus) => {
        const athletics =
            character.athletics - character.athleticsBonus + bonus;

        setCharacter({
            ...character,
            athletics: athletics,
            athleticsBonus: bonus,
        });
    };

    const strengthSkills = [
        {
            name: "атлетика",
            score: character.athletics,
            bonus: character.athleticsBonus,
            proficiency: character.athleticsProficiency,
        },
    ];

    //#endregion Сила

    //#region Ловкость

    const handleDexterityValueChange = (value) => {
        setCharacter({ ...character, dexterity: value });
    };

    const handleDexteritySavingThrowProficiencyChange = () => {
        setCharacter({
            ...character,
            dexteritySavingThrowProficiency:
                !character.dexteritySavingThrowProficiency,
        });
    };

    const dexteritySkills = [
        { name: "акробатика", bonus: character.acrobaticsBonus },
        { name: "ловкость рук", bonus: character.sleightOfHandBonus },
        { name: "скрытность", bonus: character.stealthBonus },
    ];

    //#endregion Ловкость

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
                                onSavingThrowProficiencyChange:
                                    handleStrengthSavingThrowProficiencyChange,
                                onSavingThrowBonusChange:
                                    handleStrengthSavingThrowBonusChange,
                                onSkillProficiencyChange: (index) => {
                                    if (index === 0) {
                                        handleAthleticsProficiencyChange();
                                    }
                                },
                                onSkillBonusChange: (index, bonus) => {
                                    if (index === 0) {
                                        handleAthleticsBonusChange(bonus);
                                    }
                                },
                            }}
                        >
                            <AbilityTile
                                key="strength"
                                id="strength"
                                name="сила"
                                score={character.strength}
                                savingThrow={character.strengthSavingThrow}
                                savingThrowProficiency={
                                    character.strengthSavingThrowProficiency
                                }
                                savingThrowBonus={
                                    character.strengthSavingThrowBonus
                                }
                                skills={strengthSkills}
                            />
                        </AbilityContext.Provider>
                        {/* <AbilityTile
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
                        /> */}
                    </Flex>
                    <Flex className="abilities">Текст</Flex>
                </Flex>
            </Form>
        </>
    );
};

export default NewCharacterPage;
