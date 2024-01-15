import { getData } from "@/api";
import { useProductStore } from "@/store";
import { IProduct } from "@/Types";
import { useEffect } from "react";
import useSWR from "swr";

const Cards = () => {
  const { data, isLoading, error } = useSWR<IProduct[]>("products", getData);
  const { products, setProducts } = useProductStore();
  useEffect(() => {
    setProducts(data || []);
  }, [data, setProducts]);

  if (isLoading) return "Loading...";
  if (error) return "Error";
  return (
    <div className="grid grid-cols-4 gap-4 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-full h-64 p-4 border rounded"
        >
          <img
            src={product.image}
            alt={product.title}
            className="object-cover p-4 mx-auto"
          />

          <h1>{product.title}</h1>
        </div>
      ))}
    </div>
  );
};

export default Cards;
