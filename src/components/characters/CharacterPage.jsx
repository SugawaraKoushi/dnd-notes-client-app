import { Flex, Grid } from "antd";
import { useEffect, useState } from "react";
import AbilityTile from "./abilities/AbilityTile";
import CharacterHeader from "./CharacterHeader";
import { AbilityContext } from "./context/AbilityContext";
import Character from "../../model/Character";
import { calculateModifier } from "../services/ModifierService";
import PassiveAbilityTile from "./abilities/PassiveAbilityTile";
import TextBlock from "./TextBlock";
import StatusTracker from "./StatusTracker";
import NotificationStack from "../notification/NotificationStack";
import "./index.css";
import { CharacterContext } from "./context/CharacterHeaderContext";
import AttacksTable from "./attacks/AttacksTable";
import { AttackContext } from "./context/AttackContext";
import { NotificationContext } from "./context/NotificationContext";
import DiceRoller from "./dice roller/DiceRoller";
import axios from "axios";
import { useParams } from "react-router";

const CharacterPage = () => {
    const [character, setCharacter] = useState(new Character());
    const [notifications, setNotifications] = useState([]);
    const { id } = useParams();

    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const isVertical = screens.xl;

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
            id: "athelitcs",
            name: "атлетика",
            notificationName: "атлетики",
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

        const initiative = modifier;

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
            initiative: initiative,
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

    const handleAcrobaticsBonusChange = (bonus) => {
        const value = character.acrobatics - character.acrobaticsBonus + bonus;

        setCharacter({
            ...character,
            acrobatics: value,
            acrobaticsBonus: bonus,
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
            id: "acrobatics",
            name: "акробатика",
            notificationName: "акробатики",
            score: character.acrobatics,
            bonus: character.acrobaticsBonus,
            proficiency: character.acrobaticsProficiency,
        },
        {
            id: "sleightOfHand",
            name: "ловкость рук",
            notificationName: "ловкости рук",
            score: character.sleightOfHand,
            bonus: character.sleightOfHandBonus,
            proficiency: character.sleightOfHandProficiency,
        },
        {
            id: "stealth",
            name: "скрытность",
            notificationName: "скрытности",
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

    //#endregion Телосложение

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
        const investigationPassive = 10 + investigation;

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
            investigationPassive: investigationPassive,
        });
    };

    const handleIntelligenceSavingThrowBonusChange = (bonus) => {
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

    const handleInvestigationBonusChange = (bonus) => {
        const value =
            character.investigation - character.investigationBonus + bonus;

        setCharacter({
            ...character,
            investigation: value,
            investigationBonus: bonus,
            investigationPassive: 10 + value,
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

    const handleArcanaBonusChange = (bonus) => {
        const value = character.arcana - character.arcanaBonus + bonus;

        setCharacter({
            ...character,
            arcana: value,
            arcanaBonus: bonus,
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
            id: "investigation",
            name: "анализ",
            notificationName: "анализа",
            score: character.investigation,
            bonus: character.investigationBonus,
            proficiency: character.investigationProficiency,
        },
        {
            id: "history",
            name: "история",
            notificationName: "истории",
            score: character.history,
            bonus: character.historyBonus,
            proficiency: character.historyProficiency,
        },
        {
            id: "arcana",
            name: "магия",
            notificationName: "магии",
            score: character.arcana,
            bonus: character.arcanaBonus,
            proficiency: character.arcanaProficiency,
        },
        {
            id: "nature",
            name: "природа",
            notificationName: "природы",
            score: character.nature,
            bonus: character.natureBonus,
            proficiency: character.natureProficiency,
        },
        {
            id: "religion",
            name: "религия",
            notificationName: "религии",
            score: character.religion,
            bonus: character.religionBonus,
            proficiency: character.religionProficiency,
        },
    ];

    //#endregion Интеллект

    //#region Мудрость

    const handleWisdomScoreChange = (score) => {
        const modifier = calculateModifier(score);
        const perception =
            modifier +
            character.perceptionBonus +
            (character.perceptionProficiency ? character.proficiencyBonus : 0);
        const survival =
            modifier +
            character.survivalBonus +
            (character.survivalProficiency ? character.proficiencyBonus : 0);
        const medicine =
            modifier +
            character.medicineBonus +
            (character.medicineProficiency ? character.proficiencyBonus : 0);
        const insight =
            modifier +
            character.insightBonus +
            (character.insightProficiency ? character.proficiencyBonus : 0);
        const animalHandling =
            modifier +
            character.animalHandlingBonus +
            (character.animalHandlingProficiency
                ? character.proficiencyBonus
                : 0);
        const perceptionPassive = 10 + perception;
        const insightPassive = 10 + insight;

        const savingThrow =
            modifier +
            character.wisdomSavingThrowBonus +
            (character.wisdomSavingThrowProficiency
                ? character.proficiencyBonus
                : 0);

        setCharacter({
            ...character,
            wisdom: score,
            wisdomSavingThrow: savingThrow,
            perception: perception,
            survival: survival,
            medicine: medicine,
            insight: insight,
            animalHandling: animalHandling,
            perceptionPassive: perceptionPassive,
            insightPassive: insightPassive,
        });
    };

    const handleWisdomSavingThrowBonusChange = (bonus) => {
        const savingThrow =
            character.wisdomSavingThrow -
            character.wisdomSavingThrowBonus +
            bonus;

        setCharacter({
            ...character,
            wisdomSavingThrow: savingThrow,
            wisdomSavingThrowBonus: bonus,
        });
    };

    const handlePerceptionBonusChange = (bonus) => {
        const value = character.perception - character.perceptionBonus + bonus;

        setCharacter({
            ...character,
            perception: value,
            perceptionBonus: bonus,
            perceptionPassive: 10 + value,
        });
    };

    const handleSurvivalBonusChange = (bonus) => {
        const value = character.survival - character.survivalBonus + bonus;

        setCharacter({
            ...character,
            survival: value,
            survivalBonus: bonus,
        });
    };

    const handleMedicineBonusChange = (bonus) => {
        const value = character.medicine - character.medicineBonus + bonus;

        setCharacter({
            ...character,
            medicine: value,
            medicineBonus: bonus,
        });
    };

    const handleInsightBonusChange = (bonus) => {
        const value = character.insight - character.insightBonus + bonus;

        setCharacter({
            ...character,
            insight: value,
            insightBonus: bonus,
            insightPassive: 10 + value,
        });
    };

    const handleAnimalHandlingBonusChange = (bonus) => {
        const value =
            character.animalHandling - character.animalHandlingBonus + bonus;

        setCharacter({
            ...character,
            animalHandling: value,
            animalHandlingBonus: bonus,
        });
    };

    const wisdomSkills = [
        {
            id: "perception",
            name: "восприятие",
            notificationName: "восприятия",
            score: character.perception,
            bonus: character.perceptionBonus,
            proficiency: character.perceptionProficiency,
        },
        {
            id: "survival",
            name: "выживание",
            notificationName: "выживания",
            score: character.survival,
            bonus: character.survivalBonus,
            proficiency: character.survivalProficiency,
        },
        {
            id: "medicine",
            name: "медицина",
            notificationName: "медицины",
            score: character.medicine,
            bonus: character.medicineBonus,
            proficiency: character.medicineProficiency,
        },
        {
            id: "insight",
            name: "проницательность",
            notificationName: "проницательности",
            score: character.insight,
            bonus: character.insightBonus,
            proficiency: character.insightProficiency,
        },
        {
            id: "animalHandling",
            name: "уход за животными",
            notificationName: "ухода за животными",
            score: character.animalHandling,
            bonus: character.animalHandlingBonus,
            proficiency: character.animalHandlingProficiency,
        },
    ];

    //#endregion Мудрость

    //#region Харизма

    const handleCharismaScoreChange = (score) => {
        const modifier = calculateModifier(score);
        const performance =
            modifier +
            character.performanceBonus +
            (character.performanceProficiency ? character.proficiencyBonus : 0);
        const intimidation =
            modifier +
            character.intimidationBonus +
            (character.intimidationProficiency
                ? character.proficiencyBonus
                : 0);
        const deception =
            modifier +
            character.deceptionBonus +
            (character.deceptionProficiency ? character.proficiencyBonus : 0);
        const persuasion =
            modifier +
            character.persuasionBonus +
            (character.persuasionProficiency ? character.proficiencyBonus : 0);

        const savingThrow =
            modifier +
            character.charismaSavingThrowBonus +
            (character.charismaSavingThrowProficiency
                ? character.proficiencyBonus
                : 0);

        setCharacter({
            ...character,
            charsima: score,
            charismaSavingThrow: savingThrow,
            performance: performance,
            intimidation: intimidation,
            deception: deception,
            persuasion: persuasion,
        });
    };

    const handleCharismaSavingThrowBonusChange = (bonus) => {
        const savingThrow =
            character.charismaSavingThrow -
            character.charismaSavingThrowBonus +
            bonus;

        setCharacter({
            ...character,
            charismaSavingThrow: savingThrow,
            charismaSavingThrowBonus: bonus,
        });
    };

    const handlePerformanceBonusChange = (bonus) => {
        const value =
            character.performance - character.performanceBonus + bonus;

        setCharacter({
            ...character,
            performance: value,
            performanceBonus: bonus,
        });
    };

    const handleIntimidationBonusChange = (bonus) => {
        const value =
            character.intimidation - character.intimidationBonus + bonus;

        setCharacter({
            ...character,
            intimidation: value,
            intimidationBonus: bonus,
        });
    };

    const handleDeceptionBonusChange = (bonus) => {
        const value = character.deception - character.deceptionBonus + bonus;

        setCharacter({
            ...character,
            deception: value,
            deceptionBonus: bonus,
        });
    };

    const handlePersuasionBonusChange = (bonus) => {
        const value = character.persuasion - character.persuasionBonus + bonus;

        setCharacter({
            ...character,
            persuasion: value,
            persuasionBonus: bonus,
        });
    };

    const charismaSkills = [
        {
            id: "performance",
            name: "выступление",
            notificationName: "выступления",
            score: character.performance,
            bonus: character.performanceBonus,
            proficiency: character.performanceProficiency,
        },
        {
            id: "intimidation",
            name: "запугивание",
            notificationName: "запугивания",
            score: character.intimidation,
            bonus: character.intimidationBonus,
            proficiency: character.intimidationProficiency,
        },
        {
            id: "deception",
            name: "обман",
            notificationName: "обмана",
            score: character.deception,
            bonus: character.deceptionBonus,
            proficiency: character.deceptionProficiency,
        },
        {
            id: "persuasuion",
            name: "убеждение",
            notificationName: "убеждения",
            score: character.persuasion,
            bonus: character.persuasionBonus,
            proficiency: character.persuasionProficiency,
        },
    ];

    //#endregion Харизма

    //#region Пассивные чувства

    const passiveSkills = [
        { name: "восприятие", score: character.perceptionPassive },
        { name: "проницательность", score: character.insightPassive },
        { name: "анализ", score: character.investigationPassive },
    ];

    //#endregion Пассивные чувства

    //#region Уведомления

    const handleRollButtonClick = (value) => {
        setNotifications((prev) => {
            const updatedNotifications = [...prev, value].slice(-5);
            return updatedNotifications;
        });
    };

    const handleNotificationStackCloseButtonClick = () => {
        setNotifications([]);
    };

    //#endregion Уведомления

    //#region Атаки

    const [attacks, setAttacks] = useState([]);

    const handleAttacksChange = (newAttacks) => {
        setAttacks(newAttacks);
    };

    const getAttacks = async () => {
        try {
            const url = `/attacks/character/${id}`;
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.log(error);
        }
    };

    //#endregion Атаки

    //#region Работа с данными

    useEffect(() => {
        const fetchData = async () => {
            const characterData = await getCharacter();
            setCharacter(characterData);

            const attacksData = await getAttacks();
            setAttacks(attacksData);
        };

        fetchData();
    }, []);

    const getCharacter = async () => {
        const url = `/characters/${id}`;
        const response = await axios.get(url);
        return response.data;
    };

    const handleCharacterChange = (value) => {
        setCharacter({ ...value });
    };

    //#endregion Работа с данными

    return (
        <>
            <CharacterContext.Provider
                value={{
                    onCharacterChange: handleCharacterChange,
                    character: character,
                }}
            >
                <CharacterHeader />
                <NotificationContext.Provider
                    value={{ onRollButtonClick: handleRollButtonClick }}
                >
                    <Flex
                        className="content-layout"
                        style={{ lineHeight: "inherit" }}
                        justify="space-between"
                        gap="small"
                    >
                        <Flex
                            vertical={isVertical}
                            wrap
                            className="abilities"
                            gap="small"
                        >
                            <AbilityContext.Provider
                                value={{
                                    onScoreChange: handleStrengthScoreChange,
                                    onSkillBonusChange: (index, bonus) => {
                                        if (index === 0) {
                                            handleAthleticsBonusChange(bonus);
                                        }
                                    },
                                }}
                            >
                                <AbilityTile
                                    id="strength"
                                    name="сила"
                                    notificationName="силы"
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
                                    onSavingThrowBonusChange:
                                        handleDexterityhSavingThrowBonusChange,
                                    onSkillBonusChange: (index, bonus) => {
                                        switch (index) {
                                            case 0:
                                                handleAcrobaticsBonusChange(
                                                    bonus
                                                );
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
                                    id="dexterity"
                                    name="ловкость"
                                    notificationName="ловкости"
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
                                    onScoreChange:
                                        handleConstitutionScoreChange,
                                    onSavingThrowBonusChange:
                                        handleConstitutionSavingThrowBonusChange,
                                }}
                            >
                                <AbilityTile
                                    id="constitution"
                                    name="телосложение"
                                    notificationName="телосложения"
                                    score={character.constitution}
                                    savingThrow={
                                        character.constitutionSavingThrow
                                    }
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
                                    onScoreChange:
                                        handleIntelligenceScoreChange,
                                    onSavingThrowBonusChange:
                                        handleIntelligenceSavingThrowBonusChange,
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
                                                handleReligionBonusChange(
                                                    bonus
                                                );
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                }}
                            >
                                <AbilityTile
                                    id="intelligence"
                                    name="интеллект"
                                    notificationName="интеллекта"
                                    score={character.intelligence}
                                    savingThrow={
                                        character.intelligenceSavingThrow
                                    }
                                    savingThrowProficiency={
                                        character.intelligenceSavingThrowProficiency
                                    }
                                    savingThrowBonus={
                                        character.intelligenceSavingThrowBonus
                                    }
                                    skills={intelligenceSkills}
                                />
                            </AbilityContext.Provider>
                            <AbilityContext.Provider
                                value={{
                                    onScoreChange: handleWisdomScoreChange,
                                    onSavingThrowBonusChange:
                                        handleWisdomSavingThrowBonusChange,
                                    onSkillBonusChange: (index, bonus) => {
                                        switch (index) {
                                            case 0:
                                                handlePerceptionBonusChange(
                                                    bonus
                                                );
                                                break;
                                            case 1:
                                                handleSurvivalBonusChange(
                                                    bonus
                                                );
                                                break;
                                            case 2:
                                                handleMedicineBonusChange(
                                                    bonus
                                                );
                                                break;
                                            case 3:
                                                handleInsightBonusChange(bonus);
                                                break;
                                            case 4:
                                                handleAnimalHandlingBonusChange(
                                                    bonus
                                                );
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                }}
                            >
                                <AbilityTile
                                    id="wisdom"
                                    name="мудрость"
                                    notificationName="мудрости"
                                    score={character.wisdom}
                                    savingThrow={character.wisdomSavingThrow}
                                    savingThrowProficiency={
                                        character.wisdomSavingThrowProficiency
                                    }
                                    savingThrowBonus={
                                        character.wisdomSavingThrowBonus
                                    }
                                    skills={wisdomSkills}
                                />
                            </AbilityContext.Provider>
                            <AbilityContext.Provider
                                value={{
                                    onScoreChange: handleCharismaScoreChange,
                                    onSavingThrowBonusChange:
                                        handleCharismaSavingThrowBonusChange,
                                    onSkillBonusChange: (index, bonus) => {
                                        switch (index) {
                                            case 0:
                                                handlePerformanceBonusChange(
                                                    bonus
                                                );
                                                break;
                                            case 1:
                                                handleIntimidationBonusChange(
                                                    bonus
                                                );
                                                break;
                                            case 2:
                                                handleDeceptionBonusChange(
                                                    bonus
                                                );
                                                break;
                                            case 3:
                                                handlePersuasionBonusChange(
                                                    bonus
                                                );
                                                break;
                                            default:
                                                break;
                                        }
                                    },
                                }}
                            >
                                <AbilityTile
                                    id="charisma"
                                    name="харизма"
                                    notificationName="харизмы"
                                    score={character.charisma}
                                    savingThrow={character.charismaSavingThrow}
                                    savingThrowProficiency={
                                        character.charismaSavingThrowProficiency
                                    }
                                    savingThrowBonus={
                                        character.charismaSavingThrowBonus
                                    }
                                    skills={charismaSkills}
                                />
                            </AbilityContext.Provider>
                            <PassiveAbilityTile skills={passiveSkills} />
                        </Flex>
                        <Flex vertical className="character-content" gap={6}>
                            <StatusTracker />
                            <AttackContext.Provider
                                value={{
                                    attacks: attacks,
                                    onAttacksChange: handleAttacksChange,
                                }}
                            >
                                <AttacksTable />
                            </AttackContext.Provider>

                            <TextBlock title={"заметки"} />
                        </Flex>
                    </Flex>
                </NotificationContext.Provider>
                <NotificationStack
                    onClose={handleNotificationStackCloseButtonClick}
                    items={notifications}
                />
                <NotificationContext.Provider
                    value={{ onRollButtonClick: handleRollButtonClick }}
                >
                    <DiceRoller />
                </NotificationContext.Provider>
            </CharacterContext.Provider>
        </>
    );
};

export default CharacterPage;
