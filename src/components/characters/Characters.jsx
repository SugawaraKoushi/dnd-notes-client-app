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

    return (
        <>
            <Breadcrumb
                style={{
                    margin: "16px 0",
                }}
                items={breadcrumbItems}
            />
            <div
                style={{
                    background: colorBgContainer,
                    padding: 24,
                    borderRadius: borderRadiusLG,
                }}
            >
                <Outlet context={[setBreadcrumbsItems]} />
            </div>
        </>
    );
};

export default Characters;
