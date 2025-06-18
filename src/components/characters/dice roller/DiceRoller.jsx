import Icon, { CloseOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { D20Outlined } from "../../../icons/D20Outlined";
import { useContext, useState } from "react";
import { D2Outlined } from "../../../icons/D2Outlined";
import { D3Outlined } from "../../../icons/D3Outlined";
import { D6Outlined } from "../../../icons/D6Outlined";
import { D8Outlined } from "../../../icons/D8Outlined";
import { D10Outlined } from "../../../icons/D10Outlined";
import { D100Outlined } from "../../../icons/D100Outlined";
import { D12Outlined } from "../../../icons/D12Outlined";
import { rollDice } from "../../services/RollDiceService";
import { NotificationContext } from "../context/NotificationContext";

const DiceRoller = () => {
    const [diceRollerMenuIsOpen, setDiceRollerMenuIsOpen] = useState(false);
    const { onRollButtonClick } = useContext(NotificationContext);

    const handleDiceRollerMenuButtonClick = () => {
        setDiceRollerMenuIsOpen(!diceRollerMenuIsOpen);
    };

    const handleD2RollButtonClick = () => {
        let dice = 2;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD20RollButtonClick = () => {
        let dice = 20;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD12RollButtonClick = () => {
        let dice = 12;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD3RollButtonClick = () => {
        let dice = 3;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD100RollButtonClick = () => {
        let dice = 100;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD6RollButtonClick = () => {
        let dice = 6;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD8RollButtonClick = () => {
        let dice = 8;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    const handleD10RollButtonClick = () => {
        let dice = 10;
        let times = 1;
        let value = rollDice(times, dice);

        let result = {
            type: "бросок",
            value: value,
            modifier: 0,
            dice: dice,
            times: times,
            ability: "",
        };

        onRollButtonClick(result);
    };

    return (
        <>
            <FloatButton
                className={diceRollerMenuIsOpen ? "" : "dice-roll-button"}
                icon={
                    diceRollerMenuIsOpen ? (
                        <CloseOutlined />
                    ) : (
                        <Icon component={() => <D20Outlined />} />
                    )
                }
                onClick={handleDiceRollerMenuButtonClick}
                style={{
                    width: "50px",
                    height: "50px",
                    padding: 0,
                    margin: 0,
                    bottom: "100px",
                    right: "100px",
                }}
            />
            {diceRollerMenuIsOpen && (
                <div>
                    <FloatButton
                        className="dice-roll-button"
                        id="d2"
                        icon={<Icon component={() => <D2Outlined />} />}
                        onClick={handleD2RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "155px",
                            right: "155px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />
                    <FloatButton
                        className="dice-roll-button"
                        id="d20"
                        icon={<Icon component={() => <D20Outlined />} />}
                        onClick={handleD20RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "155px",
                            right: "100px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />
                    <FloatButton
                        className="dice-roll-button"
                        id="d12"
                        icon={<Icon component={() => <D12Outlined />} />}
                        onClick={handleD12RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "155px",
                            right: "45px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />

                    <FloatButton
                        className="dice-roll-button"
                        id="d3"
                        icon={<Icon component={() => <D3Outlined />} />}
                        onClick={handleD3RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "100px",
                            right: "155px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />
                    <FloatButton
                        className="dice-roll-button"
                        id="d100"
                        icon={<Icon component={() => <D100Outlined />} />}
                        onClick={handleD100RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "100px",
                            right: "45px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />

                    <FloatButton
                        className="dice-roll-button"
                        id="d6"
                        icon={<Icon component={() => <D6Outlined />} />}
                        onClick={handleD6RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "45px",
                            right: "155px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />
                    <FloatButton
                        className="dice-roll-button"
                        id="d8"
                        icon={<Icon component={() => <D8Outlined />} />}
                        onClick={handleD8RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "45px",
                            right: "100px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />
                    <FloatButton
                        className="dice-roll-button"
                        id="d10"
                        icon={<Icon component={() => <D10Outlined />} />}
                        onClick={handleD10RollButtonClick}
                        style={{
                            width: "50px",
                            height: "50px",
                            padding: 0,
                            margin: 0,
                            bottom: "45px",
                            right: "45px",
                            border: "1px solid #d9d9d9",
                            boxShadow: "none",
                        }}
                    />
                </div>
            )}
        </>
    );
};

export default DiceRoller;
