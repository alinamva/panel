import DeletedProducts from "./deleted-products";
import ProductsDataTable from "./components/page";
import { useStore } from "@/store";
import { Link } from "react-router-dom";

const Deletes = () => {
  const { deletes } = useStore();
  return (
    <div className="flex flex-col gap-4 ">
      <DeletedProducts />
      <div className="px-10 flex gap-3">
        <Link to="/panel">
          <h4>Panel</h4>
        </Link>
        <h4 className="text-lightGrey">Deletes</h4>
      </div>
      <div className="p-10">
        <ProductsDataTable deletes={deletes} />
      </div>
    </div>
  );
};

export default Deletes;
