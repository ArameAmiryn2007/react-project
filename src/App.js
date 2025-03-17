import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Bloge from "./pages/Bloge";
import NotFound from "./pages/NotFound"; // For 404 errors
import ErrorPage from "./pages/ErrorPage"; // Create an ErrorPage component for handling errors

const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />, // Add error handling for this route
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />, // Error handling
  },
  {
    path: "/contact",
    element: <Contact />,
    errorElement: <ErrorPage />, // Error handling
  },
  {
    path: "/work",
    element: <Work />,
    errorElement: <ErrorPage />, // Error handling
  },
  {
    path: "/bloge",
    element: <Bloge />,
    errorElement: <ErrorPage />, // Error handling
  },
  {
    // Catch-all route for non-existing pages
    path: "*",
    element: <NotFound />, // Display NotFound component for 404
  },
]);

function App() {
  return <RouterProvider router={router1} />;
}

export default App;
