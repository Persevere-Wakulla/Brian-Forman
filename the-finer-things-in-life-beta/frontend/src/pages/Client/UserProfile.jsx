import { React } from "react"
import { useOutletContext, Link } from "react-router-dom";

const UserProfile = () => {
  const [adminUser, user, setUser] = useOutletContext();
  
  return (
    <div className="p-4 mt-20">
      <h1 className="g max-md:text-5xl text-center my-4">User Profile</h1>
      <div className="w-[600px] max-md:max-w-[325px] flex mx-auto  flex-col border-2 border-sky-500 rounded-xl p-4">
        <div className="flex text-xl items-center">
          <p className="text-xl mr-4 text-gray-400">First Name:</p>
          <h2>{user.firstName}</h2>
        </div>
        <div className="flex text-xl items-center">
          <p className="text-xl mr-4 text-gray-400">Last Name:</p>
          <h2>{user.lastName}</h2>
        </div>
        <div className="flex text-xl items-center">
          <p className="text-xl mr-4 text-gray-400">UserName:</p>
          <h2>{user.username}</h2>
        </div>
        <div className="flex text-xl items-center">
          <p className="text-xl mr-4 text-gray-400"> Password:</p>
          <h2>{user.password}</h2>
        </div>
        <div className="flex text-xl items-center">
          <p className="text-xl mr-4 text-gray-400">Email:</p>
          <h2>{user.email}</h2>
        </div>
        <div className="flex text-xl items-center">
          <p className="text-xl mr-4 text-gray-400">Age:</p>
          <h2>{user.age}</h2>
        </div>
      </div>
      <div className="flex justify-center gap-5 mt-10">
        <Link to={`profile/editUser/${user._id}`}>
        <h3 className="text-3xl bg-green-600 p-2 rounded-lg">✍️ Edit</h3>
        </Link>
        <Link to={`profile/deleteUser/${user._id}`}>
        <h3 className="text-3xl bg-red-600 p-2 rounded-lg">Delete🗑️</h3>
        </Link>
      </div>
    </div>
  );
};
export default UserProfile;
