import "./App.css";
import MechanicDash from "./components/admin/MechanicDash";
import ClientDashboard from "./components/admin/ClientDashboard";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/admin/mechanic" element={<MechanicDash />} />
				<Route path="/admin/client" element={<ClientDashboard />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
