import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Bloge from "./pages/Bloge";
import NotFound from "./pages/NotFound"; // Create a NotFound component for 404 handling

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/work",
    element: <Work />,
  },
  {
    path: "/bloge",
    element: <Bloge />,
  },
  {
    path: "*", // This route will catch all undefined routes
    element: <NotFound />, // Custom 404 Page
  },
]);

function App() {
  return <RouterProvider router={router1} />;
}

export default App;
