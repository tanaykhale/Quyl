import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar";

import { Students } from "./Students";
import Dashboard from "./Dashboard";
import { Chapter } from "./Chapter";
import Help from "./Help";
import { Reports } from "./Reports";
import Settings from "./Settings";
export const Approutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading....</div>}>
        <Sidebar></Sidebar>
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Dashboard></Dashboard>
          </Suspense>
        ),
      },
      {
        path: "/students",
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Students></Students>
          </Suspense>
        ),
      },
      {
        path: "/chapter",
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Chapter></Chapter>
          </Suspense>
        ),
      },
      {
        path: "/help",
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Help></Help>
          </Suspense>
        ),
      },
      {
        path: "/reports",
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Reports></Reports>
          </Suspense>
        ),
      },
      {
        path: "/settings",
        element: (
          <Suspense fallback={<div>Loading.....</div>}>
            <Settings></Settings>
          </Suspense>
        ),
      },
    ],
  },
]);
