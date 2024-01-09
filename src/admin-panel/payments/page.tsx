import { IDataProps } from "@/Types";
import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductsDataTable({
  storedData,
}: Pick<IDataProps, "storedData">) {
  return (
    <div className="container mx-auto  bg-white">
      <DataTable
        columns={columns}
        storedData={storedData}
      />
    </div>
  );
}
