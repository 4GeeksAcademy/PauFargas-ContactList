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
        agenda_slug : "PauFargasAgenda",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setNewContact({ ...newContact, [name]: value });
      };

      const handleSubmit = async (event) => {
        event.preventDefault();
        setNewContact({
          full_name: "",
          email: "",
          phone: "",
          address: "",
          agenda_slug: "PauFargasAgenda",
        });
    
        await actions.addContact(newContact);
      };

      
      return (
        <div className="container">
          <h2>Add a new contact</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="full_name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control"
                id="full_name"
                placeholder="Full Name"
                name="full_name"
                value={newContact.full_name}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="text"
                className="form-control"
                id="email"
                placeholder="Enter email"
                name="email"
                value={newContact.email}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">
                Phone
              </label>
              <input
                type="text"
                className="form-control"
                id="phone"
                placeholder="Enter phone"
                name="phone"
                value={newContact.phone}
                onChange={handleInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="address" className="form-label">
                Address
              </label>
              <input
                type="text"
                className="form-control"
                id="address"
                placeholder="Enter address"
                name="address"
                value={newContact.address}
                onChange={handleInputChange}
              />
            </div>
            <button className="btn btn-primary col-12" type="submit">
              Save
            </button>
          </form>
          <Link to="/contacts">or get back to contacts</Link>
        </div>
      );
    };