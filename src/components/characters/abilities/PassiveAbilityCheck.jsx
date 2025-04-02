import { Button, Flex } from "antd";
import { Link } from "react-router";
import "./index.css";

const PassiveAbilityCheck = (props) => {
    return (
        <Flex className="passive-ability-check" justify="space-between" align="center">
            <Button className="ability-check-button-reversed" disabled>
                {props.score}
            </Button>
            <Flex className="ability-check-wrap-reversed" align="center">
                <Link className="ability-check-label" to="">
                    {props.name.toUpperCase()}
                </Link>
            </Flex>
        </Flex>
    );
};

export default PassiveAbilityCheck;
