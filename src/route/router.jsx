import { createBrowserRouter } from "react-router";
import { HomeLayOut } from "../layout/HomeLayOut";
import { ErrorPage } from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element: <HomeLayOut/>,
        errorElement: <ErrorPage/>
    },
]);
export default router;