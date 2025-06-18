import { Flex, Grid } from "antd";
import { useState } from "react";
import AbilityTile from "./abilities/AbilityTile";
import CharacterHeader from "./CharacterHeader";
import { AbilityContext } from "./context/AbilityContext";
import Character from "../../model/Character";
import { calculateModifier } from "../services/ModifierService";
import PassiveAbilityTile from "./abilities/PassiveAbilityTile";
import TextBlock from "./TextBlock";
import StatusTracker from "./StatusTracker";
import { StatusTrackerContext } from "./context/StatusTrackerContext";
import NotificationStack from "../notification/NotificationStack";
import "./index.css";
import { CharacterHeaderContext } from "./context/CharacterHeaderContext";
import AttacksTable from "./attacks/AttacksTable";
import Attack from "../../model/Attack";
import { AttackContext } from "./context/AttackContext";
import { NotificationContext } from "./context/NotificationContext";
import DiceRoller from "./dice roller/DiceRoller";

const NewCharacterPage = () => {
    const [character, setCharacter] = useState(new Character());
    const [notifications, setNotifications] = useState([]);
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
            notificationName: "акробатики",
            score: character.acrobatics,
            bonus: character.acrobaticsBonus,
            proficiency: character.acrobaticsProficiency,
        },
        {
            name: "ловкость рук",
            notificationName: "ловкости рук",
            score: character.sleightOfHand,
            bonus: character.sleightOfHandBonus,
            proficiency: character.sleightOfHandProficiency,
        },
        {
            name: "скрытность",
            notificationName: "скрытности",
            score: character.stealth,
            bonus: character.stealthBonus,
            proficiency: character.stealthProficiency,
        },
    ];

    const handleInitiativeChange = (value) => {
        setCharacter({
            ...character,
            initiative: value,
        });
    };

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

    const handleInvestigationProficiencyChange = () => {
        const proficiency = !character.investigationProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            investigationProficiency: proficiency,
            investigation:
                character.investigation + k * character.proficiencyBonus,
            investigationPassive:
                character.investigationPassive + k * character.proficiencyBonus,
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

    const handleHistoryProficiencyChange = () => {
        const proficiency = !character.historyProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            historyProficiency: proficiency,
            history: character.history + k * character.proficiencyBonus,
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
            notificationName: "анализа",
            score: character.investigation,
            bonus: character.investigationBonus,
            proficiency: character.investigationProficiency,
        },
        {
            name: "история",
            notificationName: "истории",
            score: character.history,
            bonus: character.historyBonus,
            proficiency: character.historyProficiency,
        },
        {
            name: "магия",
            notificationName: "магии",
            score: character.arcana,
            bonus: character.arcanaBonus,
            proficiency: character.arcanaProficiency,
        },
        {
            name: "природа",
            notificationName: "природы",
            score: character.nature,
            bonus: character.natureBonus,
            proficiency: character.natureProficiency,
        },
        {
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

    const handleWisdomSavingThrowProficiencyChange = () => {
        const proficiency = !character.wisdomSavingThrowProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            wisdomSavingThrowProficiency: proficiency,
            wisdomSavingThrow:
                character.wisdomSavingThrow + k * character.proficiencyBonus,
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

    const handlePerceptionProficiencyChange = () => {
        const proficiency = !character.perceptionProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            perceptionProficiency: proficiency,
            perception: character.perception + k * character.proficiencyBonus,
            perceptionPassive:
                character.perceptionPassive + k * character.proficiencyBonus,
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

    const handleSurvivalProficiencyChange = () => {
        const proficiency = !character.survivalProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            survivalProficiency: proficiency,
            survival: character.survival + k * character.proficiencyBonus,
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

    const handleMedicineProficiencyChange = () => {
        const proficiency = !character.medicineProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            medicineProficiency: proficiency,
            medicine: character.medicine + k * character.proficiencyBonus,
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

    const handleInsightProficiencyChange = () => {
        const proficiency = !character.insightProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            insightProficiency: proficiency,
            insight: character.insight + k * character.proficiencyBonus,
            insightPassive:
                character.insightPassive + k * character.proficiencyBonus,
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

    const handleAnimalHandlingProficiencyChange = () => {
        const proficiency = !character.animalHandlingProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            animalHandlingProficiency: proficiency,
            animalHandling:
                character.animalHandling + k * character.proficiencyBonus,
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
            name: "восприятие",
            notificationName: "восприятия",
            score: character.perception,
            bonus: character.perceptionBonus,
            proficiency: character.perceptionProficiency,
        },
        {
            name: "выживание",
            notificationName: "выживания",
            score: character.survival,
            bonus: character.survivalBonus,
            proficiency: character.survivalProficiency,
        },
        {
            name: "медицина",
            notificationName: "медицины",
            score: character.medicine,
            bonus: character.medicineBonus,
            proficiency: character.medicineProficiency,
        },
        {
            name: "проницательность",
            notificationName: "проницательности",
            score: character.insight,
            bonus: character.insightBonus,
            proficiency: character.insightProficiency,
        },
        {
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

    const handleCharismaSavingThrowProficiencyChange = () => {
        const proficiency = !character.charismaSavingThrowProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            charismaSavingThrowProficiency: proficiency,
            charismaSavingThrow:
                character.charismaSavingThrow + k * character.proficiencyBonus,
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

    const handlePerformanceProficiencyChange = () => {
        const proficiency = !character.performanceProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            performanceProficiency: proficiency,
            performance: character.performance + k * character.proficiencyBonus,
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

    const handleIntimidationProficiencyChange = () => {
        const proficiency = !character.intimidationProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            intimidationProficiency: proficiency,
            intimidation:
                character.intimidation + k * character.proficiencyBonus,
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

    const handleDeceptionProficiencyChange = () => {
        const proficiency = !character.deceptionProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            deceptionProficiency: proficiency,
            deception: character.deception + k * character.proficiencyBonus,
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

    const handlePersuasionProficiencyChange = () => {
        const proficiency = !character.persuasionProficiency;
        let k = proficiency ? 1 : -1;

        setCharacter({
            ...character,
            persuasionProficiency: proficiency,
            persuasion: character.persuasion + k * character.proficiencyBonus,
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
            name: "выступление",
            notificationName: "выступления",
            score: character.performance,
            bonus: character.performanceBonus,
            proficiency: character.performanceProficiency,
        },
        {
            name: "запугивание",
            notificationName: "запугивания",
            score: character.intimidation,
            bonus: character.intimidationBonus,
            proficiency: character.intimidationProficiency,
        },
        {
            name: "обман",
            notificationName: "обмана",
            score: character.deception,
            bonus: character.deceptionBonus,
            proficiency: character.deceptionProficiency,
        },
        {
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

    //#endregion Уведомления

    const handleRollButtonClick = (value) => {
        setNotifications((prev) => {
            const updatedNotifications = [...prev, value].slice(-5);
            return updatedNotifications;
        });
    };

    const handleNotificationStackCloseButtonClick = () => {
        setNotifications([]);
    };

    //#region Прочее

    const handleCharacterChange = (value) => {
        setCharacter({ ...value });
    };

    const handleInspirationChange = () => {
        const value = !character.inspiration;

        setCharacter({
            ...character,
            inspiration: value,
        });
    };

    const handleExhaustChange = (value) => {
        setCharacter({
            ...character,
            exhausted: value,
        });
    };

    const handleSpeedChange = (value) => {
        setCharacter({
            ...character,
            speed: value,
        });
    };

    const handleArmorClassChange = (value) => {
        setCharacter({
            ...character,
            armorClass: value,
        });
    };

    const handleNameChange = (value) => {
        setCharacter({
            ...character,
            name: value,
        });
    };

    const handleClassChange = (value) => {
        setCharacter({
            ...character,
            class: value,
        });
    };

    const handleSubclassChange = (value) => {
        setCharacter({
            ...character,
            subclass: value,
        });
    };

    const handleRaceChange = (value) => {
        setCharacter({
            ...character,
            race: value,
        });
    };

    const handleHPChange = (hp) => {
        setCharacter({
            ...character,
            currentHP: hp.currentHP,
            maxHP: hp.maxHP,
            temporaryHP: hp.temporaryHP,
        });
    };

    //#endregion Прочее

    //#region Атаки

    const [attacks, setAttacks] = useState([
        new Attack(
            character.strength,
            character.dexterity,
            character.constitution,
            character.intelligence,
            character.wisdom,
            character.charisma,
            character.proficiencyBonus
        ),
    ]);

    const handleAttacksChange = (newAttacks) => {
        setAttacks(newAttacks);
    };

    //#endregion Атаки

    // const sex = [
    //     { value: "MALE", label: <span>Мужской</span> },
    //     { value: "FEMALE", label: <span>Женский</span> },
    //     { value: "OTHER", label: <span>Другое</span> },
    // ];

    // const alignments = [
    //     { value: "LAWFUL_GOOD", label: <span>Законно-добрый</span> },
    //     { value: "NEUTRAL_GOOD", label: <span>Нейтрально-добрый</span> },
    //     { value: "CHAOTIC_GOOD", label: <span>Хаотично-добрый</span> },
    //     { value: "LAWFUL_NEUTRAL", label: <span>Законно-нейтральный</span> },
    //     { value: "NEUTRAL", label: <span>Нейтральный</span> },
    //     { value: "CHAOTIC_NEUTRAL", label: <span>Хаотично-добрый</span> },
    //     { value: "LAWFUL_EVIL", label: <span>Законно-злой</span> },
    //     { value: "NEUTRAL_EVIL", label: <span>Нейтрально-злой</span> },
    //     { value: "CHAOTIC_EVIL", label: <span>Хаотично-злой</span> },
    // ];

    // const characterDetails = [
    //     <Form.Item name="name" label="Имя:" required>
    //         <Input />
    //     </Form.Item>,
    //     <Form.Item name="sex" label="Пол:" required>
    //         <Select options={sex} />
    //     </Form.Item>,
    //     <Form.Item name="alignment" label="Мировоззрение:" required>
    //         <Select options={alignments} />
    //     </Form.Item>,
    //     <Form.Item name="author" label="Игрок:" required>
    //         <Input disabled />
    //     </Form.Item>,
    //     <Form.Item name="EXP" label="Текущий опыт:" required>
    //         <InputNumber
    //             style={{ width: "100%" }}
    //             prefix="EXP"
    //             min={0}
    //             precision={0}
    //         />
    //     </Form.Item>,
    //     <Form.Item name="deity" label="Божество:" required>
    //         <Input />
    //     </Form.Item>,
    // ];

    return (
        <>
            <CharacterHeaderContext.Provider
                value={{
                    onInitiativeChange: handleInitiativeChange,
                    onArmorClassChange: handleArmorClassChange,
                    onSpeedChange: handleSpeedChange,
                    onNameChange: handleNameChange,
                    onRaceChange: handleRaceChange,
                    onClassChange: handleClassChange,
                    onSubclassChange: handleSubclassChange,
                    onHPChange: handleHPChange,
                    character: character,
                }}
            >
                <CharacterHeader />
            </CharacterHeaderContext.Provider>
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
                                notificationName="телосложения"
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
                                    handleIntelligenceSavingThrowBonusChange,
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
                                notificationName="интеллекта"
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
                        <AbilityContext.Provider
                            value={{
                                onScoreChange: handleWisdomScoreChange,
                                onSavingThrowProficiencyChange:
                                    handleWisdomSavingThrowProficiencyChange,
                                onSavingThrowBonusChange:
                                    handleWisdomSavingThrowBonusChange,
                                onSkillProficiencyChange: (index) => {
                                    switch (index) {
                                        case 0:
                                            handlePerceptionProficiencyChange();
                                            break;
                                        case 1:
                                            handleSurvivalProficiencyChange();
                                            break;
                                        case 2:
                                            handleMedicineProficiencyChange();
                                            break;
                                        case 3:
                                            handleInsightProficiencyChange();
                                            break;
                                        case 4:
                                            handleAnimalHandlingProficiencyChange();
                                            break;
                                        default:
                                            break;
                                    }
                                },
                                onSkillBonusChange: (index, bonus) => {
                                    switch (index) {
                                        case 0:
                                            handlePerceptionBonusChange(bonus);
                                            break;
                                        case 1:
                                            handleSurvivalBonusChange(bonus);
                                            break;
                                        case 2:
                                            handleMedicineBonusChange(bonus);
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
                                key="wisdom"
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
                                onSavingThrowProficiencyChange:
                                    handleCharismaSavingThrowProficiencyChange,
                                onSavingThrowBonusChange:
                                    handleCharismaSavingThrowBonusChange,
                                onSkillProficiencyChange: (index) => {
                                    switch (index) {
                                        case 0:
                                            handlePerformanceProficiencyChange();
                                            break;
                                        case 1:
                                            handleIntimidationProficiencyChange();
                                            break;
                                        case 2:
                                            handleDeceptionProficiencyChange();
                                            break;
                                        case 3:
                                            handlePersuasionProficiencyChange();
                                            break;
                                        default:
                                            break;
                                    }
                                },
                                onSkillBonusChange: (index, bonus) => {
                                    switch (index) {
                                        case 0:
                                            handlePerformanceBonusChange(bonus);
                                            break;
                                        case 1:
                                            handleIntimidationBonusChange(
                                                bonus
                                            );
                                            break;
                                        case 2:
                                            handleDeceptionBonusChange(bonus);
                                            break;
                                        case 3:
                                            handlePersuasionBonusChange(bonus);
                                            break;
                                        default:
                                            break;
                                    }
                                },
                            }}
                        >
                            <AbilityTile
                                key="charisma"
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
                        <StatusTrackerContext.Provider
                            value={{
                                onInspirationChange: handleInspirationChange,
                                onExhaustChange: handleExhaustChange,
                                onCharacterChange: handleCharacterChange,
                                character: character,
                            }}
                        >
                            <StatusTracker />
                        </StatusTrackerContext.Provider>
                        <AttackContext.Provider
                            value={{
                                attacks: attacks,
                                character: character,
                                onAttacksChange: handleAttacksChange,
                            }}
                        >
                            <AttacksTable
                                attacksTableContent={attacks}
                                character={character}
                            />
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
        </>
    );
};

export default NewCharacterPage;
