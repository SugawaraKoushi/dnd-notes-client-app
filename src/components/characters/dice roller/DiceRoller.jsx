import Icon, { CloseOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
import { D20Outlined } from "../../../icons/D20Outlined";
import { useState } from "react";
import { D2Outlined } from "../../../icons/D2Outlined";
import { D3Outlined } from "../../../icons/D3Outlined";
import { D6Outlined } from "../../../icons/D6Outlined";
import { D8Outlined } from "../../../icons/D8Outlined";
import { D10Outlined } from "../../../icons/D10Outlined";
import { D100Outlined } from "../../../icons/D100Outlined";
import { D12Outlined } from "../../../icons/D12Outlined";

const DiceRoller = () => {
    const [diceRollerMenuIsOpen, setDiceRollerMenuIsOpen] = useState(false);

    const handleDiceRollerMenuButtonClick = () => {
        setDiceRollerMenuIsOpen(!diceRollerMenuIsOpen);
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
                        icon={<Icon component={() => <D2Outlined />} />}
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
                        icon={<Icon component={() => <D12Outlined />} />}
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
                        icon={<Icon component={() => <D3Outlined />} />}
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
                        icon={<Icon component={() => <D100Outlined />} />}
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
                        icon={<Icon component={() => <D6Outlined />} />}
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
                        icon={<Icon component={() => <D8Outlined />} />}
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
                        icon={<Icon component={() => <D10Outlined />} />}
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
