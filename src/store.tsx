import { create } from "zustand";
export interface IProduct {
  title: string;
  id: string;
  category: string;
  price: number;
}
export interface IData {
  data: IProduct[];
  storedData: IProduct[];
  deletedData: IProduct[];
  handleDelete: (productId: string) => void;
}

export interface IStore {
  data: IProduct[];
  deletedData: IProduct[];
  setData: (data: IProduct[]) => void;
  deleteProduct: (productId: string) => void;
}
const useStore = create<IStore>((set) => {
  const storedData = localStorage.getItem("data");
  const initialData = storedData ? JSON.parse(storedData) : [];
  const deletedData = localStorage.getItem("deletedData")
    ? JSON.parse(localStorage.getItem("deletedData")!)
    : [];
  return {
    data: initialData,
    deletedData: deletedData,
    setData: (newData) => {
      set((state) => {
        localStorage.setItem("data", JSON.stringify(newData));
        return { ...state, data: newData };
      });
    },
    deleteProduct: (productId: string) => {
      set((state) => {
        const updatedData = state.data.filter(
          (product) => product.id !== productId
        );
        localStorage.setItem("data", JSON.stringify(updatedData));
        return { data: updatedData };
        // const deletedProduct = state.data.find(
        //   (product) => product.id === productId
        // );
        // // if (deletedProduct) {
        // set({
        //   deletedData: [...state.deletedData, deletedProduct],
        // });
        // localStorage.setItem(
        //   "deletedData",
        //   JSON.stringify([...state.deletedData, deletedProduct])
        // );
        // // }
        // return { ...state };
      });
    },
  };
});
export { useStore };
