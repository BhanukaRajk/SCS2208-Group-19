import { useState, useEffect } from "react";
import axios from "axios";

const ClientDashboard = () => {
    const [data, setData] = useState([]);
    
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [mobileNo, setMobileNo] = useState([]);
    const [vehicles, setVehicles] = useState([]);

	const getData = () => {
		axios
			.get("http://localhost:3001/client/")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				consoloe.log(`Error: ${error}`);
			});
	};

	useEffect(() => {
		getData();
	}, []);

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
				<button type="submit" className="btn btn-primary">
					Submit
				</button>
			</form>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Mobile Number</th>
						<th scope="col">Vehicle Number</th>
						<th scope="col">Vehicle Model</th>
					</tr>
				</thead>
				<tbody>
					{data.map((x) => (
						<tr>
							<th>{x.name}</th>
							<td>{x.email}</td>
							<td>{x.mobileNo}</td>
							<td>
								{x.vehicles.map((y) => (
									<div>
										{y.vehicleNo}
										<br />
									</div>
								))}
							</td>
							<td>
								{x.vehicles.map((y) => (
									<div>
										{y.vehicleModel}
										<br />
									</div>
								))}
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default ClientDashboard;
