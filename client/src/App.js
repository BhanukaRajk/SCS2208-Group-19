import './App.css';
import MechanicDash from './components/admin/MechanicDash';
import AddRequest from "./components/repairs/AddRequest";
import MyRequests from "./components/repairs/MyRequests";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ClientServiceScduleAdd from "./components/serviceSchdule//ClientServiceScduleAdd";
import ServiceStationSchduleView from "./components/serviceSchdule//ServiceStationSchduleView";



function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/mechanic" element={<MechanicDash />} />
                <Route path="/repairs/addrequest" element={<AddRequest />} />
                <Route path="/repairs/myrequests" element={<MyRequests />} />
                <Route path="/ClientServiceScduleAdd" element={<ClientServiceScduleAdd />} />
                <Route path="/ServiceStationSchduleView" element={<ServiceStationSchduleView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;