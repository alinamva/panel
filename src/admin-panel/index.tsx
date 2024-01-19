import useSWR from "swr";
import Products from "./products";
import { getData } from "@/api";
import { IProduct } from "@/types";
import { Toaster } from "@/components/ui/toaster";

const Panel = () => {
  const { data, isLoading, error } = useSWR<IProduct[]>("products", getData);

  if (isLoading) return "Loading...";
  if (error) return "Error";

  return (
    <>
      <Products productData={data || []} />
      <Toaster />
    </>
  );
};

export default Panel;
