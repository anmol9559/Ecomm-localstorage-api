import { axiosInstance } from "../config/axiosInstance";

export let getProductsDataApi = async () => {
  const res = await axiosInstance.get("/products");
  return res.data.products;
};