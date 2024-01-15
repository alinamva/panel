import useSWR from "swr";
import Products from "./products";
import SideBar from "./sideBar";
import { Toaster } from "@/components/ui/toaster";
import { getData } from "@/api";
import { IProduct } from "@/Types";

const Panel = () => {
  const { data, isLoading, error } = useSWR<IProduct[]>("products", getData);

  if (isLoading) return "Loading...";
  if (error) return "Error";

  return (
    <div className="flex w-full h-screen overflow-hidden">
      <div className="w-[20%] h-full bg-gray-200">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto ">
        <Products productData={data || []} />
        <Toaster />
      </div>
    </div>
  );
};

export default Panel;
