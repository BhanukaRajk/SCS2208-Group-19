import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import MechanicDash from './components/admin/MechanicDash';
import MyTasks from "./components/repairs/MyTasks";
import MyRequests from "./components/repairs/MyRequests";
import ServiceSchduleDash from "./components/serviceSchdule/ServiceSchduleDash";
import HomePage from './components/Home/HomePage';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Navbar from "./components/Home/Navbar";
import MechanicDashboard from './components/dashboards/MechanicDashboard';
import ClientDashboard from './components/dashboards/ClientDashboard';
import AdminDashboard from './components/dashboards/AdminDashboard';

function App() {
  return (
      <BrowserRouter>
          <Navbar />
          <Routes>
              <Route path="/admin/mechanic" element={<MechanicDash />} />
              <Route path="/repairs/mytasks" element={<MyTasks />} />
              <Route path="/repairs/myrequests" element={<MyRequests />} />
              <Route path="/serviceSchdule" element={<ServiceSchduleDash />} />
              <Route path="/mechanic/dashboard" element={<MechanicDashboard />} />
              <Route path="/client/dashboard" element={<ClientDashboard />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" exact element={<HomePage />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;