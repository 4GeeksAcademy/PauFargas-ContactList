import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const NewContact = () => {

    const {store, actions} = useContext(Context)

    const [newContact, setNewContact] = useState({
        full_name: "",
        email: "",
        phone: "",
        address: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewContact({ ...newContact, [name]: value });
      };

      const handleSubmit = (event) => {
        event.preventDefault();
    
        // Llama a la acción para agregar el nuevo contacto
        actions.addContact(newContact);
      };



  return (
    <div className="container">
        <h2>Add a new contact</h2>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput" className="form-label">Full Name</label>
                <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Full Name" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Email</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter email" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Phone</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter phone" />
            </div>
            <div className="mb-3">
                <label htmlFor="formGroupExampleInput2" className="form-label">Adress</label>
                <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Enter adress" />
            </div>
            <button className="btn btn-primary col-12" type="submit">save</button>
        </form>
        <Link to ="/" >or get back to contacts</Link>
        
  </div>
  );
};