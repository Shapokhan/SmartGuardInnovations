import { Route } from 'react-router-dom';
import { WebsiteLayout } from '@/components/website1/Layout';
import { Home } from '@/pages/website1/Home';
import { About } from '@/pages/website1/About';
import { Products } from '@/pages/website1/Products';
import { Contact } from '@/pages/website1/Contact';

export const WebsiteRoutes = (
  <Route path="/website1" element={<WebsiteLayout />}>
    <Route path="/website1" element={<Home />} />
    <Route path="about1" element={<About />} />
    <Route path="products1" element={<Products />} />
    <Route path="contact1" element={<Contact />} />
  </Route>
);
