// import { IData } from "@/store";
import { IData } from "@/store";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductsDataTable({
  storedData,
  handleDelete,
}: Pick<IData, "storedData" | "handleDelete">) {
  return (
    <div className="container mx-auto  bg-white">
      <DataTable
        columns={columns}
        data={storedData}
        handleDelete={(productId: string) => handleDelete(productId)}
      />
    </div>
  );
}
