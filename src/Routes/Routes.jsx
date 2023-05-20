import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import CheckOut from "../Pages/checkout/CheckOut";
import BookServices from "../Pages/BookServices/BookServices";
import Bookings from "../Pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'login',
            element:<Login></Login>
        },
        {
            path:'signup',
            element:<SignUp></SignUp>
        },
        {
          path:'book/:id',
          element:<BookServices></BookServices>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'checkout/:id',
          element:<CheckOut></CheckOut>,
          loader:({params})=> fetch(`http://localhost:5000/services/${params.id}`)
        },
        {
          path:'bookings',
          element:<PrivateRoutes><Bookings></Bookings></PrivateRoutes>
        }   
      ]
    },
  ]);

  export default router;