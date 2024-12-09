import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "../../Components/BackButton";
import Spinner from "../../Components/Spinner";

const ShowMerchandise = () => {
  const [merchandise, setMerchandise] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/merchandises/${id}`)
      .then((res) => res.json())
      .then((res) => setMerchandise(res))
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="p-4 mt-28">
      <BackButton />
      <h1 className="g text-center my-4">Show Merchandise</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex flex-col border-2 border-sky-400 rounded-xl p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-gray-400">Id:</span>
            <span>{merchandise._id}</span>
          </div>
          <div>
          <img className="show-img" src={'/' + merchandise.image} alt="vid"/>
          </div>
          <div className="my-4">
            <span className="text-2xl mr-4 text-gray-400">Name:</span>
            <span className="text-xl">{merchandise.name}</span>
          </div>
          <div className="my-2">
            <span className="text-2xl mr-4 text-gray-400">Price:</span>
            <span className="text-xl">${merchandise.price}</span>
          </div>
          <div className="my-2">
            <span className="text-2xl mr-4 text-gray-400">Category:</span>
            <span className="text-xl">{merchandise.category}</span>
          </div>
          <div className="my-2">
            <span className="text-2xl mr-4 text-gray-400">Created Time:</span>
            <span className="text-xl">{new Date(merchandise.createdAt).toString()}</span>
          </div>
          <div className="my-2">
            <span className="text-2xl mr-4 text-gray-400">
              Last Updated Time:
            </span>
            <span className="text-xl">{new Date(merchandise.updatedAt).toString()}</span>
          </div>
          <div className="my-4">
            <span className="text-2xl mr-4 text-gray-400">Description:</span>
            <span className="text-xl">{merchandise.details}</span>
          </div>
        </div>
      )}
    </div>
  );
};
export default ShowMerchandise;
