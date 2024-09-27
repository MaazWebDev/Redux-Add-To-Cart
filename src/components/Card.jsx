import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/Reducers/cartSlice";

function Card({ title, image, description, item }) {
  const dispatch = useDispatch();
  const addedProductToCart = (item) => {
    dispatch(addToCart({ item }));
  };
  return (
    <div>
      <div className="card glass w-80 sm:w-96">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => addedProductToCart(item)}
              className="text-lg font-semibold bg-blue-100 text-gray-700 px-3 py-2 rounded-md transition-colors duration-300 hover:bg-blue-500 hover:text-white"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;