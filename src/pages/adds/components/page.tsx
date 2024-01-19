import { IDataProps } from "@/types";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductsDataTable({ adds }: Pick<IDataProps, "adds">) {
  return (
    <div className="container mx-auto bg-white">
      <DataTable
        columns={columns}
        adds={adds}
      />
    </div>
  );
}
