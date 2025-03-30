import { Flex, Form, Input, InputNumber, Select } from "antd";
import { useState } from "react";
import AbilityTile from "./AbilityTile";
import CharacterHeader from "./CharacterHeader";
import { AbilityContext } from "./AbilityContext";
import Character from "../../model/Character";
import { calculateModifier } from "../services/ModifierService";

const NewCharacterPage = () => {
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

    const handleDexterityScoreChange = (score) => {
        const modifier = calculateModifier(score);
        const acrobatics =
            modifier +
            character.athleticsBonus +
            (character.athleticsProficiency ? character.proficiencyBonus : 0);
        const sleightOfHand =
            modifier +
            character.acrobaticsBonus +
            (character.acrobaticsProficiency ? character.proficiencyBonus : 0);
        const stealth =
            modifier +
            character.stealthBonus +
            (character.stealthProficiency ? character.proficiencyBonus : 0);

        const savingThrow =
            modifier +
            character.dexteritySavingThrowBonus +
            (character.dexteritySavingThrowProficiency
                ? character.proficiencyBonus
                : 0);

        setCharacter({
            ...character,
            dexterity: score,
            dexteritySavingThrow: savingThrow,
            acrobatics: acrobatics,
            sleightOfHand: sleightOfHand,
            stealth: stealth,
        });
    };

    const handleDexteritySavingThrowProficiencyChange = () => {
        const proficiency = !character.dexteritySavingThrowProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            dexteritySavingThrowProficiency: proficiency,
            dexteritySavingThrow:
                character.dexteritySavingThrow + k * character.proficiencyBonus,
        });
    };

    const handleDexterityhSavingThrowBonusChange = (bonus) => {
        const savingThrow =
            character.dexteritySavingThrow -
            character.dexteritySavingThrowBonus +
            bonus;

        setCharacter({
            ...character,
            dexteritySavingThrow: savingThrow,
            dexteritySavingThrowBonus: bonus,
        });
    };

    const handleAcrobaticsProficiencyChange = () => {
        const proficiency = !character.acrobaticsProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            acrobaticsProficiency: proficiency,
            acrobatics: character.acrobatics + k * character.proficiencyBonus,
        });
    };

    const handleAcrobaticsBonusChange = (bonus) => {
        const value = character.acrobatics - character.acrobaticsBonus + bonus;

        setCharacter({
            ...character,
            acrobatics: value,
            acrobaticsBonus: bonus,
        });
    };

    const handleSleightOfHandProficiencyChange = () => {
        const proficiency = !character.sleightOfHandProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            sleightOfHandProficiency: proficiency,
            sleightOfHand:
                character.sleightOfHand + k * character.proficiencyBonus,
        });
    };

    const handleSleightOfHandBonusChange = (bonus) => {
        const value =
            character.sleightOfHand - character.sleightOfHandBonus + bonus;

        setCharacter({
            ...character,
            acrobatics: value,
            acrobaticsBonus: bonus,
        });
    };

    const handleStealthProficiencyChange = () => {
        const proficiency = !character.stealthProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            stealthProficiency: proficiency,
            stealth: character.stealth + k * character.proficiencyBonus,
        });
    };

    const handleStealthBonusChange = (bonus) => {
        const value = character.stealth - character.stealthBonus + bonus;

        setCharacter({
            ...character,
            stealth: value,
            stealthBonus: bonus,
        });
    };

    const dexteritySkills = [
        {
            name: "акробатика",
            score: character.acrobatics,
            bonus: character.acrobaticsBonus,
            proficiency: character.acrobaticsProficiency,
        },
        {
            name: "ловкость рук",
            score: character.sleightOfHand,
            bonus: character.sleightOfHandBonus,
            proficiency: character.sleightOfHandProficiency,
        },
        {
            name: "скрытность",
            score: character.stealth,
            bonus: character.stealthBonus,
            proficiency: character.stealthProficiency,
        },
    ];

    //#endregion Ловкость

    //#region Телосложение

    const handleConstitutionScoreChange = (score) => {
        const savingThrow =
            calculateModifier(score) +
            character.constitutionSavingThrowBonus +
            (character.constitutionSavingThrowProficiency
                ? character.proficiencyBonus
                : 0);

        setCharacter({
            ...character,
            constitution: score,
            constitutionSavingThrow: savingThrow,
        });
    };

    const handleConstitutionSavingThrowProficiencyChange = () => {
        const proficiency = !character.constitutionSavingThrowProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            constitutionSavingThrowProficiency: proficiency,
            constitutionSavingThrow:
                character.constitutionSavingThrow +
                k * character.proficiencyBonus,
        });
    };

    const handleConstitutionSavingThrowBonusChange = (bonus) => {
        const savingThrow =
            character.constitutionSavingThrow -
            character.constitutionSavingThrowBonus +
            bonus;

        setCharacter({
            ...character,
            constitutionSavingThrow: savingThrow,
            constitutionSavingThrowBonus: bonus,
        });
    };

    //#endRegion Телосложение

    //#region Интеллект

    const handleIntelligenceScoreChange = (score) => {
        const modifier = calculateModifier(score);
        const investigation =
            modifier +
            character.investigationBonus +
            (character.investigationProficiency
                ? character.proficiencyBonus
                : 0);
        const history =
            modifier +
            character.historyBonus +
            (character.historyProficiency ? character.proficiencyBonus : 0);
        const arcana =
            modifier +
            character.arcanaBonus +
            (character.arcanaProficiency ? character.proficiencyBonus : 0);
        const nature =
            modifier +
            character.natureBonus +
            (character.natureProficiency ? character.proficiencyBonus : 0);
        const religion =
            modifier +
            character.religionBonus +
            (character.religionProficiency ? character.proficiencyBonus : 0);

        const savingThrow =
            modifier +
            character.intelligenceSavingThrowBonus +
            (character.intelligenceSavingThrowProficiency
                ? character.proficiencyBonus
                : 0);

        setCharacter({
            ...character,
            intelligence: score,
            intelligenceSavingThrow: savingThrow,
            investigation: investigation,
            history: history,
            arcana: arcana,
            nature: nature,
            religion: religion,
        });
    };

    const handleIntelligenceSavingThrowProficiencyChange = () => {
        const proficiency = !character.intelligenceSavingThrowProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            intelligenceSavingThrowProficiency: proficiency,
            intelligenceSavingThrow:
                character.intelligenceSavingThrow +
                k * character.proficiencyBonus,
        });
    };

    const handleIntelligencehSavingThrowBonusChange = (bonus) => {
        const savingThrow =
            character.intelligenceSavingThrow -
            character.intelligenceSavingThrowBonus +
            bonus;

        setCharacter({
            ...character,
            intelligenceSavingThrow: savingThrow,
            intelligenceSavingThrowBonus: bonus,
        });
    };

    const handleInvestigationProficiencyChange = () => {
        const proficiency = !character.investigationProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            investigationProficiency: proficiency,
            investigation:
                character.investigation + k * character.proficiencyBonus,
        });
    };

    const handleInvestigationBonusChange = (bonus) => {
        const value =
            character.investigation - character.investigationBonus + bonus;

        setCharacter({
            ...character,
            investigation: value,
            investigationBonus: bonus,
        });
    };

    const handleHistoryProficiencyChange = () => {
        const proficiency = !character.historyProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            historyProficiency: proficiency,
            history:
                character.historyProficiency + k * character.proficiencyBonus,
        });
    };

    const handleHistoryBonusChange = (bonus) => {
        const value = character.history - character.historyBonus + bonus;

        setCharacter({
            ...character,
            history: value,
            historyBonus: bonus,
        });
    };

    const handleArcanaProficiencyChange = () => {
        const proficiency = !character.arcanaProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            arcanaProficiency: proficiency,
            arcana: character.arcana + k * character.proficiencyBonus,
        });
    };

    const handleArcanaBonusChange = (bonus) => {
        const value = character.arcana - character.arcanaBonus + bonus;

        setCharacter({
            ...character,
            arcana: value,
            arcanaBonus: bonus,
        });
    };

    const handleNatureProficiencyChange = () => {
        const proficiency = !character.natureProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            natureProficiency: proficiency,
            nature: character.nature + k * character.proficiencyBonus,
        });
    };

    const handleNatureBonusChange = (bonus) => {
        const value = character.nature - character.natureBonus + bonus;

        setCharacter({
            ...character,
            nature: value,
            natureBonus: bonus,
        });
    };

    const handleReligionProficiencyChange = () => {
        const proficiency = !character.religionProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            religionProficiency: proficiency,
            religion: character.religion + k * character.proficiencyBonus,
        });
    };

    const handleReligionBonusChange = (bonus) => {
        const value = character.religion - character.religionBonus + bonus;

        setCharacter({
            ...character,
            religion: value,
            religionBonus: bonus,
        });
    };

    const intelligenceSkills = [
        {
            name: "анализ",
            score: character.investigation,
            bonus: character.investigationBonus,
            proficiency: character.investigationProficiency,
        },
        {
            name: "история",
            score: character.history,
            bonus: character.historyBonus,
            proficiency: character.historyProficiency,
        },
        {
            name: "магия",
            score: character.arcana,
            bonus: character.arcanaBonus,
            proficiency: character.arcanaProficiency,
        },
        {
            name: "природа",
            score: character.nature,
            bonus: character.natureBonus,
            proficiency: character.natureProficiency,
        },
        {
            name: "религия",
            score: character.religion,
            bonus: character.religionBonus,
            proficiency: character.religionProficiency,
        },
    ];

    //#endRegion Интеллект

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
                        <AbilityContext.Provider
                            value={{
                                onScoreChange: handleDexterityScoreChange,
                                onSavingThrowProficiencyChange:
                                    handleDexteritySavingThrowProficiencyChange,
                                onSavingThrowBonusChange:
                                    handleDexterityhSavingThrowBonusChange,
                                onSkillProficiencyChange: (index) => {
                                    switch (index) {
                                        case 0:
                                            handleAcrobaticsProficiencyChange();
                                            break;
                                        case 1:
                                            handleSleightOfHandProficiencyChange();
                                            break;
                                        case 2:
                                            handleStealthProficiencyChange();
                                            break;
                                        default:
                                            break;
                                    }
                                },
                                onSkillBonusChange: (index, bonus) => {
                                    switch (index) {
                                        case 0:
                                            handleAcrobaticsBonusChange(bonus);
                                            break;
                                        case 1:
                                            handleSleightOfHandBonusChange(
                                                bonus
                                            );
                                            break;
                                        case 2:
                                            handleStealthBonusChange(bonus);
                                            break;
                                        default:
                                            break;
                                    }
                                },
                            }}
                        >
                            <AbilityTile
                                key="dexterity"
                                id="dexterity"
                                name="ловкость"
                                score={character.dexterity}
                                savingThrow={character.dexteritySavingThrow}
                                savingThrowProficiency={
                                    character.dexteritySavingThrowProficiency
                                }
                                savingThrowBonus={
                                    character.dexteritySavingThrowBonus
                                }
                                skills={dexteritySkills}
                            />
                        </AbilityContext.Provider>
                        <AbilityContext.Provider
                            value={{
                                onScoreChange: handleConstitutionScoreChange,
                                onSavingThrowProficiencyChange:
                                    handleConstitutionSavingThrowProficiencyChange,
                                onSavingThrowBonusChange:
                                    handleConstitutionSavingThrowBonusChange,
                            }}
                        >
                            <AbilityTile
                                key="constitution"
                                id="constitution"
                                name="телосложение"
                                score={character.constitution}
                                savingThrow={character.constitutionSavingThrow}
                                savingThrowProficiency={
                                    character.constitutionSavingThrowProficiency
                                }
                                savingThrowBonus={
                                    character.constitutionSavingThrowBonus
                                }
                            />
                        </AbilityContext.Provider>
                        <AbilityContext.Provider
                            value={{
                                onScoreChange: handleIntelligenceScoreChange,
                                onSavingThrowProficiencyChange:
                                    handleIntelligenceSavingThrowProficiencyChange,
                                onSavingThrowBonusChange:
                                    handleIntelligencehSavingThrowBonusChange,
                                onSkillProficiencyChange: (index) => {
                                    switch (index) {
                                        case 0:
                                            handleInvestigationProficiencyChange();
                                            break;
                                        case 1:
                                            handleHistoryProficiencyChange();
                                            break;
                                        case 2:
                                            handleArcanaProficiencyChange();
                                            break;
                                        case 3:
                                            handleNatureProficiencyChange();
                                            break;
                                        case 4:
                                            handleReligionProficiencyChange();
                                            break;
                                        default:
                                            break;
                                    }
                                },
                                onSkillBonusChange: (index, bonus) => {
                                    switch (index) {
                                        case 0:
                                            handleInvestigationBonusChange(
                                                bonus
                                            );
                                            break;
                                        case 1:
                                            handleHistoryBonusChange(bonus);
                                            break;
                                        case 2:
                                            handleArcanaBonusChange(bonus);
                                            break;
                                        case 3:
                                            handleNatureBonusChange(bonus);
                                            break;
                                        case 4:
                                            handleReligionBonusChange(bonus);
                                            break;
                                        default:
                                            break;
                                    }
                                },
                            }}
                        >
                            <AbilityTile
                                key="intelligence"
                                id="intelligence"
                                name="интеллект"
                                score={character.intelligence}
                                savingThrow={character.intelligenceSavingThrow}
                                savingThrowProficiency={
                                    character.intelligenceSavingThrowProficiency
                                }
                                savingThrowBonus={
                                    character.intelligenceSavingThrowBonus
                                }
                                skills={intelligenceSkills}
                            />
                        </AbilityContext.Provider>

                        {/* <AbilityTile
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
