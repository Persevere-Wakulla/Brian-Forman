import React from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

const CheckOut = () => {
  const [ , currentUserProfile, SetCurrentProfile] = useOutletContext();
  const navigate = useNavigate();
  const count = currentUserProfile.cart.length;
  const subTotal = currentUserProfile.cart
    .map((x) => x.price * x.quantity)
    .reduce((acc, curr) => acc + curr, 0);
  const taxRate = 8.25;
  const taxes = parseFloat(((taxRate / 100) * subTotal).toFixed(2));
  const total = subTotal + taxes;

  

  return (
    <div className="check-out mt-32 p-4 ">
      <div className="row">
      <div className="col-25">
          <div className="container mb-4 rounded-lg bg-white text-black p-3">
            <h4>
              Cart
              <span id="checkout-items" className="price flex gap-2">
                <i className="fa fa-shopping-cart"></i>
                <b>{count}</b>
              </span>
            </h4>
            {currentUserProfile &&
              currentUserProfile.cart.map((item) => (
                <div key={item._id}>
                  <div className="flex mt-3 text-black justify-between">
                    <div className="flex gap-1">
                    <h4>x{item.quantity}</h4>
                    <h4>{item.name}</h4>
                    </div>
                    <div className="flex items-center gap-4">
                      <h4>${item.price * item.quantity }</h4>
                    </div>
                  </div>
                </div>
              ))}
            <hr className="mb-2" />
            <div className="flex justify-between">
              <p>Subtotal:</p>
              <p>${subTotal}</p>
            </div>
            <div className="flex justify-between">
              <p>Taxes:</p>
              <p>${taxes}</p>
            </div>
            <div className="flex justify-between">
              <p>Total:</p>
              <p>${total}</p>
            </div>
          </div>
        </div>
        <div className="col-75">
          <div className="container rounded-lg bg-white text-black p-4">
            <form action="/action_page.php">
              <div className="row">
                <div className="col-50">
                  <h3 className="mt-1">Billing Address</h3>
                  <label htmlFor="fname">
                    <i className="fa fa-user text-xl"></i> Full Name
                  </label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="John M. Doe"
                  />
                  <label htmlFor="email">
                    <i className="fa fa-envelope"></i> Email
                  </label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="email"
                    name="email"
                    placeholder="john@example.com"
                  />
                  <label htmlFor="adr">
                    <i className="fa fa-address-card-o"></i> Address
                  </label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="adr"
                    name="address"
                    placeholder="542 W. 15th Street"
                  />
                  <label htmlFor="city">
                    <i className="fa fa-institution"></i> City
                  </label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="city"
                    name="city"
                    placeholder="New York"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="state">State</label>
                      <input
                        className="text-2xl"
                        type="text"
                        id="state"
                        name="state"
                        placeholder="NY"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="zip">Zip</label>
                      <input
                        className="text-2xl"
                        type="text"
                        id="zip"
                        name="zip"
                        placeholder="10001"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-50 ">
                  <h3>Payment</h3>
                  <label htmlFor="fname">Accepted Cards</label>
                  <div className="icon-container">
                    <i
                      className="fa fa-cc-visa text-5xl"
                      style={{ color: "navy" }}
                    ></i>
                    <i
                      className="fa fa-cc-amex text-5xl"
                      style={{ color: "blue" }}
                    ></i>
                    <i
                      className="fa fa-cc-mastercard text-5xl"
                      style={{ color: "red" }}
                    ></i>
                    <i
                      className="fa fa-cc-discover text-5xl"
                      style={{ color: "orange" }}
                    ></i>
                  </div>
                  <label htmlFor="cname">Name on Card</label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="cname"
                    name="cardname"
                    placeholder="John More Doe"
                  />
                  <label htmlFor="ccnum">Credit card number</label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="ccnum"
                    name="cardnumber"
                    placeholder="1111-2222-3333-4444"
                  />
                  <label htmlFor="expmonth">Exp Month</label>
                  <input
                    className="text-2xl"
                    type="text"
                    id="expmonth"
                    name="expmonth"
                    placeholder="September"
                  />

                  <div className="row">
                    <div className="col-50">
                      <label htmlFor="expyear">Exp Year</label>
                      <input
                        className="text-2xl"
                        type="text"
                        id="expyear"
                        name="expyear"
                        placeholder="2018"
                      />
                    </div>
                    <div className="col-50">
                      <label htmlFor="cvv">CVV</label>
                      <input
                        className="text-2xl"
                        type="text"
                        id="cvv"
                        name="cvv"
                        placeholder="352"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <label>
                <input
                  className="ship"
                  type="checkbox"
                  //   checked="checked"
                  name="sameadr"
                />
                Shipping address same as billing
              </label>
              <div className="checkout-btn-container flex gap-3">
                <button type="submit" className="btn submit-btn">
                  Continue to check out
                </button>
                <button
                  onClick={() => {
                    // close(false);
                    navigate("/products");
                  }}
                  className="btn back-to-cart"
                  type="button"
                >
                  Back to Shopping
                </button>
              </div>
            </form>
          </div>
        </div>

        
      </div>
    </div>
  );
};
export default CheckOut;
