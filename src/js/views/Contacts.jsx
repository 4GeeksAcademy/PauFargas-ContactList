import React, {useContext} from "react";
import {Context}  from "../store/appContext.js";

export const Contacts = () => {

  const {store,actions} = useContext(Context)
  console.log(store.cohorte)
  return (
    <div className="container">
      <ul>
        {store.allContactsAgenda.map((item) => <li>
          <div className="row">
            <div className="image col-3">
              <img
                className="rounded-circle"
                alt="avatar1"
                src="https://mdbcdn.b-cdn.net/img/new/avatars/9.webp"
              />
            </div>
            <div className="info col-7">
              <h5>{item.full_name}</h5>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-map-marker-alt"></i>
                <span className="ms-3">{item.address}</span>
              </div>
              <div className="d-flex align-items-center mb-2">
                <i className="fas fa-phone"></i>
                <span className="ms-3">{item.phone}</span>
              </div>
              <div className="d-flex align-items-center">
                <i className="far fa-envelope"></i>
                <span className="ms-3">{item.email}</span>
              </div>
            </div>
            <div className="col-2 iconosFinales">
              <i className="fas fa-pencil-alt m-3"></i>
              <i className="fas fa-trash-alt m-3"></i>
            </div>
        </div>
        </li> )}
        
      </ul>
    </div>
  );
};