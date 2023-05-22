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
import { getColors } from "../features/color/colorSlice";
import { Select } from "antd";
import Dropzone from "react-dropzone";
import { delImg, uploadImg } from "../features/upload/uploadSlice";
import { createProducts, resetState } from "../features/product/productSlice";
import { getAllCoupon } from "../features/coupon/couponSlice";
let schema = yup.object().shape({
  name: yup.string().required("Name is Required"),
  description: yup.string().required("Description is Required"),
  price: yup.number().required("Price is Required"),
  inStock: yup.number().required("inStock of product is Required"),
  discount: yup.array(),
  brand: yup.string().required("Brand is Required"),
  category: yup
    .array()
    .min(1, "Pick at least one category")
    .required("Category is Required"),
  importPrice: yup.number().required("importPrice is Required"),
});

const Addproduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [color, setColor] = useState([]);
  const [images, setImages] = useState([]);
  const [category, setCategory] = useState([]);
  const [discount, setDiscount] = useState([]);

  console.log(color);
  useEffect(() => {
    dispatch(getBrands());
    dispatch(getCategories());
    dispatch(getColors());
    dispatch(getAllCoupon());
  }, []);

  const brandState = useSelector((state) => state.brand.brands);
  const catState = useSelector((state) => state.pCategory.pCategories);
  const couponState = useSelector((state) => state.coupon.coupons);
  const colorState = useSelector((state) => state.color.colors);
  const imgState = useSelector((state) => state.upload.images);
  const newProduct = useSelector((state) => state.product);
  const { isSuccess, isError, isLoading, createdProduct } = newProduct;
  useEffect(() => {
    if (isSuccess && createdProduct) {
      toast.success("Product Added Successfullly!");
    }
    if (isError) {
      toast.error("Something Went Wrong!");
    }
  }, [isSuccess, isError, isLoading]);
  const coloropt = [];
  colorState?.data?.forEach((i) => {
    coloropt.push({
      label: i.title,
      value: i._id,
    });
  });
  const img = [];
  imgState?.data?.forEach((i) => {
    img.push({
      public_id: i.public_id,
      url: i.url,
    });
  });
  const cateopt = [];
  catState?.data?.forEach((i) => {
    cateopt.push({
      label: i.name,
      value: i._id,
    });
  });
  const discountopt = [];
  couponState?.data?.forEach((i) => {
    discountopt.push({
      label: i.code,
      value: i._id,
    });
  });
  useEffect(() => {
    formik.values.color = color ? color : " ";
    formik.values.images = img;
    formik.values.category = category ? category : " ";
    formik.values.discount = discount ? discount : " ";
  }, [color, img, category, discount]);
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      inStock: "",
      discount: "",
      brand: "",
      category: "",
      importPrice: "",
      images: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      console.log("-----------------------------------", values);
      // dispatch(createProducts(values));
      formik.resetForm();
      setColor(null);
      setCategory(null);
      setDiscount(null);
      setTimeout(() => {
        dispatch(resetState());
      }, 3000);
    },
  });
  const handleColors = (e) => {
    setColor(e);
    console.log(color);
  };
  const handleCategory = (e) => {
    setCategory(e);
    console.log(category);
  };
  const handleDiscount = (e) => {
    setDiscount(e);
    console.log(discount);
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
          <div className="">
            <ReactQuill
              theme="snow"
              name="description"
              onChange={formik.handleChange("description")}
              value={formik.values.description}
            />
          </div>
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
            label="Enter Product Import's Price"
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
            label="Enter Product InStock"
            name="inStock"
            onChng={formik.handleChange("inStock")}
            onBlr={formik.handleBlur("inStock")}
            val={formik.values.inStock}
          />
          <div className="error">
            {formik.touched.inStock && formik.errors.inStock}
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
            {brandState.data?.map((i, j) => {
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
            placeholder="Select Discount"
            defaultValue={discount}
            onChange={(i) => handleDiscount(i)}
            options={discountopt}
          />
          <div className="error">
            {formik.touched.discount && formik.errors.discount}
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
          <Select
            mode="multiple"
            allowClear
            className="w-100"
            placeholder="Select colors"
            defaultValue={color}
            onChange={(i) => handleColors(i)}
            options={coloropt}
          />
          <div className="error">
            {formik.touched.color && formik.errors.color}
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
            {imgState?.map((i, j) => {
              return (
                <div className=" position-relative" key={j}>
                  <button
                    type="button"
                    onClick={() => dispatch(delImg(i.public_id))}
                    className="btn-close position-absolute"
                    style={{ top: "10px", right: "10px" }}
                  ></button>
                  <img src={i.url} alt="" width={200} height={200} />
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
