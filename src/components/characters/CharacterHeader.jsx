import { Flex } from "antd";
import CharacterHeaderInfo from "./CharacterHeaderInfo";
import { modifierAsString } from "../services/ModifierService";
import "./index.css";
import { Link } from "react-router";
import HealthInfo from "./hp/HealthInfo";
import CharacterSettingsDrawer from "./drawer/CharacterSettingsDrawer";
import { useContext, useState } from "react";
import { DrawerContext } from "./context/DrawerContext";
import { CharacterHeaderContext } from "./context/CharacterHeaderContext";

const CharacterHeader = () => {
    const [settingsDrawerIsOpen, setSettingsDrawerIsOpen] = useState(false);
    const { character } = useContext(CharacterHeaderContext);

    const handleStatsClick = () => {
        setSettingsDrawerIsOpen(true);
    };

    const handleDrawerClose = () => {
        setSettingsDrawerIsOpen(false);
    };

    return (
        <Flex
            className="character-header"
            align="center"
            justify="space-between"
        >
            <DrawerContext.Provider
                value={{
                    onClose: handleDrawerClose,
                }}
            >
                <Flex onClick={handleStatsClick} style={{ cursor: "pointer" }}>
                    <CharacterHeaderInfo />
                </Flex>
            </DrawerContext.Provider>
            <Flex
                align="center"
                justify="space-between"
                style={{ width: "595px" }}
            >
                <Flex justify="space-between" style={{ width: "224px" }}>
                    <Link
                        className="link-no-highlight"
                        onClick={handleStatsClick}
                    >
                        <Flex vertical align="center">
                            <div className="stat-values">
                                {character.armorClass}
                            </div>
                            <div className="description">КЗ</div>
                        </Flex>
                    </Link>
                    <Link
                        className="link-no-highlight"
                        onClick={handleStatsClick}
                    >
                        <Flex vertical align="center">
                            <div className="stat-values">{character.speed}</div>
                            <div className="description">скорость</div>
                        </Flex>
                    </Link>
                    <Link
                        className="link-no-highlight"
                        onClick={handleStatsClick}
                    >
                        <Flex vertical align="center">
                            <div className="stat-values">
                                {modifierAsString(character.proficiencyBonus)}
                            </div>
                            <div className="description">владение</div>
                        </Flex>
                    </Link>
                </Flex>
                <HealthInfo />
                <DrawerContext.Provider
                    value={{
                        onClose: handleDrawerClose,
                    }}
                >
                    <CharacterSettingsDrawer open={settingsDrawerIsOpen} />
                </DrawerContext.Provider>
            </Flex>
        </Flex>
    );
};

export default CharacterHeader;
