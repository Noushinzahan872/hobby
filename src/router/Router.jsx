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
import UpdateGroup from "../components/UpdateGroup";




const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            loader:()=>fetch('https://hubby-server.vercel.app/hobbes'),
            Component:Home,
        },
        {
            path:'allGroup',
            loader:()=>fetch('https://hubby-server.vercel.app/hobbes'),
            Component:AllGroup,
        },
        {
            path:'createGroup',
            element:(<PrivateRoute>
                <CreateGroup></CreateGroup>
            </PrivateRoute>),
        },
        {
            path:'myGroup',
            loader:()=>fetch('https://hubby-server.vercel.app/hobbes/'),
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
            loader: ({ params }) => fetch(`https://hubby-server.vercel.app/hobbes/${params.id}`).then(res => res.json()),
            element:(
                <PrivateRoute>
                    <HobbyDetails></HobbyDetails>
                </PrivateRoute>
            ) 
        },
        {
            path:'updateGroup/:id',
             loader: ({ params }) => fetch(`https://hubby-server.vercel.app/hobbes/${params.id}`).then(res => res.json()),
           element:(
                <PrivateRoute>
                    <UpdateGroup></UpdateGroup>
                </PrivateRoute>
            ) 
        }
        


    ]
  }
]);




export default router;