import { FaHome, FaShoppingCart, FaUsers, FaPlus } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Sidebar() {

    const menuClass = ({ isActive }) =>
        `flex items-center gap-3 rounded-xl px-4 py-3 transition-all duration-300
        ${isActive
            ? "bg-green-200 text-green-700 font-semibold"
            : "text-gray-600 hover:bg-green-100 hover:text-green-600"
        }`;

    return (
        <div className="w-64 bg-white p-6 flex flex-col justify-between min-h-screen border-r">

            <div>
                <h1 className="text-4xl font-bold mb-1">
                    Sedap<span className="text-green-500">.</span>
                </h1>

                <p className="text-gray-400 text-sm mb-8">
                    Modern Admin Dashboard
                </p>

                <ul className="space-y-4">

                    {/* MENU UTAMA */}
                    <NavLink to="/" className={menuClass}>
                        <FaHome />
                        <span>Dashboard</span>
                    </NavLink>

                    <NavLink to="/orders" className={menuClass}>
                        <FaShoppingCart />
                        <span>Orders</span>
                    </NavLink>

                    <NavLink to="/customers" className={menuClass}>
                        <FaUsers />
                        <span>Customers</span>
                    </NavLink>

                </ul>

                {/* 🔥 ERROR MENU */}
                <p className="text-gray-400 text-xs mt-6 mb-2">Errors</p>

                <ul className="space-y-2">

                    <NavLink to="/error-400" className={menuClass}>
                        <span>⚠️</span>
                        <span>Error 400</span>
                    </NavLink>

                    <NavLink to="/error-401" className={menuClass}>
                        <span>🔐</span>
                        <span>Error 401</span>
                    </NavLink>

                    <NavLink to="/error-403" className={menuClass}>
                        <span>⛔</span>
                        <span>Error 403</span>
                    </NavLink>

                </ul>
            </div>

            <div>
                <div className="bg-green-500 rounded-xl p-4 mt-3 text-white">
                    <p className="text-sm mb-3 leading-6">
                        Please organize your menus through button below!
                    </p>

                    <div className="flex items-center justify-between">
                        <button className="bg-white text-green-600 px-4 py-2 rounded-md flex items-center gap-2 font-semibold">
                            <FaPlus />
                            Add Menus
                        </button>

                        <img
                            src="/img/puu.png"
                            className="w-10 h-10 rounded-full border-2 border-white"
                            alt="icon"
                        />
                    </div>
                </div>

                <p className="text-xs text-gray-400 mt-6">
                    Sedap Restaurant Admin Dashboard
                </p>
                <p className="text-xs text-gray-400">
                    © 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}