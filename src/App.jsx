import "./assets/tailwind.css";
import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import AuthLayout from "./layouts/AuthLayout";
import Loading from "./components/Loading";
import Components from "./pages/Components";

// 🔥 Lazy pages
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Orders = React.lazy(() => import("./pages/Orders"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// 🔥 TAMBAHAN: Products Page
const Products = React.lazy(() => import("./pages/Products"));

// 🔥 TAMBAHAN: Product Detail
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));

// 🔥 TAMBAHAN: Customer Detail
const CustomerDetail = React.lazy(() => import("./pages/CustomerDetail"));

const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

const MainLayout = React.lazy(() => import("./layouts/MainLayout"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      
      <Routes>

        {/* Layout utama */}
        <Route element={<MainLayout />}>

          <Route path="/" element={<Dashboard />} />

          <Route path="/orders" element={<Orders />} />

          <Route path="/customers" element={<Customers />} />

          {/* 🔥 TAMBAHAN: Dynamic Route Customer */}
          <Route path="/customers/:id" element={<CustomerDetail />} />

          {/* 🔥 TAMBAHAN: Products */}
          <Route path="/products" element={<Products />} />

          {/* 🔥 TAMBAHAN: Dynamic Route Product */}
          <Route path="/products/:id" element={<ProductDetail />} />

          <Route path="/components" element={<Components />} />

        </Route>

        {/* Error pages */}
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

        {/* 404 */}
        <Route
          path="*"
          element={
            <NotFound
              code="404"
              title="Page Not Found"
              description="Halaman tidak ditemukan."
            />
          }
        />

        {/* AUTH */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

      </Routes>
   </Suspense>
  );
}

export default App;