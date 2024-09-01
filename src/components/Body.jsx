import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./MainPage";
import Cart from "./Cart";
import Login from "./Login";
import Collection from "./Collection";
import Notes from "./Notes";

const Body = () => {
    const appRouter = createBrowserRouter([
       {
        path: "/",
        element: <MainPage />
       },
       {
        path: "/cart",
        element : <Cart />
       },
       {
        path: "/login",
        element : <Login />
       },
       {
        path : "/collection",
        element : <Collection />
       },
       {
        path: "/notes",
        element : <Notes />
       }

    ])

    return(
        <RouterProvider router={appRouter}>
            <MainPage />
        </RouterProvider>
    );
};

export default Body;