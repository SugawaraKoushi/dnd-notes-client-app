import { Button, Checkbox, Flex } from "antd";
import { Link } from "react-router";

const AbilityCheck = (props) => {
    const labelClassName = props.small ? "ability-check-label-small" : "ability-check-label";
    const checkboxClassName = props.small ? "ability-check-checkbox-small" : "ability-check-checkbox";

    return (
        <Flex className="ability-check" justify="space-beetwen" align="center">
            <Flex className="ability-check-wrap" align="center">
                {props.checkable && (
                    <Checkbox
                        className={checkboxClassName}
                    />
                )}
                <Link className={labelClassName} to="">
                    {props.name.toUpperCase()}
                </Link>
            </Flex>
            <Button className="ability-check-button">{props.value}</Button>
        </Flex>
    );
};

export default AbilityCheck;
