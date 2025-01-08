import { Button, Flex } from "antd";
import { Link } from "react-router";
import "./index.css";

const AbilityCheck = (props) => {
    return (
        <Flex className="ability-check" justify="space-beetwen" align="center">
            <Flex className="ability-check-wrap">
                <Link className="ability-check-label" to="">
                    {props.name.toUpperCase()}
                </Link>
            </Flex>
            <Button className="ability-check-button">{props.value}</Button>
        </Flex>
    );
};

export default AbilityCheck;
