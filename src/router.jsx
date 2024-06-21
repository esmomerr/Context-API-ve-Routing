import App from "./App";
import { LoginInformation } from "./pages/login-information";
import { Users } from "./pages/users";
import { NotFound } from "./pages/notFound";
import { createBrowserRouter } from "react-router-dom";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/login-information",
                element: <LoginInformation />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/*",
                element: <NotFound />
            },
        ]
    }
])