import { Breadcrumb, theme } from "antd";
import { useState } from "react";
import { Outlet } from "react-router";

const Characters = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const [breadcrumbItems, setBreadcrumbsItems] = useState([
        { title: "Персонажи" },
    ]);

    return <Outlet context={[setBreadcrumbsItems]} />;
};

export default Characters;
