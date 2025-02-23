import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/home/Home'
import { Header } from "../components/header";

export const router = createBrowserRouter([
    {
        path: "/",
        element: 
        <>
        <Header />
        <Home /></>

    }
])