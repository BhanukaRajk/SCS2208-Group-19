import "./App.css";
import MechanicDash from "./components/admin/MechanicDash";
import ServiceSchduleDash from "./components/serviceSchdule/ServiceSchduleDash";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/mechanic" element={<MechanicDash />} />
                <Route path="/serviceSchdule" element={<ServiceSchduleDash />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;