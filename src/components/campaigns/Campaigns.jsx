import { Breadcrumb, theme } from "antd";
import { Outlet } from "react-router";

const Campaigns = () => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const breadcrumbItems = [{ title: "Кампании" }];

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

export default Campaigns;
