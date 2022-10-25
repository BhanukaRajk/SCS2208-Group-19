import React from "react";
import { useState } from "react";
import axios from "axios";

const ClientAddForm = ({ getData, setToggler }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobileNo, setMobileNo] = useState("");
	const [vehicles, setVehicles] = useState("");

	const addData = (event) => {
		event.preventDefault();
		axios
			.post("http://localhost:3001/client/", {
				name: name,
				email: email,
				mobileNo: mobileNo,
				vehicles: vehicles,
			})
			.then((response) => {
				console.log(response.data);
				clearForm();
				getData();
				setToggler(0);
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	};

	const clearForm = () => {
		setName("");
		setEmail("");
		setMobileNo("");
		setVehicles("");
	};

	return (
		<div className="container w-50">
			<form>
				<div className="mb-3">
					<label className="form-label">Name</label>
					<input
						type="text"
						className="form-control"
						onChange={(e) => {
							setName(e.target.value);
						}}
						value={name}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Email address</label>
					<input
						type="email"
						className="form-control"
						onChange={(e) => {
							setEmail(e.target.value);
						}}
						value={email}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Mobile Number</label>
					<input
						type="text"
						className="form-control"
						onChange={(e) => {
							setMobileNo(e.target.value);
						}}
						value={mobileNo}
					/>
				</div>
				<div className="mb-3">
					<label className="form-label">Vehicles</label>
					<input
						type="text"
						className="form-control"
						onChange={(e) => {
							setVehicles(e.target.value);
						}}
						value={vehicles}
					/>
				</div>
				<button
					type="submit"
					className="btn btn-primary"
					onClick={addData}
				>
					Submit
				</button>
			</form>
			<br />
		</div>
	);
};

export default ClientAddForm
