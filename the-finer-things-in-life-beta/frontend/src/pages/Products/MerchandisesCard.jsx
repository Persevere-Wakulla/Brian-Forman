import { Form } from "react-router-dom";
import { useState, useEffect } from "react";
import MerchandiseSingleCard from "./MerchandiseSingleCard";
import BackToTop from "../../Components/BackToTop";

const MerchandisesCard = ({ merchandises }) => {
  const [search, setSearch] = useState("");
  const [filteredItem, setFilteredItem] = useState("");

  useEffect(() => {}, [search]);

  return (
    <div>
      <div className="flex gap-4 justify-around ">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul className="dropdown-menu">
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("all")}
              >
                All
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("fine wine")}
              >
                Fine Wines
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("electronics")}
              >
                Electronics
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("pets")}
              >
                Pets
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("sporting goods")}
              >
                Sporting Goods
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("men accessories")}
              >
                Men Accessories
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("off-road")}
              >
                Off-Road Vehicles
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("vehicles")}
              >
                Vehicles
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("motorcycle")}
              >
                Motorcycles
              </button>
            </li>
            <li>
              <button
                className="dropdown-item"
                type="button"
                onClick={() => setFilteredItem("women products")}
              >
                Women Accessories
              </button>
            </li>
          </ul>
        </div>
        <Form>
          <div className="flex gap-2 items-center">
            <label className="text-xl" htmlFor="search">
              Search
            </label>
            <input
              id="search"
              className="w-100 text-black "
              name="search"
              type="text"
              placeholder=""
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </Form>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {merchandises
          .filter((items) => {
            if (search === "") {
              if (filteredItem === "" || filteredItem === "all") {
                return items;
              }
              return items.category.includes(filteredItem);
            } else {
              return items.name.toLowerCase().includes(search.toLowerCase());
            }
          })
          .map((item) => (
            <MerchandiseSingleCard key={item._id} merchandise={item} />
          ))}
      </div>
      <BackToTop />
    </div>
  );
};

export default MerchandisesCard;
