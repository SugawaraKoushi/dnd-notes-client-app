import { Drawer } from "antd";
import { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";

const CharacterSettingsDrawer = (props) => {
    const { onClose } = useContext(DrawerContext);

    const handleClose = () => {
        onClose();
    };

    return (
        <Drawer
            title="Настройки"
            width={580}
            open={props.open}
            onClose={handleClose}
        >
            <p>sample text</p>
        </Drawer>
    );
};

export default CharacterSettingsDrawer;
