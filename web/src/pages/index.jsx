import {
    createBrowserRouter,
    RouterProvider,
    Route,
} from "react-router-dom";

import {Home} from './home'
import {Login} from './login'
import {SignUp} from './signUp'

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
        path: "/signup",
        element: <SignUp/>,
    },
  ]);

export const Router = () => (
    <RouterProvider router={router} />
)