import React, { useState, useEffect } from "react";
import BackButton from "../../Components/BackButton";
import Spinner from "../../Components/Spinner";
import { useNavigate, useParams } from "react-router-dom";

const EditMerchandise = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:3000/merchandises/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setImage(data.image);
        setPrice(data.price);
        setCategory(data.category);
        setDetails(data.details);
      })
      .then(() => setLoading(false))
      .catch((err) => console.log(err));
  }, []);

  

  const handleEditMerchandise = () => {
    const data = {
      name,
      category,
      price,
      image,
      details,
    };

    setLoading(true);

    fetch(`http://localhost:3000/merchandises/${id}`, {
      method: "PUT",
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
    <div className="p-4 mt-28">
      <BackButton />
      <h1 className="g text-center my-4">Edit Merchandise</h1>
      {loading ? <Spinner /> : ""}
      <div
        id="edit"
        className="flex justify-center max-md:w-[300px] flex-col border-2 border-green-400 rounded-xl w-[600px] p-4 mx-auto"
      >
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
        <label className="text-xl mr-4 text-gray-400">Description</label>
        <textarea
          type="text"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <button
          className="hover:bg-green-400 hover:text-green-500 p-2 rounded-lg bg-green-500 m-8"
          onClick={handleEditMerchandise}
        >
          Save
        </button>
      </div>
    </div>
  );
};
export default EditMerchandise;
