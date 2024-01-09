import { create } from "zustand";
import { IStore } from "./Types";

const useStore = create<IStore>((set) => {
  const deletedData = localStorage.getItem("deletedData");
  const listOfDeletes = deletedData ? JSON.parse(deletedData) : [];

  return {
    data: [],
    deletes: listOfDeletes,
    setData: (newData) => set({ data: newData }),
    deleteProduct: (productId: number) => {
      set((state) => {
        const deletedProduct = state.data.find(
          (product) => product.id === productId
        );

        const updatedDeletes = [...state.deletes];

        const updatedStore = state.data.filter(
          (product) => product.id !== productId
        );
        if (!updatedDeletes.includes(deletedProduct)) {
          updatedDeletes.push(deletedProduct);
        }
        localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));
        localStorage.setItem("storedData", JSON.stringify(updatedStore));
        return { data: updatedStore, deletes: updatedDeletes };
      });
    },
  };
});
export { useStore };
