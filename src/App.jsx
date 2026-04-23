import "./assets/tailwind.css";
import Sidebar from "./layouts/Sidebar";
import Header from "./layouts/Header";
import Dashboard from "./pages/Dashboard";
import Customers from "./pages/Customers";
import Orders from "./pages/Orders";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="font-poppins">
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 p-6">
          <Header />

          <Routes>

            {/* MAIN */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />

            {/* ERROR 400 */}
            <Route
              path="/error-400"
              element={
                <NotFound
                  code="400"
                  title="Bad Request"
                  description="Permintaan tidak valid atau format salah."
                />
              }
            />

            {/* ERROR 401 */}
            <Route
              path="/error-401"
              element={
                <NotFound
                  code="401"
                  title="Unauthorized"
                  description="Kamu harus login untuk mengakses halaman ini."
                />
              }
            />

            {/* ERROR 403 */}
            <Route
              path="/error-403"
              element={
                <NotFound
                  code="403"
                  title="Forbidden"
                  description="Kamu tidak memiliki izin untuk mengakses halaman ini."
                />
              }
            />

            {/* DEFAULT 404 */}
            <Route
              path="*"
              element={
                <NotFound
                  code="404"
                  title="Page Not Found"
                  description="Halaman yang kamu cari tidak tersedia."
                />
              }
            />

          </Routes>

        </div>

      </div>
    </div>
  );
}

export default App;