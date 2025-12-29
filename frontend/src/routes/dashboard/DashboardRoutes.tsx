import { Route } from "react-router-dom"
import DashboardHome from "@/pages/dashboard/DashboardHome"

export const DashboardRoutes = (
  <Route path="/dashboard" element={<DashboardHome />} />
)