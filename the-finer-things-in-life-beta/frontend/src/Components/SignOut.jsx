import { useNavigate } from "react-router-dom";

const SignOut = ({ updateLogin, updateUser }) => {
  const navigate = useNavigate();  
  return (
    <button
    className="signout-btn"
      onClick={() => {
        // removes the state of the user that is logged in from the local storage
        localStorage.removeItem("user");
        localStorage.removeItem("loggedIn");
        // to update the state in isLoggedIn in component rootLayout
        
        updateLogin(false);
        updateUser({})
        // navigate back to root
        navigate("/");
      }}
    >
      Sign Out
    </button>
  );
};
export default SignOut;
