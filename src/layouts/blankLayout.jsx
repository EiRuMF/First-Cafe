import { Outlet } from "react-router-dom";


function BlankLayout() {
  return (
    <main className="min-h-screen w-screen flex items-center justify-center bg-gray-800">
      <div className="w-full max-w-[420px] sm:max-w-[420px] md:max-w-[820px] min-h-screen flex items-center justify-center bg-gray-100">
        <Outlet />
      </div>
    </main>
  );
}

export default BlankLayout;
