import { Button, Checkbox, Flex } from "antd";
import { Link } from "react-router";
import "./index.css";
import { useState } from "react";

const AbilityCheck = (props) => {
    const [proficiency, setProficiency] = useState(props.proficiency);

    const handleProficiencyChange = () => {
        if (proficiency === 2) {
            setProficiency(0);
            return false;
        }

        if (!props.skill) {
            setProficiency();
        }
    };

    return (
        <Flex className="ability-check" justify="space-beetwen" align="center">
            <Flex className="ability-check-wrap" align="center">
                {props.checkable && (
                    <Checkbox
                        indeterminate={props.skill}
                        className="ability-check-checkbox"
                    />
                )}
                <Link className="ability-check-label" to="">
                    {props.name.toUpperCase()}
                </Link>
            </Flex>
            <Button className="ability-check-button">{props.value}</Button>
        </Flex>
    );
};

export default AbilityCheck;
