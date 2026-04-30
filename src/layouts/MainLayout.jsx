import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <div className="font-poppins">
      <div className="flex min-h-screen bg-gray-100">

        <Sidebar />

        <div className="flex-1 p-6">
          <Header />
          <Outlet />
        </div>

      </div>
    </div>
  );
}