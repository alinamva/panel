import Products from "./products";
import SideBar from "./sideBar";

const Panel = () => {
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-80 h-full bg-gray-200">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto ">
        <Products />
      </div>
    </div>
  );
};

export default Panel;
