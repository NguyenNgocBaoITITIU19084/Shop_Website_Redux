import React, { useEffect, useState } from "react";
import BreadCrum from "../components/BreadCrum";
import Meta from "../components/Meta";
import ReactStars from "react-rating-stars-component";
import ProductCart from "../components/ProductCart";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../features/product/productSlice";
const OurStore = () => {
  const [grid, setGrid] = useState(4);
  const productState = useSelector((state) => state.product.product);

  const dispatch = useDispatch();
  useEffect(() => {
    getProducts();
  }, []);
  const getProducts = () => {
    dispatch(getAllProducts());
  };
  return (
    <div>
      <Meta title={"Our Store"} />
      <BreadCrum title="Our Store" />
      <div className="store-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Categories</h3>
                <div>
                  <ul className="ps-0">
                    <li>Watch</li>
                    <li>TV</li>
                    <li>Camera</li>
                    <li>Laptop</li>
                  </ul>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Filter By</h3>
                <div>
                  <h5 className="sub-title">Availablity</h5>
                  <div>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        In Stock {1}
                      </label>
                    </div>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id=""
                      />
                      <label className="form-check-label" htmlFor="">
                        Out of Stock {0}
                      </label>
                    </div>
                  </div>
                  <h5 className="sub-title">Price</h5>
                  <div className="d-flex align-items-center gap-10">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput"
                        placeholder="from"
                      />
                      <label htmlFor="floatingInput">from</label>
                    </div>
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="floatingInput1"
                        placeholder="to"
                      />
                      <label htmlFor="floatingInput">to</label>
                    </div>
                  </div>
                  <h5 className="sub-title">Colors</h5>
                  <div>
                    <div className="d-flex flex-wrap">
                      <ul className="colors ps-0">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </div>
                  <h5 className="sub-title">Size</h5>
                  <div>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-1"
                      />
                      <label className="form-check-label" htmlFor="color-1">
                        S {1}
                      </label>
                    </div>
                    <div className="form-check ">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="color-2"
                      />
                      <label className="form-check-label" htmlFor="color-2">
                        S {1}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Product Tags</h3>
                <div>
                  <div className="product-tags d-flex flex-wrap align-items-center gap-10">
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Headphone
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Macbook
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Clothing
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Hoodies
                    </span>
                    <span className="badge bg-light text-secondary rounded-3 py-2 px-3">
                      Pants
                    </span>
                  </div>
                </div>
              </div>
              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Product</h3>
                <div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="randomProd"
                      ></img>
                    </div>
                    <div className="w-50">
                      <h5>Kids apple watch bulk 10</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                  <div className="random-products mb-3 d-flex">
                    <div className="w-50">
                      <img
                        src="images/watch.jpg"
                        className="img-fluid"
                        alt="randomProd"
                      ></img>
                    </div>
                    <div className="w-50">
                      <h5>Kids apple watch bulk 10</h5>
                      <ReactStars
                        count={5}
                        size={24}
                        edit={false}
                        value={3}
                        activeColor="#ffd700"
                      />
                      <b>$ 300</b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-9">
              <div className="filter-sort-grid mb-4">
                <div className="d-flex justify-content-between align-items-center">
                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0 d-block" style={{ width: "100px" }}>
                      Sort By:
                    </p>
                    <select name="" className="form-control form-select" id="">
                      <option value="">Best Selling</option>
                      <option value="">2</option>
                      <option value="">3</option>
                      <option value="">4</option>
                    </select>
                  </div>
                  <div className="d-flex align-items-center gap-10">
                    <p className="total-products mb-0">
                      {productState?.data?.length} Products
                    </p>
                    <div className="d-flex gap-10 align-items-center grid">
                      <img
                        onClick={() => {
                          setGrid(3);
                        }}
                        src="images/gr4.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(4);
                        }}
                        src="images/gr3.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(6);
                        }}
                        src="images/gr2.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      ></img>
                      <img
                        onClick={() => {
                          setGrid(12);
                        }}
                        src="images/gr.svg"
                        className="d-block img-fluid"
                        alt="grid"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="products-list pb-5">
                <div className="d-flex gap-10 flex-wrap">
                  <ProductCart productData={productState} grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;
