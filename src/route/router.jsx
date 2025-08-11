import { createBrowserRouter } from "react-router";
import { HomeLayOut } from "../layout/HomeLayOut";

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayOut/>
    }
]);
export default router;