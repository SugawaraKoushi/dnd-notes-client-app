import Icon from "@ant-design/icons";
import { FloatButton } from "antd";
import { D20Outlined } from "../../../icons/D20Outlined";
import { useState } from "react";

const DiceRoller = () => {
    const [diceRollerMenuIsOpen, setDiceRollerMenuIsOpen] = useState(false);

    const handleDiceRollerMenuButtonClick = () => {
        setDiceRollerMenuIsOpen(!diceRollerMenuIsOpen);
    };

    return (
        <>
            <FloatButton
                className="dice-roll-button"
                icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                    <FloatButton
                        className="dice-roll-button"
                        icon={<Icon component={() => <D20Outlined />} />}
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
                        icon={<Icon component={() => <D20Outlined />} />}
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
                </div>
            )}
        </>
    );
};

export default DiceRoller;
