import { BrowserRouter, Routes } from 'react-router-dom';
import { DashboardRoutes } from '@/routes/dashboard/DashboardRoutes';
import { WebsiteRoutes } from '@/routes/website/WebsiteRoutes';
import ScrollToTopOnNavigation from '@/components/website/shared/ScrollToTopOnNavigation';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTopOnNavigation />
      <Routes>
        {WebsiteRoutes}
        {DashboardRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
