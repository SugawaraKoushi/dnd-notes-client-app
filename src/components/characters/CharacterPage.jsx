import { Flex, Grid } from "antd";
import { useEffect, useState } from "react";
import AbilityTile from "./abilities/AbilityTile";
import CharacterHeader from "./CharacterHeader";
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
import { useParams } from "react-router";
import axios from "axios";

const CharacterPage = () => {
    const [character, setCharacter] = useState({});
    const [notifications, setNotifications] = useState([]);
    const { id } = useParams();

    const { useBreakpoint } = Grid;
    const screens = useBreakpoint();
    const isVertical = screens.xl;

    //#region Сила

    const strengthSkills = [
        {
            id: "athletics",
            name: "атлетика",
            notificationName: "атлетики",
            score: character.athletics,
            bonus: character.athleticsBonus,
            proficiency: character.athleticsProficiency,
        },
    ];

    //#endregion Сила

    //#region Ловкость

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

    //#region Интеллект

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
            id: "persuasion",
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

    //#endregion Атаки

    //#region Работа с данными

    const handleCharacterChange = async (value) => {
        await updateCharacter(value);
    };

    const handleLanguagesChange = (value) => {
        handleCharacterChange({
            ...character,
            languages: value,
        });
    };

    const handleNotesChange = (value) => {
        handleCharacterChange({
            ...character,
            notes: value,
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            await getCharacter();
            await getAttacks();
        };

        fetchData();
    }, []);

    const getCharacter = async () => {
        try {
            const url = `/characters/${id}`;

            const response = await axios.get(url);
            setCharacter(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getAttacks = async () => {
        try {
            const url = `/attacks/character/${id}`;
            const response = await axios.get(url);
            setAttacks(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const updateCharacter = async (characterData) => {
        try {
            const url = "/characters/update";
            const response = await axios.put(url, characterData);
            setCharacter(response.data);
        } catch (error) {
            console.log(error);
        }
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
                            <AbilityTile
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
                            <AbilityTile
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
                            <PassiveAbilityTile skills={passiveSkills} />
                            <TextBlock
                                id="languages"
                                title="прочие владения и языки"
                                onChange={handleLanguagesChange}
                                value={character.languages}
                            />
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
                            <TextBlock
                                title={"заметки"}
                                onChange={handleNotesChange}
                                value={character.notes}
                            />
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
