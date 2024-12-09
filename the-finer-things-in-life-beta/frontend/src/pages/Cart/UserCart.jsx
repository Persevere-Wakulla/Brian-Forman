import React from "react";
import RemoveItem from "./RemoveItem";
import { useNavigate, useOutletContext } from "react-router-dom";

const UserCart = () => {
  const navigate = useNavigate();
  const [adminUser, user, setUser, isLoggedIn] = useOutletContext();

  const subTotal = user.cart
    .map((x) => x.price * x.quantity)
    .reduce((acc, curr) => acc + curr, 0);

  return (
    <div>
      <div className="container mt-28 w-[800px]  max-md:w-[350px] p-10 bg-white rounded-xl mb-5">
        <h1 className="text-4xl text-center mb-5 font-bold text-black">
          Shopping Cart
        </h1>
        <hr className="border border-black mb-4" />
        {user &&
          user.cart.length &&
          user.cart.map((item) => (
            <div key={item._id}>
              <div className="cart-card border-b-2 border-gray-400 flex max-md:flex-col mt-2 text-black justify-between max-md:max-w-[350px]  ">
                <img
                  className="w-48 mb-2 h-40 max-md:w-full max-md:h-[250px] inset-0 mr-2 rounded-lg "
                  src={"/" + item.image}
                  alt="pic"
                />
                <div className="flex flex-auto justify-between">
                  <div className="mt-2 mb-3">
                    <h4 className="flex font-bold items-center text-xl mb-5">
                      {item.name}
                    </h4>
                    <h4 className="flex font-semibold items-center">
                      Qty: {item.quantity}
                    </h4>
                  </div>
                  <div className="mt-2 mb-3">
                    <h4 className="mb-5 font-bold text-xl">
                      ${item.price * item.quantity}
                    </h4>
                    <RemoveItem id={item._id} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        <div>
          <div className="text-black flex justify-between mt-4 mb-2">
            <h2 className="font-semibold text-2xl ">Subtotal</h2>
            <h2 className="font-semibold text-2xl ">${subTotal}</h2>
          </div>
          <p className="text-black mb-4 text-center">
            Shipping and taxes will be calculated at check out
          </p>
        </div>
        <div className="flex flex-col items-center">
          <button
            className="w-50 mb-3 text-xl "
            onClick={() => {
              // close(false);
              navigate("/cart/checkout");
            }}
          >
            Check Out
          </button>
          <h2
            className="text-blue-600 text-center cursor-pointer text-xl"
            onClick={() => {
              close(false);
              navigate("/products");
            }}
          >
            Continue Shopping➡️
          </h2>
        </div>
      </div>
    </div>
  );
};
export default UserCart;
