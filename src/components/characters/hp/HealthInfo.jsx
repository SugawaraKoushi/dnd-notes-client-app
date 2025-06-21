import { HeartOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { Link } from "react-router";
import "./index.css";
import { getHealthBarColor } from "../../services/HealthService";
import { useContext, useState } from "react";
import { CharacterContext } from "../context/CharacterHeaderContext";
import { DrawerContext } from "../context/DrawerContext";
import HealthPointsDrawer from "./HealthPointsDrawer";

const HealthInfo = (props) => {
    const { character } = useContext(
        CharacterContext
    );
    const [color, setColor] = useState(
        getHealthBarColor(character.currentHP, character.maxHP, character.temporaryHP)
    );
    const [healthPointsDrawerIsOpen, setHealthPointsDrawerIsOpen] =
        useState(false);

    const handleHealthPointsDrawerOpen = () => {
        setHealthPointsDrawerIsOpen(true);
    };

    const handleHealthPointsDrawerClose = () => {
        setHealthPointsDrawerIsOpen(false);
        setColor(getHealthBarColor(character.currentHP, character.maxHP, character.temporaryHP));
    };

    return (
        <>
            <Link
                style={{ color: `${color}` }}
                onClick={handleHealthPointsDrawerOpen}
            >
                <Flex
                    className="health-info"
                    align="center"
                    justify="space-between"
                    style={{ borderColor: `${color}` }}
                >
                    <HeartOutlined className="health-icon" />
                    <span>
                        {`${character.currentHP} / ${character.maxHP}`}{" "}
                        {character.temporaryHP > 0 ? `(${character.temporaryHP})` : ""}
                    </span>
                </Flex>
            </Link>
            <DrawerContext.Provider
                value={{ onClose: handleHealthPointsDrawerClose }}
            >
                <HealthPointsDrawer
                    open={healthPointsDrawerIsOpen}
                    color={color}
                />
            </DrawerContext.Provider>
        </>
    );
};

export default HealthInfo;
