import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/Home";
import AllGroup from "../components/AllGroup";
import CreateGroup from "../components/CreateGroup";
import Login from "../components/Login";
import Register from "../components/Register";
import ErrorPage from "../components/Error";
import PrivateRoute from "../components/PrivateRoute";
import MyGroup from "../components/MyGroup";
import HobbyDetails from "../components/HobbyDetails";




const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'allGroup',
            loader:()=>fetch('http://localhost:3000/hobbes'),
            Component:AllGroup,
        },
        {
            path:'createGroup',
            Component:CreateGroup,
        },
        {
            path:'myGroup',
            loader:()=>fetch('http://localhost:3000/users/'),
            element:(
              <PrivateRoute>
                <MyGroup></MyGroup>
              </PrivateRoute>
            ),
        },
        {
            path:'login',
            Component:Login,
        },
        {
            path:'register',
            Component:Register,
        },
        {
            path:'/*',
            Component:ErrorPage,
        },
        {
            path:'hobby/:id',
            Component:HobbyDetails,

        }
        


    ]
  }
]);




export default router;