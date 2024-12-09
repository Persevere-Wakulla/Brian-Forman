import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner";
import { Link } from "react-router-dom";
import MerchandisesTable from "../Products/MerchandisesTable";
import MerchandisesCard from "../Products/MerchandisesCard";
import { useOutletContext } from "react-router-dom";


const Products = () => {
  const [adminUser, currentUserProfile, setCurrentUserProfile] = useOutletContext(); 
  const [merchandises, setMerchandises] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("table");
  
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:3000/merchandises")
      .then((res) => res.json())
      .then((res) => setMerchandises(res.data))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4">
      {!adminUser ? null :
      <div className="product-btn-container flex justify-center items-center gap-x-4">
        <button
          className="bg-sky-600 hover:text-black  hover:bg-sky-400 px-4 py-1 rounded-lg"
          onClick={() => setShowType("table")}
        >
          Card
        </button>
        <button
          className="bg-sky-600 hover:text-black hover:bg-sky-400 px-4 py-1 rounded-lg"
          onClick={() => setShowType("card")}
        >
          Table
        </button>
        <Link to="merchandises/create">
          <h2 id="plus">➕</h2>
        </Link>
      </div>}
      <div className="flex justify-around items-center">
        <h1 className="g mt-20 text-center head-logo my-6">The Finer Things in Life</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : showType === "table" ? (
        <MerchandisesCard merchandises={merchandises} />
      ) : (
        <MerchandisesTable merchandises={merchandises} />
      )}
    </div>
  );
};
export default Products;

