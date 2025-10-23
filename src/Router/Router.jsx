import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import AuthLayout from "../layout/AuthLayout";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Layout></Layout>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>
                },
                {
                    path: '/category/:id',
                    element: <CategoryNews></CategoryNews>,
                    loader: () => fetch('/news.json'),
                    hydrateFallbackElement: <p className="text-center mt-10">Loading...</p>
                }
            ]
        },
        {
            path: '/auth',
            element: <AuthLayout></AuthLayout>,
            children: [
                {
                    path: "/auth/login",
                    element: <LoginPage></LoginPage>
                },
                {
                    path: "/auth/register",
                    element: <RegisterPage></RegisterPage>
                }
            ]
        },
        {
            loader: () => fetch("/news.json"),

            path: '/newsDetail/:id',
            element: <PrivateRoute>
                <NewsDetails></NewsDetails>
            </PrivateRoute>,
            hydrateFallbackElement: <p className="text-center mt-10">Loading...</p>

        },
        {
            path: '/*',
            element: <h2>Error404</h2>
        },
    ]
)
export default router