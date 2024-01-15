import { IDataProps } from "@/Types";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductsDataTable({
  allData,
}: Pick<IDataProps, "allData">) {
  return (
    <div className="container mx-auto bg-white">
      <DataTable
        columns={columns}
        allData={allData}
      />
    </div>
  );
}
