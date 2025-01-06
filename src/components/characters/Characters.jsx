import { Breadcrumb, theme } from "antd";
import { Outlet } from "react-router";

const Characters = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const breadcrumbItems = [{ title: "Персонажи" }];

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
                <Outlet />
            </div>
        </>
    );
};

export default Characters;
