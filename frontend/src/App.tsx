import { BrowserRouter, Routes } from 'react-router-dom';
import { DashboardRoutes } from '@/routes//dashboard/DashboardRoutes';

function App() {
  return (
    <BrowserRouter>
      <Routes>{DashboardRoutes}</Routes>
    </BrowserRouter>
  );
}

export default App;
