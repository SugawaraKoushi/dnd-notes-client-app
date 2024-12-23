import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";
import CampaignList, {
    loader as campaignLoader,
} from "./components/campaigns/CampaignList";
import CharacterList from "./components/characters/CharacterList";
import Login from "./components/auth/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/campaigns",
                element: <CampaignList />,
                loader: campaignLoader,
            },
            {
                path: "/characters",
                element: <CharacterList />,
            },
        ],
    },
    {
        path: "/login",
        element: <Login />,
    },
]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
