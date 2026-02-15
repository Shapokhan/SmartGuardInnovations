import { Route } from 'react-router-dom';
import LandingPage from '@/pages/website/LandingPage';
import ContactPage from '@/pages/website/ContactPage';
import ServicesPage from '@/pages/website/ServicesPage';
import AboutPage from '@/pages/website/AboutPage';
import ProductPage from '@/pages/website/ProductPage';
import ProductDetailPage from '@/pages/website/ProductDetailPage';

import { WebsiteLayout } from '@/components/website1/Layout';
import { Home } from '@/pages/website1/Home';
import { About } from '@/pages/website1/About';
import { Products } from '@/pages/website1/Products';
import { Contact } from '@/pages/website1/Contact';

export const WebsiteRoutes = (
  <>
    <Route path="/" element={<LandingPage />} />
    <Route path="/contact-us" element={<ContactPage />} />
    <Route path="/services" element={<ServicesPage />} />
    <Route path="/about-us" element={<AboutPage />} />
    <Route path="/products" element={<ProductPage />} />
    <Route path="/products/:slug" element={<ProductDetailPage />} />
    <Route path="/website1" element={<WebsiteLayout />}>
      <Route path="/website1" element={<Home />} />
      <Route path="about1" element={<About />} />
      <Route path="products1" element={<Products />} />
      <Route path="contact1" element={<Contact />} />
    </Route>
  </>
);
