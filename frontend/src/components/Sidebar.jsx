import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, Users, CalendarCheck } from "lucide-react";

export default function Sidebar() {
  const { pathname } = useLocation();

  const navItems = [
    { name: "Dashboard", path: "/", icon: LayoutDashboard },
    { name: "Employees", path: "/employees", icon: Users },
    { name: "Attendance", path: "/attendance", icon: CalendarCheck },
  ];

  return (
    <aside className="w-64 bg-white/80 backdrop-blur-xl border-r border-gray-200 min-h-screen shadow-sm flex flex-col">

      {/* Logo Section */}
      <div className="px-6 py-7 border-b border-gray-100">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">
          HRMS Lite
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Admin Dashboard
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-3">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <Link
              key={item.name}
              to={item.path}
              className={`group flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                isActive
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:bg-blue-50 hover:text-blue-600"
              }`}
            >
              <Icon
                size={18}
                className={`transition-all duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-gray-400 group-hover:text-blue-600"
                }`}
              />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>

      {/* Footer Section */}
      <div className="px-6 py-4 border-t border-gray-100 text-xs text-gray-400">
        © {new Date().getFullYear()} HRMS Lite
      </div>

    </aside>
  );
}