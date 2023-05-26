import { React, useEffect, useState } from "react";
import CustomInput from "../components/CustomInput";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import "react-quill/dist/quill.snow.css";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { getBrands } from "../features/brand/brandSlice";
import { getCategories } from "../features/pcategory/pcategorySlice";
import { getAllCoupon } from "../features/coupon/couponSlice";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { createProducts, resetState } from "../features/product/productSlice";
let schema = yup.object().shape({
  name: yup.string().required("Title is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  importPrice: yup.number().required("Import Price is Required"),
  inStock: yup.number().required("In-Stock is Required"),
  discount: yup.array(),
  category: yup.array().required("Category is required"),
  brand: yup.string().required("Brand is Required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [coupon, setCoupon] = useState([]);
  const [category, Setcategory] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getAllCoupon());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const couponState = useSelector((state) => state.coupon.coupons);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;
  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const couponopt = [];
  couponState?.data?.forEach((i) => {
    couponopt.push({
      label: i.code,
      value: i._id,
    });
  });
  const cateopt = [];
  catState?.data?.forEach((i) => {
    cateopt.push({
      label: i.name,
      value: i._id,
    });
  });
  const img = [];
  imgState?.data?.forEach((i) => {
    img.push({
      public_id: i.public_id,
      secure_url: i.secure_url,
    });
  });

  useEffect(() => {
    formik.values.images = img;
    formik.values.discount = coupon ? coupon : " ";
    formik.values.category = category ? category : " ";
  }, [img, coupon, category]);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      importPrice: "",
      inStock: "",
      discount: "",
      category: "",
      brand: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("----------", values);
      dispatch(createProducts(values));

      setCoupon(null);
      Setcategory(null);
      formik.resetForm();
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });
  const handleCoupon = (e) => {
    setCoupon(e);
  };
  const handleCategory = (e) => {
    Setcategory(e);
  };
  return (
    <div>
      <h3 className="mb-4 title">Add Product</h3>
      <div>
        <form
          onSubmit={formik.handleSubmit}
          className="d-flex gap-3 flex-column"
        >
          <CustomInput
            type="text"
            label="Enter Product Name"
            name="name"
            onChng={formik.handleChange("name")}
            onBlr={formik.handleBlur("name")}
            val={formik.values.name}
          />
          <div className="error">
            {formik.touched.name && formik.errors.name}
          </div>
          <CustomInput
            type="text"
            label="Enter Product Description"
            name="description"
            onChng={formik.handleChange("description")}
            onBlr={formik.handleBlur("description")}
            val={formik.values.description}
          />
          <div className="error">
            {formik.touched.description && formik.errors.description}
          </div>
          <CustomInput
            type="number"
            label="Enter Product Price"
            name="price"
            onChng={formik.handleChange("price")}
            onBlr={formik.handleBlur("price")}
            val={formik.values.price}
          />
          <div className="error">
            {formik.touched.price && formik.errors.price}
          </div>

          <CustomInput
            type="number"
            label="Enter Product Import-Price"
            name="importPrice"
            onChng={formik.handleChange("importPrice")}
            onBlr={formik.handleBlur("importPrice")}
            val={formik.values.importPrice}
          />
          <div className="error">
            {formik.touched.importPrice && formik.errors.importPrice}
          </div>

          <CustomInput
            type="number"
            label="Enter Product In-Stock"
            name="inStock"
            onChng={formik.handleChange("inStock")}
            onBlr={formik.handleBlur("inStock")}
            val={formik.values.inStock}
          />
          <div className="error">
            {formik.touched.inStock && formik.errors.inStock}
          </div>

          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select Discount"
            defaultValue={coupon}
            onChange={(i) => handleCoupon(i)}
            options={couponopt}
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
          </div>

          <select
            name="brand"
            onChange={formik.handleChange("brand")}
            onBlur={formik.handleBlur("brand")}
            value={formik.values.brand}
            className="form-control py-3 mb-3"
            id=""
          >
            <option value="">Select Brand</option>
            {brandState?.data?.map((i, j) => {
              return (
                <option key={j} value={i._id}>
                  {i.name}
                </option>
              );
            })}
          </select>
          <div className="error">
            {formik.touched.brand && formik.errors.brand}
          </div>

          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select Category"
            defaultValue={category}
            onChange={(i) => handleCategory(i)}
            options={cateopt}
          />
          <div className="error">
            {formik.touched.category && formik.errors.category}
          </div>

          <div className="bg-white border-1 p-5 text-center">
            <Dropzone
              onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
            >
              {({ getRootProps, getInputProps }) => (
                <section>
                  <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p>
                      Drag 'n' drop some files here, or click to select files
                    </p>
                  </div>
                </section>
              )}
            </Dropzone>
          </div>
          <div className="showimages d-flex flex-wrap gap-3">
            {imgState?.data?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.secure_url} alt="" width={200} height={200} />
                </div>
              );
            })}
          </div>
          <button
            className="btn btn-success border-0 rounded-3 my-5"
            type="submit"
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Addproduct;
