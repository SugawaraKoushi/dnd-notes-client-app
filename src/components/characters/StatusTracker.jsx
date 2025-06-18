import { Button, Checkbox, Dropdown, Flex } from "antd";
import { modifierAsString } from "../services/ModifierService";
import { useContext, useState } from "react";
import { StatusTrackerContext } from "./context/StatusTrackerContext";
import "./index.css";
import { rollDice } from "../services/RollDiceService";
import { NotificationContext } from "./context/NotificationContext";
import StatesDrawer from "./drawer/StatesDrawer";
import { DrawerContext } from "./context/DrawerContext";

const StatusTracker = () => {
    const {
        onInspirationChange,
        onExhaustChange,
        onCharacterChange,
        character,
    } = useContext(StatusTrackerContext);
    const { onRollButtonClick } = useContext(NotificationContext);
    const [statesDrawerIsOpen, setStatesDrawerIsOpen] = useState(false);
    const [statesString, setStatesString] = useState("-");

    const exhaustingLevels = [
        { key: 1, label: <span>0</span>, onClick: () => onExhaustChange(0) },
        { key: 2, label: <span>1</span>, onClick: () => onExhaustChange(1) },
        { key: 3, label: <span>2</span>, onClick: () => onExhaustChange(2) },
        { key: 4, label: <span>3</span>, onClick: () => onExhaustChange(3) },
        { key: 5, label: <span>4</span>, onClick: () => onExhaustChange(4) },
        { key: 6, label: <span>5</span>, onClick: () => onExhaustChange(5) },
        { key: 7, label: <span>6</span>, onClick: () => onExhaustChange(6) },
    ];

    const handleIniativeButtonClick = () => {
        let dice = 20;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "проверка",
            value: value,
            modifier: character.initiative,
            dice: dice,
            times: times,
            ability: "инициативы",
        };

        onRollButtonClick(result);
    };

    const handleInspirationChange = () => {
        onInspirationChange();
    };

    const handleStatesButtonClick = () => {
        setStatesDrawerIsOpen(true);
    };

    const handleStatesDrawerClose = () => {
        setStatesDrawerIsOpen(false);
    };

    const handleChangeStates = (updatedCharacter) => {
        let states = [];

        if (updatedCharacter.unconscious) {
            states.push("Бессознательный");
        }

        if (updatedCharacter.frightened) {
            states.push("Испуганный");
        }

        if (updatedCharacter.exhaustion) {
            states.push("Истощенный");
        }

        if (updatedCharacter.invisible) {
            states.push("Невидимый");
        }

        if (updatedCharacter.incapasitated) {
            states.push("Недееспособный");
        }

        if (updatedCharacter.defeaned) {
            states.push("Оглохший");
        }

        if (updatedCharacter.petrified) {
            states.push("Окаменевший");
        }

        if (updatedCharacter.restrained) {
            states.push("Опутанный");
        }

        if (updatedCharacter.blinded) {
            states.push("Ослеплённый");
        }

        if (updatedCharacter.poisoned) {
            states.push("Отравленный");
        }

        if (updatedCharacter.charmed) {
            states.push("Очарованный");
        }

        if (updatedCharacter.stunned) {
            states.push("Ошеломлённый");
        }

        if (updatedCharacter.paralyzed) {
            states.push("Парализованный");
        }

        if (updatedCharacter.prone) {
            states.push("Сбитый с ног");
        }

        if (updatedCharacter.grappled) {
            states.push("Схваченный");
        }

        setStatesString(states.length > 0 ? states.join(", ") : "-");
        onCharacterChange(updatedCharacter);
    };

    return (
        <Flex
            justify="space-between"
            align="center"
            gap="small"
            style={{ width: "100%" }}
        >
            <Flex className="status-tracker-item-small" vertical align="center">
                <Button
                    id="initiative-button"
                    onClick={handleIniativeButtonClick}
                >
                    {modifierAsString(character.initiative)}
                </Button>
                <span className="small-description">инициатива</span>
            </Flex>
            <Flex className="status-tracker-item-small" vertical align="center">
                <Checkbox
                    className="inspire-checkbox"
                    checked={character.inspiration}
                    onChange={handleInspirationChange}
                />
                <label className="small-description">вдохновение</label>
            </Flex>
            <Flex className="status-tracker-item-small" vertical align="center">
                <Dropdown
                    menu={{ items: exhaustingLevels }}
                    placement="bottom"
                    trigger={["click"]}
                >
                    <Button id="exhaust-button">{character.exhausted}</Button>
                </Dropdown>
                <span className="small-description">истощение</span>
            </Flex>
            <Flex className="status-tracker-item" vertical align="center">
                <Button
                    onClick={handleStatesButtonClick}
                    style={{ width: "100%", height: "44px" }}
                >
                    <Flex vertical style={{ width: "100%" }}>
                        <p
                            style={{
                                padding: 0,
                                margin: 0,
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                textOverflow: "ellipsis",
                                width: "100%",
                            }}
                        >
                            {statesString}
                        </p>
                        <span className="small-description">состояния</span>
                    </Flex>
                </Button>
            </Flex>
            <DrawerContext.Provider
                value={{
                    onClose: handleStatesDrawerClose,
                    onCharacterChange: handleChangeStates,
                }}
            >
                <StatesDrawer open={statesDrawerIsOpen} />
            </DrawerContext.Provider>
        </Flex>
    );
};

export default StatusTracker;
