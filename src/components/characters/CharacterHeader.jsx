import { Flex, Typography } from "antd";
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
    const { Title } = Typography;

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
                <Flex align="center" gap={12}>
                    <Title className="money" level={5}>
                        371.1
                    </Title>
                    <HealthInfo
                        current={props.currentHP}
                        max={props.maxHP}
                        temporary={props.temporaryHP}
                    />
                </Flex>
                <DrawerContext.Provider
                    value={{
                        onClose: handleDrawerClose,
                        name: props.name,
                        race: props.race,
                        className: props.class,
                        subclass: props.subclass,
                        armorClass: props.armorClass,
                        speed: props.speed,
                        initiative: props.initiative,
                    }}
                >
                    <CharacterSettingsDrawer open={settingsDrawerIsOpen} />
                </DrawerContext.Provider>
            </Flex>
        </Flex>
    );
};

export default CharacterHeader;
