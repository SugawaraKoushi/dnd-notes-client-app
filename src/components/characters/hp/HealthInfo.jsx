import { HeartOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { Link } from "react-router";
import "./index.css";
import { getHealthBarColor } from "../../services/HealthService";
import { useContext, useState } from "react";
import { CharacterHeaderContext } from "../context/CharacterHeaderContext";
import { DrawerContext } from "../context/DrawerContext";
import HealthPointsDrawer from "./HealthPointsDrawer";

const HealthInfo = (props) => {
    const color = getHealthBarColor(props.current, props.max, props.temporary);
    const { currentHP, maxHP, temporaryHP } = useContext(
        CharacterHeaderContext
    );
    const [healthPointsDrawerIsOpen, setHealthPointsDrawerIsOpen] =
        useState(false);

    const handleHealthPointsDrawerOpen = () => {
        setHealthPointsDrawerIsOpen(true);
    };

    const handleHealthPointsDrawerClose = () => {
        setHealthPointsDrawerIsOpen(false);
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
                        {`${currentHP} / ${maxHP}`}{" "}
                        {temporaryHP > 0 ? `(${temporaryHP})` : ""}
                    </span>
                </Flex>
            </Link>
            <DrawerContext.Provider
                value={{ onClose: handleHealthPointsDrawerClose }}
            >
                <HealthPointsDrawer open={healthPointsDrawerIsOpen} />
            </DrawerContext.Provider>
        </>
    );
};

export default HealthInfo;
