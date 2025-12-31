import { Route } from "react-router-dom";
import { WebsiteLayout } from "@/components/website/Layout";
import { Home } from "@/pages/website/Home";
import { About } from "@/pages/website/About";
import { Products } from "@/pages/website/Products";
import { Contact } from "@/pages/website/Contact";

export const WebsiteRoutes = (
  <Route path="/" element={<WebsiteLayout />}>
    <Route index element={<Home />} />
    <Route path="about" element={<About />} />
    <Route path="products" element={<Products />} />
    <Route path="contact" element={<Contact />} />
  </Route>
);
