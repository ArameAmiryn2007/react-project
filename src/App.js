import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";
import Bloge from "./pages/Bloge";
const router1 = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
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
    ],
  },
]);
function App() {
  return <RouterProvider router={router1} />;
}
export default App;
