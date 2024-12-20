import Logo from "../assets/Vector.png";
import Dashboard from "../assets/dashboard.png";
import Students from "../assets/student.png";
import Report from "../assets/reports.png";
import Settings from "../assets/settings.png";
import Chapter from "../assets/chapter.png";
import Help from "../assets/help.png";

import { Link, Outlet } from "react-router-dom";
import Home from "./Home";
const Sidebar = () => {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 flex flex-col">
        <div className="p-4 text-2xl font-bold">
          <img src={Logo} alt="logo" />
        </div>
        <nav className="flex-1 p-4 space-y-2">
          <Link
            to="/"
            className="flex items-center h-12 w-56 px-4 rounded hover:bg-gray-300"
          >
            <img src={Dashboard} alt="dashboard" className="h-6 w-6 mr-4" />
            Dashboard
          </Link>
          <Link
            to="/students"
            className="flex items-center h-12 w-56 px-4 rounded hover:bg-gray-300"
          >
            <img src={Students} alt="students" className="h-6 w-6 mr-4" />
            Students
          </Link>
          <Link
            to="/chapter"
            className="flex items-center h-12 w-56 px-4 rounded hover:bg-gray-300"
          >
            <img src={Chapter} alt="chapter" className="h-6 w-6 mr-4" />
            Chapter
          </Link>
          <Link
            to="/help"
            className="flex items-center h-12 w-56 px-4 rounded hover:bg-gray-300"
          >
            <img src={Help} alt="help" className="h-6 w-6 mr-4" />
            Help
          </Link>
          <Link
            to="/reports"
            className="flex items-center h-12 w-56 px-4 rounded hover:bg-gray-300"
          >
            <img src={Report} alt="reports" className="h-6 w-6 mr-4" />
            Reports
          </Link>
          <Link
            to="/settings"
            className="flex items-center h-12 w-56 px-4 rounded hover:bg-gray-300"
          >
            <img src={Settings} alt="settings" className="h-6 w-6 mr-4" />
            Settings
          </Link>
        </nav>
      </div>
      <Home></Home>
    </div>
  );
};

export default Sidebar;
