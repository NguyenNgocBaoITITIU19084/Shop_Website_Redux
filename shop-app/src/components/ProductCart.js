import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";
const ProductCart = (props) => {
  const { grid, productData } = props;
  console.log(productData);
  let location = useLocation();

  return (
    <>
      {productData?.data?.map((item, index) => {
        return (
          <div
            key={index}
            className={` ${
              location.pathname == "/product" ? `gr-${grid}` : "col-3"
            } `}
          >
            <Link to="/product/:id" className="product-card position-relative">
              <div className="wishlist-icon position-absolute">
                <Link>
                  <img src="images/wish.svg" alt="wishlist"></img>
                </Link>
              </div>
              <div className="product-image">
                <img
                  className="img-fluid"
                  src="images/watch.jpg"
                  alt="product"
                ></img>
                <img
                  className="img-fluid"
                  src="images/product-mix.jpg"
                  alt="product"
                ></img>
              </div>
              <div className="product-details">
                <h6 className="brand">{item?.brand}</h6>
                <h5 className="product-title">{item?.name}</h5>
                <ReactStars
                  count={5}
                  size={24}
                  edit={false}
                  value={3}
                  activeColor="#ffd700"
                />
                <p
                  className={`description ${
                    grid === 12 ? "d-block" : "d-none"
                  }`}
                >
                  {item?.description}
                </p>
                <p className="price">${item?.price}</p>
              </div>
              <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                  <Link>
                    <img src="images/prodcompare.svg" alt="compare"></img>
                  </Link>
                  <Link>
                    <img src="images/view.svg" alt="view"></img>
                  </Link>
                  <Link>
                    <img src="images/add-cart.svg" alt="add cart"></img>
                  </Link>
                  <Link>
                    <img src="images/add-cart.svg" alt="add cart"></img>
                  </Link>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </>
  );
};

export default ProductCart;
