import { create } from "zustand";
import { IProduct, IStore } from "./types";

const useStore = create<IStore>((set) => {
  const deletedData = localStorage.getItem("deletedData");
  const listOfDeletes = deletedData ? JSON.parse(deletedData) : [];

  const addedData = localStorage.getItem("addedData");
  const listOfAdds = addedData ? (JSON.parse(addedData) as IProduct[]) : [];
  return {
    data: [],
    deletes: listOfDeletes,
    setData: (newData) =>
      set(() => {
        const checkedNewData = newData.filter((product) => !deletedData?.includes(JSON.stringify(product)));
        const checkedListOfAdds = listOfAdds.filter((product) => !deletedData?.includes(JSON.stringify(product)));
        return {
          data: [...checkedNewData, ...checkedListOfAdds],
        };
      }),
    deleteProduct: (productId: number) => {
      set((state) => {
        const updatedData = state.data.filter((product) => product.id !== productId);
        const updatedAddedData = state.adds.filter((product) => product.id !== productId);
        localStorage.setItem("addedData", JSON.stringify(updatedAddedData));

        return {
          data: updatedData,
          adds: updatedAddedData,
          // deletes: updatedDeletes,
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
        return { adds: updatedAdds, data: [...state.data, newProduct] };
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
