import { useEffect, useState } from "react";
import Spinner from "../../Components/Spinner";
import { useNavigate, useParams, useOutletContext } from "react-router-dom";
import ProfileBackButton from "../../Components/ProfileBackButton";

const EditUserProfile = () => {
  const [adminUser, user, setUser] = useOutletContext();
  const [updateData, setUpdateData] = useState({
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    password: "",
    newPassword: "",
    confirmPassword: "",
  });


  const [loading, setLoading] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const editUser = async () => {
    setLoading(true);

    fetch(`http://localhost:3000/users/editUser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateData),
    })
      .then(() => {
        setLoading(false);
        navigate("/profile");
      })
      .catch((error) => {
        setLoading(false);
        alert("An error happened.Please Check console");
        console.log(error);
      });
  };

  return (
    <div className="p-4 mt-20">
      <ProfileBackButton />
      <h1 className="g max-md:text-4xl text-center my-4">Edit User Profile</h1>
      {loading ? <Spinner /> : ""}
      <form className="w-[600px] max-md:max-w-[325px]  flex flex-col border-2 border-green-600 rounded-xl  p-4 mx-auto">
        <label className="text-xl mr-4 text-gray-400">First Name:</label>
        <input
          type="text"
          onChange={(e) =>
            setUpdateData({ ...updateData, firstName: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Last Name:</label>
        <input
          type="text"
          onChange={(e) =>
            setUpdateData({ ...updateData, lastName: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">User Name: </label>
        <input
          type="text"
          onChange={(e) =>
            setUpdateData({ ...updateData, username: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Email:</label>
        <input
          type="text"
          onChange={(e) =>
            setUpdateData({ ...updateData, email: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Old Password:</label>
        <input
          type="text"
          onChange={(e) => setUpdateData({ ...updateData, password:e.target.value })}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
          <label className="text-xl mr-4 text-gray-400">New Password:</label>
        <input
          type="text"
          onChange={(e) => setUpdateData({ ...updateData, newPassword:e.target.value })}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
          <label className="text-xl mr-4 text-gray-400">Confirm New Password:</label>
        <input
          type="text"
          onChange={(e) => setUpdateData({ ...updateData, confirmPassword:e.target.value })}
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <div className="text-center">
          <button className="mt-2 text-lg w-50 text-[var(--threeG)]" onClick={editUser}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};
export default EditUserProfile;
