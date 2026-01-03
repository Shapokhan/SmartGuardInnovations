
import { Route } from "react-router-dom";
import LandingPage from "@/pages/website/LandingPage";
import ContactPage from "@/pages/website/ContactPage";
import ServicesPage from "@/pages/website/ServicesPage";
import AboutPage from "@/pages/website/AboutPage";

export const WebsiteRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact-us" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/about-us" element={<AboutPage />} />
  </>
);
