// Routers.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazy, Suspense } from "react";

// Parent layout
import App from "../App";
import Loading from "./Pages/Loading";
import Blogs from "./Pages/Blogs";
import NotFound from "./Pages/NotFound";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const ProjectIndex = lazy(() => import("./ProjectComponents/ProjectIndex"));
const ProjectOverView = lazy(() =>
  import("./ProjectComponents/ProjectOverView")
);

// Fallback UI

const Routers = () => {
  const allRoutes = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "About",
          element: (
            <Suspense fallback={<Loading />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "Projects",
          element: (
            <Suspense fallback={<Loading />}>
              <ProjectIndex />
            </Suspense>
          ),
        },
        {
          path: "/Projects/ProjectOverView",
          element: (
            <Suspense fallback={<Loading />}>
              <ProjectOverView />
            </Suspense>
          ),
        },
        {
          path: "Blogs",
          element: (
            <Suspense fallback={<Loading />}>
              <Blogs />
            </Suspense>
          ),
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ],
    },
  ]);

  return <RouterProvider router={allRoutes} />;
};

export default Routers;
