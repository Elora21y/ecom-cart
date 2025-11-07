import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Home from "../components/home/Home";
import Products from "../components/Products";
export const router = createBrowserRouter([
    {
        path : '/',
        Component : RootLayout,
        children : [
            {
                index : true,
                Component : Home
            },
            {
                path : '/products',
                Component : Products
            }
        ]
    }
])