import { useState,useEffect } from "react";
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
    
    useEffect(() => { getData(); }, []);

	return (
		<div className="container w-50">
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
