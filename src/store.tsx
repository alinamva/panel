import { create } from "zustand";
import { IProduct, IStore } from "./types";

const useStore = create<IStore>((set) => {
  const deletedData = localStorage.getItem("deletedData");
  const listOfDeletes = deletedData ? JSON.parse(deletedData) : [];

  const addedData = localStorage.getItem("addedData");
  const listOfAdds = addedData ? JSON.parse(addedData) : [];
  return {
    data: [],
    deletes: listOfDeletes,
    setData: (newData) => set({ data: newData }),
    deleteProduct: (productId: number) => {
      set((state) => {
        // const deletedProduct = state.data.find((product) => product.id === productId);
        // if (!deletedProduct) {
        //   return state;
        // }

        // const updatedDeletes = [...state.deletes];
        // const updatedStore = state.data.filter((product) => product.id !== productId);

        // console.log(updatedStore);
        // if (!updatedDeletes.includes(deletedProduct)) {
        //   updatedDeletes.push(deletedProduct);
        // }
        // localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));
        // localStorage.setItem("storedData", JSON.stringify(updatedStore));
        return {
          // data: updatedStore,
          // deletes: updatedDeletes
        };
      });
    },
    undoDelete: () => {
      set((state) => {
        const lastDeletedProduct = state.deletes.pop();

        if (lastDeletedProduct) {
          const updatedDeletes = [...state.deletes];
          localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));
          return { deletes: updatedDeletes };
        }
        return state;
      });
    },
    adds: listOfAdds,
    addProducts: (newProduct: IProduct) => {
      set((state) => {
        const updatedAdds = [...state.adds];
        if (newProduct) {
          updatedAdds.push(newProduct);
        }
        localStorage.setItem("addedData", JSON.stringify(updatedAdds));
        return { adds: updatedAdds, data: updatedAdds };
      });
    },
  };
});

interface IProductStore {
  products: IProduct[];
  setProducts: (newProducts: IProduct[]) => void;
}

const useProductStore = create<IProductStore>((set) => ({
  products: [],
  setProducts: (newProducts) => set({ products: newProducts }),
}));
export { useStore, useProductStore };
