import { lazy, useState } from "react";
import { useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { RestrictedRoute } from "./RestrictedRoute";
import { Layout } from "./Layout/Layout";
import { PrivateRoute } from "./PrivateRoute";
import { fetchContacts } from "../redux/operations";
import { selectError, selectIsLoading } from "../redux/selectors";
import { useDispatch } from "react-redux";
import { useAuth } from "../hooks";
import { Toaster } from "react-hot-toast";
import { refreshUser } from "../redux/auth/operations";

const HomePage = lazy(() => import("../pages/Home/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));
const LoginPage = lazy(() => import("../pages/Login"));
const ContactsPage = lazy(() => import("../pages/Contacts"));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
              // <ContactsPage />
            }
          />
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};

export default App;
