import BottomNavbar from "@/components/navbar";
import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <main className="min-h-screen w-screen flex flex-col items-center justify-center bg-gray-800">
      <div className="w-full max-w-[420px] sm:max-w-[420px] md:max-w-[820px] min-h-screen flex  items-start py-5 justify-center bg-[#FAEED1]">
        <Outlet />
      </div>
      <BottomNavbar />
    </main>
  );
}

export default MainLayout;
