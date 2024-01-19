import { IDataProps } from "@/types";

import { columns } from "./columns";
import { DataTable } from "./data-table";

export default function ProductsDataTable({
  deletes,
}: Pick<IDataProps, "deletes">) {
  return (
    <div className="container mx-auto bg-white">
      <DataTable
        columns={columns}
        deletes={deletes}
      />
    </div>
  );
}
