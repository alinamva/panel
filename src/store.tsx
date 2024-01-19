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
        const checkedNewData = newData.filter(
          (product) => !deletedData?.includes(JSON.stringify(product))
        );
        const checkedListOfAdds = listOfAdds.filter(
          (product) => !deletedData?.includes(JSON.stringify(product))
        );
        return {
          data: [...checkedNewData.reverse(), ...checkedListOfAdds],
          addedData,
          deletedData,
        };
      }),
    deleteProduct: (productId: number) => {
      set((state) => {
        const updatedData = state.data.filter(
          (product) => product.id !== productId
        );
        const updatedAddedData = state.adds.filter(
          (product) => product.id !== productId
        );
        const updatedDeletes = [...state.deletes];
        const deletedProduct = state.data.find(
          (product) => product.id === productId
        );
        if (deletedProduct) {
          updatedDeletes.unshift(deletedProduct);
        }
        localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));

        localStorage.setItem("addedData", JSON.stringify(updatedAddedData));

        return {
          data: updatedData,
          adds: updatedAddedData,
          deletes: updatedDeletes,
        };
      });
    },
    undoDelete: (productId: number) => {
      set((state) => {
        console.log("first");

        const productToRestore = state.deletes.find(
          (product) => product.id === productId
        );
        const updatedDeletes = state.deletes.filter(
          (product) => product.id !== productId
        );
        const updatedStore = state.data.filter(
          (product) => product.id !== productId
        );
        if (productToRestore && productId > 20) {
          const updatedAdds = [...state.adds];
          updatedAdds.push(productToRestore);

          localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));
          localStorage.setItem("addedData", JSON.stringify(updatedAdds));
          localStorage.setItem("storedData", JSON.stringify(updatedStore));

          return {
            adds: updatedAdds,
            deletes: updatedDeletes,
            data: [...updatedStore, ...updatedAdds],
          };
        }
        localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));
        localStorage.setItem("storedData", JSON.stringify(updatedStore));
        return { deletes: updatedDeletes, data: updatedStore, addedData };
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
        return {
          adds: updatedAdds,
          data: [...state.data, newProduct],
        };
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
