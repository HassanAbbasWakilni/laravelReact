import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Users from "./pages/Users";

const router = createBrowserRouter([
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/users',
        element: <Users/>
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;