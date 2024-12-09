import React, { useState } from "react";
import BackButton from "../../Components/BackButton";
import Spinner from "../../Components/Spinner";
import { useNavigate } from "react-router-dom";

const CreateMerchandise = () => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();

  const handleSaveMerchandise = () => {
    const data = {
      name,
      image,
      price,
      category,
      details,
    };
    setLoading(true);

    fetch("http://localhost:3000/merchandises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
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
      <h1 className="g text-center my-4">Create Merchandise</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex max-md:w-[300px] flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
        <label className="text-xl mr-4 text-gray-400">Image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Price</label>
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-500">Description</label>
        <textarea
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <button
          className="hover:bg-sky-300 hover:text-gray-500 p-2 rounded-lg bg-sky-500 m-8"
          onClick={handleSaveMerchandise}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default CreateMerchandise;
