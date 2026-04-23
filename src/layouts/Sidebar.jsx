import { FaHome, FaShoppingCart, FaUsers, FaExclamationTriangle } from "react-icons/fa";
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

                {/* LOGO */}
                <h1 className="text-3xl font-bold mb-1">
                    Sedap<span className="text-green-500">.</span>
                </h1>

                <p className="text-gray-400 text-sm mb-8">
                    Modern Admin Dashboard
                </p>

                {/* MENU */}
                <ul className="space-y-3">

                    <NavLink to="/" className={menuClass}>
                        <FaHome /> Dashboard
                    </NavLink>

                    <NavLink to="/orders" className={menuClass}>
                        <FaShoppingCart /> Orders
                    </NavLink>

                    <NavLink to="/customers" className={menuClass}>
                        <FaUsers /> Customers
                    </NavLink>

                </ul>

                {/* ERROR MENU */}
                <p className="text-gray-400 text-xs mt-6 mb-2">
                    Error Pages
                </p>

                <ul className="space-y-2">

                    <NavLink to="/error-400" className={menuClass}>
                        <FaExclamationTriangle className="text-yellow-500" />
                        Error 400
                    </NavLink>

                    <NavLink to="/error-401" className={menuClass}>
                        <FaExclamationTriangle className="text-orange-500" />
                        Error 401
                    </NavLink>

                    <NavLink to="/error-403" className={menuClass}>
                        <FaExclamationTriangle className="text-red-500" />
                        Error 403
                    </NavLink>

                </ul>

            </div>

            <div className="text-xs text-gray-400">
                © 2025 Sedap Dashboard
            </div>

        </div>
    );
}