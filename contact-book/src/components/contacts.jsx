import { useState } from "react";

const Contact = ({ person }) => {
  const [displayEdit, setDisplayEdit] = useState(false);
  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [email, setEmail] = useState('');

  function handleEdit() {
    setDisplayEdit(true);
  }

  const display = !displayEdit ? "close" : "open";
  return (
    <div className="contacts-container">
      
      <p className="display-name">Name: {person.name} </p>
      <p className="display-city">City: {person.city} </p>
      <p className="display-email">Email:{person.email} </p>
      <button onClick={handleEdit}>edit</button>
      <button onClick={() => removeFn(listId)}>remove</button>
      <div className={display}>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <input value={city} onChange={(e) => setCity(e.target.value)}/>
        <input value={email} onChange={(e) => setEmail(e.target.value)}/>
        <button onClick={() => setDisplayEdit(false)}>Save</button>
      </div>
    </div>
  );
};
export default Contact;
