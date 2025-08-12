import { createBrowserRouter, Navigate } from "react-router";
import { HomeLayOut } from "../layout/HomeLayOut";
import { ErrorPage } from "../components/ErrorPage";
import { CategoryNews } from "../pages/CategoryNews";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayOut />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Navigate to={`/category/01`}></Navigate>,
      },
      {
        path: "/category/:id",
        element: <CategoryNews></CategoryNews>,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
]);
export default router;
