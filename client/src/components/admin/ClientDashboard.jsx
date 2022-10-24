import { useState } from "react";
import axios from "axios";

const ClientDashboard = () => {
	const [data, setData] = useState([]);

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

	return (
		<div className="container w-50">
			<button type="button" onClick={getData} className="btn btn-primary">
				Find All
			</button>
			<table className="table">
				<thead>
					<tr>
						<th scope="col">Name</th>
						<th scope="col">Email</th>
						<th scope="col">Mobile Number</th>
						<th scope="col">Vehicles</th>
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
										{y.vehicleNo} - {y.vehicleModel} <br />
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
