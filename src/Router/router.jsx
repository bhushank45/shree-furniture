import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Collections from "../pages/Collections";
import AboutUs from "../pages/AboutUs";
import OurShowroom from "../pages/OurShowroom";
import ContactUs from "../pages/ContactUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "collections",
        element: <Collections />,
      },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "ourshowroom",
        element: <OurShowroom />,
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

export default router;
