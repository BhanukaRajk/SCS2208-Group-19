import "./App.css";
import MechanicDash from "./components/admin/MechanicDash";
import AddRequest from "./components/repairs/AddRequest";
import MyRequests from "./components/repairs/MyRequests";
import ClientDashboard from "./components/admin/ClientDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ServiceSchduleDash from "./components/serviceSchdule/ServiceSchduleDash";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin/mechanic" element={<MechanicDash />} />
				<Route path="/admin/client" element={<ClientDashboard />} />
				<Route path="/repairs/addrequest" element={<AddRequest />} />
				<Route path="/repairs/myrequests" element={<MyRequests />} />
				<Route
					path="/serviceSchdule"
					element={<ServiceSchduleDash />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
