import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Collections from "../pages/Collections/Collections";
import AboutUs from "../pages/About/AboutUs";
import OurShowroom from "../pages/OurShowroom/OurShowroom";
import ContactUs from "../pages/Contact/ContactUs";

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
