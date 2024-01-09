import useSWR from "swr";
import Products from "./products";
import SideBar from "./sideBar";
import axios from "axios";

const fetcher = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
const Panel = () => {
  // const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const {
    data: apiData,
    error,
    isLoading,
  } = useSWR("https://fakestoreapi.com/products", fetcher);
  if (error) return "Error";
  if (isLoading) return "Loading ...";

  // const handleDeleteBlock = () => {
  //   setIsDeleteOpen(!isDeleteOpen);
  // };
  return (
    <div className="flex w-full h-screen overflow-hidden">
      {/* {isDeleteOpen && (
        <>
          <div className="bg-transparent size-full absolute flex justify-center items-center">
            <div className="flex flex-col gap-8 text-center  t-[50%] l-[50%] z-50 m-auto justify-center p-8 w-96 h-56 bg-white rounded-2xl shadow-xl">
              <h2>Are you sure?</h2>
              <div className="flex gap-3 justify-center">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsDeleteOpen(false)}
                >
                  Cancel
                </Button>
                <Button
                  variant="destructive"
                  size="sm"
                  onClick={handleDelete}
                >
                  Delete
                </Button>
              </div>
            </div>
          </div>
          <div
            className="bg-black/50 z-40 absolute size-full flex justify-center items-center"
            onClick={() => setIsDeleteOpen(false)}
          ></div>
        </>
      )} */}
      <div className="w-[20%] h-full bg-gray-200">
        <SideBar />
      </div>
      <div className="flex-grow overflow-y-auto ">
        <Products apiData={apiData} />
      </div>
    </div>
  );
};

export default Panel;
