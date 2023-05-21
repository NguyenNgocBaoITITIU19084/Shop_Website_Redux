import axios from "axios";
import { base_url } from "../../utils/axiosConfig";

const getProducts = async () => {
  const products = await axios.get(`${base_url}/product/`);
  if (products.data) {
    return products.data;
  }
};

export const productService = {
  getProducts,
};
