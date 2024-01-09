export interface IProduct {
  title: string;
  id: number;
  category: string;
  price: number;
  description: string;
  image: string;
  rating: {
    rate: number;
    ccount: number;
  };
}
export interface IDataProps {
  apiData: IProduct[];
  storedData: IProduct[];
}

export interface IStore {
  data: IProduct[];
  // apiData: IProduct[];
  // storedData: IProduct[];
  // deletedData: IProduct[];
  // deletesStore: IProduct[];
  deletes: number[];
  setData: (newData: IProduct[]) => void;
  deleteProduct: (productId: number) => void;
}
