import { useState } from "react";
import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";

function App() {

  return (
    <div className="font-poppins">
      
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar />

        <div className="flex-1 p-6">
          <Header />

          <Routes>

            {/* 🔥 HALAMAN UTAMA */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* 🔥 ERROR PAGES */}
            <Route path="/error-400" element={
              <NotFound
                code="400"
                title="Bad Request"
                description="Permintaan yang kamu kirim tidak valid."
              />
            } />

            <Route path="/error-401" element={
              <NotFound
                code="401"
                title="Unauthorized"
                description="Kamu harus login untuk mengakses halaman ini."
              />
            } />

            <Route path="/error-403" element={
              <NotFound
                code="403"
                title="Forbidden"
                description="Kamu tidak memiliki izin untuk mengakses halaman ini."
              />
            } />

            {/* 🔥 DEFAULT 404 */}
            <Route path="*" element={<NotFound />} />

          </Routes>
        </div>
      </div>

    </div>
  );
}

export default App;