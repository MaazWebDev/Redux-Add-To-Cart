import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/Reducers/cartSlice";

function Cart() {
  const cartItems = useSelector((state) => state.carts.cart);
  const dispatch = useDispatch();

  const removeItem = (itemId) => {
    dispatch(removeFromCart({ id: itemId }));
  };

  return (
    <div className="mt-28 flex justify-center flex-col items-center gap-10">
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center shadow-lg p-8 gap-10"
          >
            <div className="shadow-lg">
              <img
                width={200}
                height={200}
                src={item.thumbnail}
                alt={item.title}
              />
            </div>
            <div>
              <h3>{item.title}</h3>
              <p className="text-[16px]">{item.returnPolicy}</p>
              <p className="text-[16px]">{item.warrantyInformation}</p>
              <p className="text-14">Available Stock : {item.stock}</p>
            </div>
            <div>
              <h3>Price : $ {item.price}</h3>
            </div>
            <div>
              <p className="text-[16px]">Quantity: {item.quantity}</p>
            </div>
            <div>
              <button
                onClick={() => removeItem(item.id)}
                className="text-lg font-semibold text-gray-700 bg-red-100 px-3 py-2 rounded-md transition-colors duration-300 hover:bg-red-500 hover:text-white"
              >
                Remove
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center py-20">
          <h2 className="text-4xl font-bold text-gray-600 animate-bounce">
            Your cart is empty!
          </h2>
          <p className="text-lg text-gray-400 mt-4">
            Browse our products and start adding items to your cart!
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
