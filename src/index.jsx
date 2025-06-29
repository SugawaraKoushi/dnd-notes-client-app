import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./components/Root";
import CharacterList from "./components/characters/CharacterList";
import Login from "./components/auth/Login";
import Registration from "./components/auth/Registration";
import Characters from "./components/characters/Characters";
import CharacterPage from "./components/characters/CharacterPage";
import axios from "axios";
import ErrorPage from "./components/ErrorPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/characters",
                element: <Characters />,
                children: [
                    {
                        path: "/characters/list",
                        element: <CharacterList />,
                    },
                    {
                        path: "/characters/:id",
                        element: <CharacterPage />,
                    },
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
    {
        path: "/error",
        element: <ErrorPage />,
    },
]);

const apiUrl = process.env.REACT_APP_API_URL;
const baseUrl = apiUrl == null ? "/api" : `${apiUrl}/api`;
axios.defaults.baseURL = baseUrl;
axios.defaults.withCredentials = true;

axios.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response.status === 401) {
            window.location.href = "/login";
        }

        return Promise.reject(error);
    }
);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
