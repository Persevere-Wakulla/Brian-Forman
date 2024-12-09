
import { useContext } from "react"
import { useNavigate } from "react-router-dom";
import { userContext } from "../../Layouts/RootLayout";

const RemoveItem = ({ id }) => {
  const navigate = useNavigate();
  const [adminUser, user, setUser] = useContext(userContext);
  
  

  const removeProduct = async () => {
    const userId = {userId:user._id}
 
    
    fetch(`http://localhost:3000/users/cart/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userId),
      mode:"cors"
    })
      .then((res) => {
        return res.json()
      })
      .then(json => {
        setUser(json.user);
        // navigate("/products");
      })
      .catch((error) => {
        alert("An error happened.Please Check console");
        console.log(error);
      });
  };
  return <h2 className="cursor-pointer text-red-500" onClick={removeProduct}>Remove</h2>;
};
export default RemoveItem;
