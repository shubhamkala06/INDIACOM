import React from "react";
import ReactDom from "react-dom/client";
import Header from "./Header";

import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Body from "./Body";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
const App = ()=>{
    return(
        <>
            <Header />
            <Outlet />
            <Footer/>
        </>
    )
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<>
                    <Body/>
                </>,
                children:[
                    {
                        path:"/",
                        element:<>
                            <Home/>
                        </>
                    },
                    {
                        path:"/login",
                        element:<>
                            <Login/>
                        </>
                    },
                    {
                        path:"/member/:memberid",
                        element:<>
                            <h1>You are Shite</h1>
                        </>
                    },
                ]
            },
            {
                path:"/signup",
                element:
                <SignUp/>
            },
        ]
    },
])

root = ReactDom.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router = {appRouter}/>);