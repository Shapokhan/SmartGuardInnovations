import { BrowserRouter, Routes } from 'react-router-dom';
import { DashboardRoutes } from '@/routes/dashboard/DashboardRoutes';
import { WebsiteRoutes } from '@/routes/website/WebsiteRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {WebsiteRoutes}
        {DashboardRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
