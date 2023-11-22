import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className="text-center mt-5">
		<h1>Contact List</h1>
		<Link to="/contacts">
			<button className="btn btn-primary m-3">Contatcs</button>
		</Link>
		<Link to="/new_contact">
			<button className="btn btn-success m-3">Add new contact</button>
		</Link>
	
		
	</div>
);
