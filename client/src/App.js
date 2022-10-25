import './App.css';
import MechanicDash from './components/admin/MechanicDash';
import MyTasks from "./components/repairs/MyTasks";
import MyRequests from "./components/repairs/MyRequests";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ServiceSchduleDash from "./components/serviceSchdule/ServiceSchduleDash";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/admin/mechanic" element={<MechanicDash />} />
              <Route path="/repairs/mytasks" element={<MyTasks />} />
              <Route path="/repairs/myrequests" element={<MyRequests />} />
              <Route path="/serviceSchdule" element={<ServiceSchduleDash />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;