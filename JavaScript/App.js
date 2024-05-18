import React from "react";
import ReactDom from "react-dom/client";

import Header from "./Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Body from "./Body";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import CallForPaper from "./CallForPaper";
import MemberHome from "./MemberHome";
import NewsPage from "./NewsPage";
import ImportantDatesComponent from "./ImportantDatesComponent";
import PaymentMode from "./PaymentMode";
import Review from "./ReviewPage";
import Committees from "./Committee";
import Guidelines from "./Guidelines";
import SubmitPaper from "./SubmitPaper";
import SpecialSession from "./SpecialSessions";
import JoinTechnical from "./JoinTPC";
import Plagiarism from "./PlagiarismRules";
import Conference from "./ConferencePage";
import Contact from "./ContactUsPage";

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
                        element:
                            <Login/>
                    },
                    {
                        path:"/member/:memberid",
                        element: <MemberHome/>
                    },
                    {
                        path:"callforpapers",
                        element: <CallForPaper/>
                    },
                    {
                        path:"/newsPage",
                        element: <NewsPage/>
                    },
                    {
                        path:"/importantDates",
                        element: <ImportantDatesComponent/>
                    },
                    {
                        path:"/paymentModes",
                        element: <PaymentMode/>
                    },
                    {
                        path:"/reviewNindexing",
                        element: <Review/>    
                    },
                    {
                        path:"/committees",
                        element: <Committees/>
                    },
                    {
                        path:"/guidelines",
                        element: <Guidelines/>
                    },
                    {
                        path:"/submitPaper",
                        element: <SubmitPaper/>
                    },
                    {
                        path:"/specialSessions",
                        element: <SpecialSession/>
                    },
                    {
                        path:"/joinTPC",
                        element: <JoinTechnical/>
                    },
                    {
                        path:"/plagiarism",
                        element: <Plagiarism/>
                    },
                    {
                        path:"/conference",
                        element: <Conference/>
                    },
                    {
                        path:"/contact",
                        element:<Contact/>
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