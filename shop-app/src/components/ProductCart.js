import React from "react";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";
const ProductCart = () => {
  return (
    <div className="col-3">
      <Link className="product-card position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src="images/wish.svg" alt="wishlist"></img>
          </Link>
        </div>
        <div className="product-image">
          <img
            className="img-fluid"
            src="images/watch.jpg"
            alt="product image"
          ></img>
          <img
            className="img-fluid"
            src="images/product-mix.jpg"
            alt="product image"
          ></img>
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphone bulk 10 pack multi colored for student
          </h5>
          <ReactStars
            count={5}
            size={24}
            edit={false}
            value="3"
            activeColor="#ffd700"
          />
          <p className="price">$100.00</p>
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
};

export default ProductCart;
