import { Button, Checkbox, Dropdown, Flex } from "antd";
import { modifierAsString } from "../services/ModifierService";
import { useContext, useEffect, useState } from "react";
import "./index.css";
import { rollDice } from "../services/RollDiceService";
import { NotificationContext } from "./context/NotificationContext";
import StatesDrawer from "./drawer/StatesDrawer";
import { DrawerContext } from "./context/DrawerContext";
import { CharacterContext } from "./context/CharacterHeaderContext";

const StatusTracker = () => {
    const { character, onCharacterChange } = useContext(CharacterContext);
    const { onRollButtonClick } = useContext(NotificationContext);
    const [statesDrawerIsOpen, setStatesDrawerIsOpen] = useState(false);
    const [statesString, setStatesString] = useState("-");

    useEffect(() => {
        handleChangeStates();
    }, [character]);

    const exhaustingLevels = [
        {
            key: 1,
            label: <span>0</span>,
            onClick: () => handleExhaustChange(0),
        },
        {
            key: 2,
            label: <span>1</span>,
            onClick: () => handleExhaustChange(1),
        },
        {
            key: 3,
            label: <span>2</span>,
            onClick: () => handleExhaustChange(2),
        },
        {
            key: 4,
            label: <span>3</span>,
            onClick: () => handleExhaustChange(3),
        },
        {
            key: 5,
            label: <span>4</span>,
            onClick: () => handleExhaustChange(4),
        },
        {
            key: 6,
            label: <span>5</span>,
            onClick: () => handleExhaustChange(5),
        },
        {
            key: 7,
            label: <span>6</span>,
            onClick: () => handleExhaustChange(6),
        },
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
        const value = !character.inspiration;

        onCharacterChange({
            ...character,
            inspiration: value,
        });
    };

    const handleExhaustChange = (value) => {
        onCharacterChange({
            ...character,
            exhausted: value,
        });
    };

    const handleStatesButtonClick = () => {
        setStatesDrawerIsOpen(true);
    };

    const handleStatesDrawerClose = () => {
        handleChangeStates();
        setStatesDrawerIsOpen(false);
    };

    const handleChangeStates = async () => {
        let states = [];

        if (character.unconscious) {
            states.push("Бессознательный");
        }

        if (character.frightened) {
            states.push("Испуганный");
        }

        if (character.exhaustion) {
            states.push("Истощенный");
        }

        if (character.invisible) {
            states.push("Невидимый");
        }

        if (character.incapacitated) {
            states.push("Недееспособный");
        }

        if (character.deafened) {
            states.push("Оглохший");
        }

        if (character.petrified) {
            states.push("Окаменевший");
        }

        if (character.restrained) {
            states.push("Опутанный");
        }

        if (character.blinded) {
            states.push("Ослеплённый");
        }

        if (character.poisoned) {
            states.push("Отравленный");
        }

        if (character.charmed) {
            states.push("Очарованный");
        }

        if (character.stunned) {
            states.push("Ошеломлённый");
        }

        if (character.paralyzed) {
            states.push("Парализованный");
        }

        if (character.prone) {
            states.push("Сбитый с ног");
        }

        if (character.grappled) {
            states.push("Схваченный");
        }

        setStatesString(states.length > 0 ? states.join(", ") : "-");
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
