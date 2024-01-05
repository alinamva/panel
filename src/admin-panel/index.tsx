import { IData, useStore } from "@/store";
import Products from "./products";
import SideBar from "./sideBar";
import { useEffect } from "react";

const Panel = ({ data }: Pick<IData, "data">) => {
  const { setData, deleteProduct } = useStore();
  const storedData = [...data, ...data];
  useEffect(() => {
    setData(storedData);
    setData(storedData);
  }, [data, setData]);
  const handleDelete = (productId: string) => {
    deleteProduct(productId);
    console.log(productId);
  };
  // console.log(storedData);
  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[20%] h-full bg-gray-200">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto ">
        <Products
          storedData={storedData}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};

export default Panel;
