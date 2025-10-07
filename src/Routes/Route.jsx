import { createBrowserRouter } from "react-router";
import MainLayout from "../Components/MainLayout";
import Home from './../Pages/Home';
import Products from "../Pages/Products";
import Error from "../Pages/Error";
import ProductDetails from "../Pages/ProductDetails";
import Wishlists from "../Pages/Wishlists";
import Charts from "../Pages/Charts";

const router = createBrowserRouter([
    { path:'/', Component: MainLayout,
        children:[
            {index:true, Component:Home},
            {path:'products', Component:Products},
            {path:'productsDetails/:Id', Component:ProductDetails},
            {path:'wishlists', Component:Wishlists},
            {path:'charts', Component:Charts},

        ]
    },

    {path:'*', Component:Error}
])

export default router;