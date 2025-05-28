import { HeartOutlined } from "@ant-design/icons";
import { Flex } from "antd";
import { Link } from "react-router";
import "./index.css";
import { getHealthBarColor } from "../../services/HealthService";
import { useContext } from "react";
import { CharacterHeaderContext } from "../context/CharacterHeaderContext";

const HealthInfo = (props) => {
    const color = getHealthBarColor(props.current, props.max, props.temporary);
    const { currentHP, maxHP, temporaryHP } = useContext(
        CharacterHeaderContext
    );

    return (
        <Link style={{ color: `${color}` }}>
            <Flex
                className="health-info"
                align="center"
                justify="space-between"
                style={{ borderColor: `${color}` }}
            >
                <HeartOutlined className="health-icon" />
                <span>{`${currentHP} / ${maxHP + temporaryHP}`}</span>
            </Flex>
        </Link>
    );
};

export default HealthInfo;
