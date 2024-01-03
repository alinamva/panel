import axios from "axios";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import useSWR from "swr";

export default function ProductsDataTable() {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error, isLoading } = useSWR(
    "https://fakestoreapi.com/products?sort=desc",
    fetcher
  );
  if (error) console.log("error");
  if (isLoading) console.log("Loading ...");
  console.log(data);
  return (
    <div className="container mx-auto py-10 bg-white">
      <DataTable
        columns={columns}
        data={data}
      />
    </div>
  );
}
