import { IData, useStore } from "@/store";
import Products from "./products";
import SideBar from "./sideBar";
// import { useEffect } from "react";

const Panel = ({ data }: Pick<IData, "data">) => {
  const { deleteProduct, deletedData } = useStore();
  const storedData = [...data];
  // useEffect(() => {
  //   setData(storedData);
  // }, [data, setData]);
  const handleDelete = (productId: string) => {
    deleteProduct(productId);
  };

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[20%] h-full bg-gray-200">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto ">
        <Products
          storedData={storedData}
          handleDelete={handleDelete}
          deletedData={deletedData}
        />
      </div>
    </div>
  );
};

export default Panel;
