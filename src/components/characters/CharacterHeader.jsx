import { Checkbox, Flex } from "antd";
import CharacterHeaderInfo from "./CharacterHeaderInfo";
import { modifierAsString } from "../services/ModifierService";
import "./index.css";
import { Link } from "react-router";
import HealthInfo from "./hp/HealthInfo";
import CharacterSettingsDrawer from "./drawer/CharacterSettingsDrawer";
import { useState } from "react";
import { DrawerContext } from "./context/DrawerContext";

const CharacterHeader = (props) => {
    const [settingsDrawerIsOpen, setSettingsDrawerIsOpen] = useState(false);

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
            <CharacterHeaderInfo name={props.name} />
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
                                {props.armorClass}
                            </div>
                            <div className="description">КЗ</div>
                        </Flex>
                    </Link>
                    <Link
                        className="link-no-highlight"
                        onClick={handleStatsClick}
                    >
                        <Flex vertical align="center">
                            <div className="stat-values">{props.speed}</div>
                            <div className="description">скорость</div>
                        </Flex>
                    </Link>
                    <Link
                        className="link-no-highlight"
                        onClick={handleStatsClick}
                    >
                        <Flex vertical align="center">
                            <div className="stat-values">
                                {modifierAsString(props.proficiencyBonus)}
                            </div>
                            <div className="description">владение</div>
                        </Flex>
                    </Link>
                </Flex>
                <Flex>
                    <div>371.1</div>
                    <Checkbox />
                    <HealthInfo
                        current={props.currentHP}
                        max={props.maxHP}
                        temporary={props.temporaryHP}
                    />
                </Flex>
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
