import { createBrowserRouter } from "react-router-dom";

import Home from '../pages/home/Index.jsx';
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