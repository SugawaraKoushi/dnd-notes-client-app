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
import axios from "axios";
import Registration from "./components/auth/Registration";

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
    {
        path: "/register",
        element: <Registration />,
    },
]);

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
