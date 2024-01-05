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
  handleDelete: (productId: string) => void;
}

export interface IStore {
  data: IProduct[];
  setData: (data: IProduct[]) => void;
  setStoredData: (storedData: IData) => void;
  deleteProduct: (productId: string) => void;
}
const useStore = create<IStore>((set) => {
  const storedData = localStorage.getItem("data");
  const initialData = storedData ? JSON.parse(storedData) : [];

  const updateLocalStorage = (newData: IProduct[]) => {
    localStorage.setItem("data", JSON.stringify(newData));
  };
  return {
    data: initialData,
    setData: (newData) => {
      set({ data: newData });
      localStorage.setItem("data", JSON.stringify(newData));
    },
    setStoredData: (storedData: IData) => set(storedData),
    deleteProduct: (productId: string) => {
      set((state) => {
        const updatedData = state.data.filter(
          (product) => product.id !== productId
        );
        updateLocalStorage(updatedData);
        return { data: updatedData };
      });
    },
  };
});
export { useStore };
