import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/contact";
import List from "./pages/products/List";
import MainLayout from "./layouts/MainLayout";
import {
  ABOUT_ROUTE,
  CONTACT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTER_ROUTE,
} from "./constants/routes";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Details from "./pages/products/Details";
import AuthLayout from "./layouts/AuthLayout";
import UnAuthLayout from "./layouts/UnAuthLayout";
import ProductForm from "./components/products/Form";
import AddProduct from "./pages/products/Add";
import EditProduct from "./pages/products/Edit";
const Routes = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout />}>
    
        <Route element={<AuthLayout/>}>
        <Route path={HOME_ROUTE} element={<Home />} />
          <Route path={ABOUT_ROUTE} element={<About />} />
          <Route path={CONTACT_ROUTE} element={<Contact />} />
          <Route path={PRODUCT_ROUTE}>
            <Route index element={<List/>} />
            <Route path={":id"} element={<Details/>} />
            <Route path={"add"} element={< AddProduct/>} />
            <Route path={"edit/:id"} element={<EditProduct/>} />
          </Route>
        </Route>
        <Route element={<UnAuthLayout />}>
          <Route path={LOGIN_ROUTE} element={<Login />} />
          <Route path={REGISTER_ROUTE} element={<Register />} />
        </Route>
      </Route>
    
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
