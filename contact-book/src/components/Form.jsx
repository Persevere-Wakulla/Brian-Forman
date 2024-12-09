import { useEffect, useState } from "react";
import Contact from "./contacts";


const Form = () => {
  const [list, setList] = ([])
  const [person, setPerson] = useState({
    name: "",
    city: "",
    email: "",
  });

  function handleClick(){
    setList([...list, person])
    // setPerson("")
    console.log(list);
  }

  function handleDelete(id) {
    let filter = list.filter((item, index) => {
      if (index !== id) {
        return item;
      }
    });
    setList(filter);
  }

  useEffect(()=>{
    console.log(person);
    console.log(list);
  },[person])

  return (
    <div>
      <form className="form-container">
        <h1 className="heading">Contact Book</h1>
        <div className="name">
          <label htmlFor="name">Name:</label>
          <input
            value={person.name}
            onChange={(e) => {
              setPerson({ ...person, name: e.target.value });
            }}
          />
        </div>
        <div className="city">
          <label htmlFor="city">City:</label>
          <input
            value={person.city}
            onChange={(e) => {
              setPerson({ ...person, city: e.target.value });
            }}
          />
        </div>
        <div className="email">
          <label htmlFor="email">Email:</label>
          <input
            value={person.email}
            onChange={(e) => {
              setPerson({ ...person, email: e.target.value });
            }}
          />
        </div>
        <div className="btn-container">
          <button onClick={handleClick}>Add contact</button>
        </div>
      </form>
      {list && list.length ?
       list.map((person,index) =>(
        <Contact 
        person={person} 
        key={index}
        />
      )) : null}
    </div>
  );
};
export default Form;
