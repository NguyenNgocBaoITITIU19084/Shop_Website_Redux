import React, { useEffect } from "react";
import { Table } from "antd";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../features/product/productSlice";
import { Link } from "react-router-dom";
const columns = [
  {
    title: "SNo",
    dataIndex: "key",
  },
  {
    title: "Title",
    dataIndex: "title",
    sorter: (a, b) => a.title.length - b.title.length,
  },
  {
    title: "Brand",
    dataIndex: "brand",
    sorter: (a, b) => a.brand.length - b.brand.length,
  },
  {
    title: "Category",
    dataIndex: "category",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "inStock",
    dataIndex: "inStock",
    sorter: (a, b) => a.inStock - b.inStock,
  },
  {
    title: "importPrice",
    dataIndex: "importPrice",
    sorter: (a, b) => a.importPrice - b.importPrice,
  },
  {
    title: "Price",
    dataIndex: "price",
    sorter: (a, b) => a.price - b.price,
  },
  {
    title: "isActive",
    dataIndex: "isActive",
  },
  {
    title: "Action",
    dataIndex: "action",
  },
];

const Productlist = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, []);
  const productState = useSelector((state) => state.product.products);
  const data1 = [];
  let categorylist = [];
  for (let i = 0; i < productState?.data?.length; i++) {
    for (let j = 0; j < productState.data[i].category.length; j++) {
      categorylist.push(Object.values(productState.data[i].category[j]));
    }
    data1.push({
      key: i + 1,
      title: productState.data[i].name,
      brand: productState.data[i].brand.name,
      category: categorylist.join(", "),
      description: productState.data[i].description,
      inStock: productState.data[i].inStock,
      importPrice: `${productState.data[i].importPrice}`,
      price: `${productState.data[i].price}`,
      isActive: productState.data[i].isActive.toString(),
      action: (
        <>
          <Link to="/" className=" fs-3 text-danger">
            <BiEdit />
          </Link>
          <Link className="ms-3 fs-3 text-danger" to="/">
            <AiFillDelete />
          </Link>
        </>
      ),
    });
    categorylist = [];
  }
  console.log(categorylist);
  return (
    <div>
      <h3 className="mb-4 title">{productState?.data?.length} Products</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Productlist;
