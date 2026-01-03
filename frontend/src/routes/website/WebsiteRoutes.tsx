
import { Route } from "react-router-dom";
import LandingPage from "@/pages/website/LandingPage";
import ContactPage from "@/pages/website/ContactPage";

export const WebsiteRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact-us" element={<ContactPage />} />
  </>
);
