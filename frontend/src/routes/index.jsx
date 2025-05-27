import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/public/Home";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
