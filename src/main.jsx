import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./page/Home.jsx";
import Products from "./page/Products.jsx";
import Login from "./page/Login.jsx";
import Root from "./page/Root.jsx";
import Register from "./page/Register.jsx";
import AuthProvider from "./auth/AuthProvider.jsx";
import Dashbord from "./page/Dashbord.jsx";
import Privet from "./auth/Privet.jsx";
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import Update from "./page/Update.jsx";
import Error from "./page/Error.jsx";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=> fetch('/fake.json')
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/update/:id",
        element: <Update></Update>,
        loader: ({ params }) =>
          fetch(`https://dashboards-server.vercel.app/tasks/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <Privet>
        <Dashbord></Dashbord>
      </Privet>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthProvider>
  </React.StrictMode>
);
