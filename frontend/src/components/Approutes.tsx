import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";
import Sidebar from "./sidebar";
import Home from "./Home";
import { Student } from "./Student";
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
            <Home></Home>
          </Suspense>
        ),
      },
      {
        path: "/students",
        element: (
          <Suspense>
            <Student></Student>
          </Suspense>
        ),
      },
    ],
  },
]);
