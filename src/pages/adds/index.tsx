import DeletedProducts from "./added-products";
import ProductsDataTable from "./components/page";
import { useStore } from "@/store";
import { Link } from "react-router-dom";

const Adds = () => {
  const { adds } = useStore();
  return (
    <div className="flex flex-col gap-4 ">
      <DeletedProducts />
      <div className="px-10 flex gap-3">
        <Link to="/panel">
          <h4>Panel</h4>
        </Link>
        <h4 className="text-lightGrey">Adds</h4>
      </div>
      <div className="p-10">
        <ProductsDataTable adds={adds} />
      </div>
    </div>
  );
};

export default Adds;
