
import RootLayout from "../layout/RootLayout";
import Home from "../components/home/Home";
import Products from "../components/Products";
import { createBrowserRouter } from "react-router";
export const router = createBrowserRouter([
    {
        path : '/',
        Component : RootLayout,
        hydrateFallbackElement : <p>Loadings......</p>,
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