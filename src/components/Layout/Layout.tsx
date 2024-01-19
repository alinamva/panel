import { Outlet } from "react-router-dom";
import SideBar from "../SideBar/SideBar";

const Layout = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[20%] h-full bg-gray-200">
        <SideBar />
      </div>

      <div className="flex-grow overflow-y-auto bg-lightGrey">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
