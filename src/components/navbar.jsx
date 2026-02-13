import { Home, ShoppingCart, User } from "lucide-react";
import { NavLink } from "react-router-dom";

export default function BottomNavbar() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-md md:hidden z-50">
      <div className="flex justify-around items-center h-16">
        <NavItem to="/" icon={<Home size={22} />} label="Home" />
        <NavItem to="/cart" icon={<ShoppingCart size={22} />} label="Cart" />
        <NavItem to="/profile" icon={<User size={22} />} label="Profile" />
      </div>
    </nav>
  );
}

function NavItem({ to, icon, label }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex flex-col items-center text-xs ${
          isActive ? "text-green-700" : "text-gray-500"
        }`
      }
    >
      {icon}
      <span>{label}</span>
    </NavLink>
  );
}
