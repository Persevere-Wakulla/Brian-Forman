import React, { useState } from "react";
import BackButton from "../../Components/BackButton";
import Spinner from "../../Components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const DeleteMerchandise = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const handleDeleteMerchandise = () => {
    setLoading(true);

    fetch(`http://localhost:3000/merchandises/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then(() => {
        setLoading(false);
        navigate("/products");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened.Please Check console");
        console.log(error);
      });
  };
  return (
    <div className="p-4 mt-24">
      <BackButton />
      <h1 className="g  text-center m-4">Delete Merchandise </h1>
      {loading ? <Spinner /> : ""}
      <div
        id="delete"
        className="flex flex-col items items-center border-2 border-red-500 rounded-xl p-8 mx-auto"
      >
        <h3 className="text-center ">
          Are you sure You want to delete this merchandise?
        </h3>
        <button
          className="delete-btn p-4 bg-red-600 m-8 w-full"
          onClick={handleDeleteMerchandise}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
export default DeleteMerchandise;
