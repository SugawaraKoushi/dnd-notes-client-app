import { Button, Checkbox, Flex } from "antd";
import { Link } from "react-router";
import "./index.css";

const AbilityCheck = (props) => {
    return (
        <Flex className="ability-check" justify="space-beetwen" align="center">
            <Flex align="center" className="ability-check-wrap">
                {props.checkable && (
                    <Checkbox className="ability-check-checkbox" />
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
