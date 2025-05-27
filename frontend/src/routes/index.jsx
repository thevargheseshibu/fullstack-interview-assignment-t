import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/public/Home";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Home />} />

      {/* Catch-all Route (fallback) */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
