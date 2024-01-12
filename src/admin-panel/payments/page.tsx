import { IDataProps } from "@/types";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { useStore } from "@/store";

export default function ProductsDataTable({ storedData }: Pick<IDataProps, "storedData">) {
  const { adds } = useStore();

  return (
    <div className="container mx-auto bg-white">
      <DataTable columns={columns} storedData={[...adds, ...storedData]} />
    </div>
  );
}
