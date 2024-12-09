import React, { useState } from "react";
import ProfileBackButton from "../../Components/ProfileBackButton";
import Spinner from "../../Components/Spinner";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";

const DeleteUserProfile = () => {
  const [loading, setLoading] = useState(false);
  const [adminUser, user, setUser, setIsLoggedIn] = useOutletContext();
  const navigate = useNavigate();
  const { id } = useParams();

  const handleDeleteProfile = () => {
    setLoading(true);

    fetch(`http://localhost:3000/users/deleteUser/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(),
    })
      .then(() => {
        setLoading(false);
        localStorage.removeItem("user");
        localStorage.removeItem("loggedIn");
        setIsLoggedIn(false)
        setUser({});
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened.Please Check console");
        console.log(error);
      });
  };
  return (
    <div className="mt-20 ">
      <ProfileBackButton />
      <h1 className="g max-md:text-4xl  text-center m-4">Delete User Profile </h1>
      {loading ? <Spinner /> : ""}
      <div
        className="w-[600px] max-md:max-w-[300px]  justify-center mx-auto flex flex-col items-center border-2 border-red-500 rounded-xl p-8 "
      >
        <h3 className="font-[four] text-[var(--threeG)] text-center text-3xl ">
          Are you sure You want to delete this UserProfile?
        </h3>
        <button
          className="p-2 text-[var(--threeG)] text-lg bg-red-600 m-8 w-80 max-md:max-w-40"
          onClick={handleDeleteProfile}
        >
          Yes, Delete it
        </button>
      </div>
    </div>
  );
};
export default DeleteUserProfile;
