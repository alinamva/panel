export interface IProduct {
  title: string;
  id: number;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}
export interface IDataProps {
  apiData: IProduct[];
  storedData: IProduct[];
  setIsAddOpen: (isAddOpen: boolean) => void;
}

export interface IStore {
  data: IProduct[];
  deletes: IProduct[];
  adds: IProduct[];
  setData: (newData: IProduct[]) => void;
  deleteProduct: (productId: number) => void;
  undoDelete: () => void;
  addProducts: (newProduct: IProduct) => void;
}
