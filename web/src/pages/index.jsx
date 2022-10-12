import { useLocalStorage } from 'react'

import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import {Home} from './home'
import {Login} from './login'
import {SignUp} from './signUp'
import {Dashboard} from "./dashboard"
import {Profile} from "./profile"

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
        path: "/login",
        element: <Login/>,
    },
    {
        path: "/signup",
        element: <SignUp/>,
    },
    {
        path: "/dashboard",
        element: <Dashboard/>,
    },
    {
        path: "/:username",
        element: <Profile/>,
    },
  ]);

export const Router = () => (
        
    <RouterProvider router={router}/>
)