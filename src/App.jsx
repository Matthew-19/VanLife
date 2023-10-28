import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./components/Layout";

import Home from "./pages/Home";
import About from "./pages/About";
import Vans, { loader as vansLoader } from "./pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "./pages/Vans/VanDetail";
import Login, {
  loader as loginLoader,
  action as loginAction,
} from "./pages/Login";

import HostLayout from "./components/HostLayout";

import Dashboard from "./pages/Host/Dashboard.jsx";
import Income from "./pages/Host/Income";
import HostVans, {
  loader as hostVansLoader,
} from "./pages/Host/HostVans/HostVans";

import HostVanDetail, {
  loader as hostVanDetailLoader,
} from "./pages/Host/HostVans/HostVanDetail";
import Details from "./pages/Host/HostVans/Details";
import Pricing from "./pages/Host/HostVans/Pricing";
import Photos from "./pages/Host/HostVans/Photos";

import Reviews from "./pages/Host/Reviews";

import Page404 from "./pages/Page404";
import Error from "./components/Error";

import { requireAuth } from "./services/utils";
import "./services/server";

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/VanLife/" element={<Layout />} errorElement={<Error />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="vans" element={<Vans />} loader={vansLoader} />
        <Route
          path="vans/:id"
          element={<VanDetail />}
          loader={vanDetailLoader}
        />
        <Route
          path="login"
          element={<Login />}
          loader={loginLoader}
          action={loginAction}
        />

        <Route path="host/" element={<HostLayout />}>
          <Route
            index
            element={<Navigate to="dashboard" />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="dashboard"
            element={<Dashboard />}
            loader={async ({request}) => await requireAuth(request)}
          />
          <Route
            path="income"
            element={<Income />}
            loader={async ({request}) => await requireAuth(request)}
          />

          <Route path="vans" element={<HostVans />} loader={hostVansLoader} />
          <Route
            path="vans/:id"
            element={<HostVanDetail />}
            loader={hostVanDetailLoader}
          >
            <Route index element={<Navigate to="details" />} />
            <Route
              path="details"
              element={<Details />}
              loader={async ({request}) => await requireAuth(request)}
            />
            <Route
              path="pricing"
              element={<Pricing />}
              loader={async ({request}) => await requireAuth(request)}
            />
            <Route
              path="photos"
              element={<Photos />}
              loader={async ({request}) => await requireAuth(request)}
            />
          </Route>

          <Route
            path="reviews"
            element={<Reviews />}
            loader={async ({request}) => await requireAuth(request)}
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
