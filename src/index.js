import React, { Suspense, lazy } from "react";
import ReactDOM from"react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { createBrowserRouter,RouterProvider ,Outlet} from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore"
import Cart from "./components/Cart";
import ResList from "./components/ResList";
//import Grocery from "./components/Grocery"


const Grocery=lazy(()=>import("./components/Grocery"));

const AppLayout=() => {
   return (
   <Provider store={appStore}>
   <div className="app">
    <Header/>
    <Outlet/>
   </div>
   </Provider>
   );
};

const appRouter=createBrowserRouter([
   {
      path:"/",
      element:<AppLayout/>,
      children:[
         {
            path:"/",
            element:<Body/>,
         },
         {
            path:"/about",
            element:<About/>,
         },
         {
            path:"/contact",
            element:<Contacts/>,
         },
         {
            path:"/grocery",
            element:<Suspense fallback={<h1>loading.......</h1>}><Grocery/></Suspense>,
         },
         {
            path:"/restaurants/:resId",
            element:<RestaurantMenu/>,
         },
         {
            path:"/restaurantsList/:resId",
            element:<ResList/>,
         },
         {
            path:"/cart",
            element:<Cart/>
         }
      ],
      errorElement:<Error/>,
   },
   
]);

const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);