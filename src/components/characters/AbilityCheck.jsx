import { Button, Checkbox, Flex } from "antd";
import { Link } from "react-router";
import "./index.css";
import { useState } from "react";

const AbilityCheck = (props) => {
    const [checked, setChecked] = useState(false);
    const [skillState, setSkillState] = useState(1);
    const [indeterminate, setIndeterminate] = useState(false);

    const handleLabelClick = () => {
        props.openModal(true);
    }

    const handleCheckboxClick = () => {
        if (props.skill) {
            if (skillState === 2) {
                setSkillState(0);
            } else {
                setSkillState(skillState + 1);
            }

            if (skillState === 0) {
                setChecked(false);
                setIndeterminate(false);
            }

            if (skillState === 1) {
                setChecked(false);
                setIndeterminate(true);
            }

            if (skillState === 2) {
                setChecked(true);
                setIndeterminate(false);
            }
        } else {
            setChecked(!checked);
        }
    };

    return (
        <Flex className="ability-check" justify="space-beetwen" align="center">
            <Flex className="ability-check-wrap" align="center">
                {props.checkable && (
                    <Checkbox
                        checked={checked}
                        indeterminate={props.skill && indeterminate}
                        className="ability-check-checkbox"
                        onClick={handleCheckboxClick}
                    />
                )}
                <Link className="ability-check-label" to="" onClick={handleLabelClick}>
                    {props.name.toUpperCase()}
                </Link>
            </Flex>
            <Button className="ability-check-button">{props.value}</Button>
        </Flex>
    );
};

export default AbilityCheck;
