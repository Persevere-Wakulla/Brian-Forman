import React from "react";
import { useContext } from "react";
import { userContext } from "../../Layouts/RootLayout";
import { useNavigate } from "react-router-dom";

const MerchandiseModal = ({ merchandise, onClose }) => {
  let navigate = useNavigate()
  const [adminUser, user, setUser, , isLoggedIn] = useContext(userContext);
  
  const handleClick = async (e) => {
    const data = {
      _id: merchandise._id,
      username: user.username,
      password: user.password,
    };

    const response = await fetch("http://localhost:3000/users/cart", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
      mode: "cors"
    })
     
    const json = await response.json();
    console.dir(json);
    setUser(json.user)
  }

    function loginToBuy () {
      navigate("/")
    }

  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="modal-container w-[600px] max-md:w-[350px]  bg-white rounded-xl text-center p-4 flex flex-col relative"
      >
        <h3
          className="self-end text-3xl text-slate-500 hover:text-red-500 cursor-pointer"
          onClick={onClose}
        >
          X
        </h3>
        <div className="flex max-md:flex-col font-serif max-md:max-w-[350px] mx-auto">
            <img
              src={merchandise.image}
              alt=""
              className="w-1/2 max-md:w-full max-md:h-[250px] inset-0 m rounded-lg"
              loading="lazy"
            />
          <form className="flex-auto p-6">
            <div className="flex flex-wrap items-baseline">
              <h1 className="w-full flex-none mb-3 text-3xl leading-none text-slate-900">
                {merchandise.name}
              </h1>
              <div className="flex-auto mb-4 text-3xl font-medium text-slate-500">
                ${merchandise.price}
              </div>
              <div className="text-xs leading-6 font-medium uppercase text-red-500">
                In stock
              </div>
            </div>
            <div className="flex space-x-4 mb-4 text-sm font-medium">
              <div className="flex-auto flex space-x-4 pr-4">=
                  {!isLoggedIn ? <h1 onClick={loginToBuy} className="bg-red-500 text-white py-2 px-1 cursor-pointer rounded-lg text-xl transition-all hover:-translate-y-0.5 duration-800">Click To Login</h1> : <button className="flex-none w-100 h-12 uppercase font-medium tracking-wider border border-slate-200 text-white-900 rounded-xl
                  transition-all hover:-translate-y-0.5 duration-800"
                  type="button" onClick={handleClick}> <h1>Add to Cart</h1> </button>}
               
              </div>
              <button
                className="flex-none flex items-center bg-white justify-center w-12 h-12 text-red-500 border border-slate-200 "
                type="button"
                aria-label="Like"
              >
                <svg
                  width="20"
                  height="20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  />
                </svg>
              </button>
            </div>
            <p className="text-slate-500 overflow-auto max-h-40 mb-3">
              {merchandise.details}
            </p>
            <p className="text-sm text-slate-500">
              Free shipping on all continental US orders.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MerchandiseModal;
