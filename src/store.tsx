import { create } from "zustand";
import { IProduct, IStore } from "./Types";

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
        const deletedProduct = state.data.find(
          (product) => product.id === productId
        );
        if (!deletedProduct) {
          return state;
        }

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
    undoDelete: () => {
      set((state) => {
        const lastDeletedProduct = state.deletes.pop();

        if (lastDeletedProduct) {
          const updatedDeletes = [...state.deletes];
          // const updatedStore = state.data.filter(
          //   (product) => product.id !== productId
          // );
          localStorage.setItem("deletedData", JSON.stringify(updatedDeletes));
          // localStorage.setItem("storedData", JSON.stringify(updatedDeletes));
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
        // const addedProduct = state.data.unshift(newProduct);
        // const updatedStore = [...state.data];
        // console.log(updatedStore.unshift(addedProduct));
        return { adds: updatedAdds };
        // console.log(newProduct);
      });
    },
  };
});
export { useStore };
