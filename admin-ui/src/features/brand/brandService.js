import axios from "axios";
import { config } from "../../utils/axiosconfig";
import { base_url } from "../../utils/baseUrl";
const getBrands = async () => {
  const response = await axios.get(`${base_url}/brand/`);

  return response.data;
};

const createBrand = async (brand) => {
  const response = await axios.post(`${base_url}/brand/`, brand, config);

  return response.data;
};
const updateBrand = async (brand) => {
  const response = await axios.patch(
    `${base_url}/brand/${brand.id}`,
    { name: brand.brandData.name, description: brand.brandData.description },
    config
  );

  return response.data;
};
const getBrand = async (id) => {
  const response = await axios.get(`${base_url}/brand/${id}`, config);

  return response.data;
};

const deleteBrand = async (id) => {
  const response = await axios.delete(`${base_url}/brand/${id}`, config);

  return response.data;
};

const brandService = {
  getBrands,
  createBrand,
  getBrand,
  updateBrand,
  deleteBrand,
};

export default brandService;
