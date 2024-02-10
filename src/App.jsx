import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

// pages

import Home from "./pages/Home";

import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import PageNotFound from "./pages/PageNotFound";
import Faq from "./pages/faq";

const Layout = () => {
  return (
    <main>
      <Outlet />
    </main>
  );
};

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/team",
        element: <Team />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
