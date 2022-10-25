import { useState, useEffect } from "react";
import axios from "axios";
import ClientAddForm from "./ClientAddForm";
import ClientUpdateForm from "./ClientUpdateForm";
import DelButton from "./DelButton";

const ClientDashboard = () => {
	const [data, setData] = useState([]);
	const [upData, setUpData] = useState([]);

	const [toggler, setToggler] = useState(0);
	const [updateToggler, setUpdateToggler] = useState(0);

	useEffect(() => {
		getData();
	}, [data]);

	const toggleForm = () => {
		setToggler(toggler ? 0 : 1);
	};

	const getData = () => {
		axios
			.get("http://localhost:3001/client/")
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	};

	const deleteClient = (_id) => {
		axios
			.delete("http://localhost:3001/client/" + _id)
			.then((response) => {
				console.log(response.data);
				setData((data) => data.filter((x) => x._id != _id));
			})
			.catch((error) => {
				console.log(`Error: ${error}`);
			});
	};

	const updateClient = (singleData) => {
		setUpData(singleData);
		setUpdateToggler(1);
	};

	return (
		<div className="container w-50">
			<br />
			{toggler == 1 && (
				<div>
					<button className="btn btn-primary" onClick={toggleForm}>
						Show data
					</button>
					<ClientAddForm getData={getData} setToggler={setToggler} />
				</div>
			)}
			{updateToggler == 1 && (
				<div>
					<button
						className="btn btn-primary"
						onClick={() => {
							setUpdateToggler(0);
						}}
					>
						Show data
					</button>
					<ClientUpdateForm
						getData={getData}
						setUpdateToggler={setUpdateToggler}
						upData={upData}
					/>
				</div>
			)}
			{!toggler && !updateToggler ? (
				<div>
					<button className="btn btn-primary" onClick={toggleForm}>
						Add Client
					</button>
					<table className="table text-light blur-card">
						<thead>
							<tr>
								<th scope="col">Name</th>
								<th scope="col">Email</th>
								<th scope="col">Mobile Number</th>
								<th scope="col">Vehicle Number</th>
								<th scope="col">Vehicle Model</th>
								<th scope="col"></th>
								<th scope="col"></th>
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
									<td>
										<button
											className="btn btn-primary"
											onClick={() => {
												updateClient(x);
											}}
										>
											Edit
										</button>
									</td>
									<td>
										<button
											className="btn btn-danger"
											onClick={() => {
												deleteClient(x._id);
											}}
										>
											Delete
										</button>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			) : (
				<div></div>
			)}
		</div>
	);
};

export default ClientDashboard;
