import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Error from "../Pages/Shared/Error/Error";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/signUp";
import Collages from "../Pages/Home/Collages/Collages";
import Details from "../Pages/Home/Collages/Details";
import Admission from "../Pages/Home/Admission/Admission";
import CollageList from "../Pages/Home/Admission/CollageList";
import MyCollage from "../Pages/Home/MyCollage/MyCollage";
import EditCollage from "../Pages/Home/MyCollage/EditCollage";
import PrivateRoutes from "./PrivateRoutes";


const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [

      {
        path: '/',
        element: <Home></Home>,

      },
      {
        path: '/login',
        element: <Login></Login>,

      },
      {
        path: '/signUp',
        element: <SignUp></SignUp>,
      },
      {
        path: '/Collages',
        element: <Collages></Collages>,

      },
      {
        path: '/details/:id',
        element: <PrivateRoutes><Details></Details></PrivateRoutes>,
        loader: ({ params }) => fetch(`https://collage-admission.vercel.app/allCollage/${params.id}`)


      },
      {
        path: '/collageList',
        element: <CollageList></CollageList>,

      },
      {
        path: '/Admission',
        element: <Admission></Admission>,

      },
      {
        path: '/myCollage',
        element: <MyCollage></MyCollage>,

      },
      {
        path: '/editCollage/:id',
        element: <EditCollage></EditCollage>,
        loader:({params})=>fetch(`https://collage-admission.vercel.app/editCollage/${params.id}`)

      },
    ]
  },
  {
    path: '*',
    element: <Error></Error>
  }
]);
export default Router;