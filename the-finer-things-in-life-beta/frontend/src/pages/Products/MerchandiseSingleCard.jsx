import { useContext, useState } from "react";
import MerchandiseModal from "./MerchandisesModal";
import { userContext } from "../../Layouts/RootLayout";
// import AddButton from "../Clients/AddButton";

const MerchandiseSingleCard = ({ merchandise }) => {
  const [showModal, setShowModal] = useState(false);
  const [user, setUser] = useContext(userContext);

  return (
    <>
      <div
        key={merchandise._id}
        className="single-card-container border-2 border-black rounded-xl  m-4 relative  "
      >
        <img
          className="card-image"
          onClick={() => setShowModal(true)}
          src={merchandise.image}
        />
        <div className="product-card p-3">
          <h2 className="text-3xl">{merchandise.name}</h2>
          <h2 className="text-2xl mt-4">${merchandise.price}</h2>
        </div>
      </div>
      {showModal && (
        <MerchandiseModal
          merchandise={merchandise}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default MerchandiseSingleCard;
