import { createBrowserRouter } from "react-router";
import Layout from "../layout/Layout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

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
                    loader: () => fetch('/news.json')
                }
            ]
        },
        {
            path: '/auth',
            element: <h2>Auth layout</h2>
        },
        {
            path: '/news',
            element: <h2>News layout</h2>
        }, {
            path: '/*',
            element: <h2>Error404</h2>
        },
    ]
)
export default router