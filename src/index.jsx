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
import NewCampaign from "./components/campaigns/NewCampaign";
import Campaigns from "./components/campaigns/Campaigns";
import Characters from "./components/characters/Characters";
import NewCharacter from "./components/characters/NewCharacter";
import NewCharacterPage from "./components/characters/NewCharacterPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/campaigns",
                element: <Campaigns />,
                children: [
                    {
                        path: "/campaigns/new",
                        element: <NewCampaign />,
                    },
                    {
                        path: "/campaigns/list",
                        element: <CampaignList />,
                        loader: campaignLoader,
                    },
                ],
            },
            {
                path: "/characters",
                element: <Characters />,
                children: [
                    {
                        path: "/characters/list",
                        element: <CharacterList />,
                    },
                    {
                        path: "/characters/new",
                        element: <NewCharacter />,
                    },
                    {
                        path: "/characters/not-new",
                        element: <NewCharacterPage />
                    }
                ],
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
