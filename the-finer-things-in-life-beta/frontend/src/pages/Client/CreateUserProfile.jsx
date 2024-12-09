import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProfileBackButton from "../../Components/ProfileBackButton";

const CreateUserProfile = () => {
  const [loading, setLoading] = useState("");
  const [userProfile, setUserProfile] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    age: "",
  });

  const navigate = useNavigate();

  const addUser = async () => {
    const newUser = userProfile;
    fetch("http://localhost:3000/users/createUser", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    })
      .then(() => {
        setUserProfile({
          firstName: "",
          lastName: "",
          username: "",
          email: "",
          password: "",
          age: "",
        });
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
    <div className="
    mt-20">
      <ProfileBackButton />
      <h1 className="g max-md:text-5xl text-center  my-4">Registration Form</h1>
      <form className="w-[600px] max-md:w-[350px] flex flex-col border-2 border-gray-600 rounded-xl  p-4 mx-auto justify-center">
        <label className="text-xl mr-4 text-gray-400">First Name:</label>
        <input
          type="text"
          value={userProfile.firstName}
          onChange={(e) =>
            setUserProfile({ ...userProfile, firstName: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Last Name:</label>
        <input
          type="text"
          value={userProfile.lastName}
          onChange={(e) =>
            setUserProfile({ ...userProfile, lastName: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">User Name: </label>
        <input
          type="text"
          value={userProfile.username}
          onChange={(e) =>
            setUserProfile({ ...userProfile, username: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Email:</label>
        <input
          type="text"
          value={userProfile.email}
          onChange={(e) =>
            setUserProfile({ ...userProfile, email: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Password:</label>
        <input
          type="text"
          value={userProfile.password}
          onChange={(e) =>
            setUserProfile({ ...userProfile, password: e.target.value })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <label className="text-xl mr-4 text-gray-400">Age:</label>
        <input
          type="number"
          value={userProfile.age}
          onChange={(e) =>
            setUserProfile({ ...userProfile, age: Number(e.target.value) })
          }
          className="border-2 text-lg text-gray-500 border-gray-500 px-4 py-2 w-full"
        />
        <div>
          <button className="mt-2" onClick={addUser}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
export default CreateUserProfile;
