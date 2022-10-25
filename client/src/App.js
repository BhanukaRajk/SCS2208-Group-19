import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { useMemo, useState } from "react";
import CheckRequests from "./components/repairs/CheckRequests";
import AdminClientDashboard from "./components/admin/ClientDashboard";
import MechanicDash from "./components/admin/MechanicDash";
import MyTasks from "./components/repairs/MyTasks";
import MyRequests from "./components/repairs/MyRequests";

import AddRequest from "./components/repairs/AddRequest";
import ServiceSchduleDash from "./components/serviceSchdule/ServiceSchduleDash";
import HomePage from "./components/Home/HomePage";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Navbar from "./components/Home/Navbar";
import MechanicDashboard from "./components/dashboards/MechanicDashboard";
import ClientDashboard from "./components/dashboards/ClientDashboard";
import AdminDashboard from "./components/dashboards/AdminDashboard";

import AddRequest from "./components/repairs/AddRequest";
import MechanicAddForm from "./components/admin/MechanicAddForm";
import {UserContext} from './UserContext';
import ClientServiceScduleAdd from "./components/serviceSchdule//ClientServiceScduleAdd";
import ServiceStationSchduleView from "./components/serviceSchdule//ServiceStationSchduleView";


function App() {
    const [user, setUser] = useState({email:"",type:""});

    return (
        <BrowserRouter>
                <UserContext.Provider value={{user,setUser}}>
                <Navbar />
                <Routes>
                    <Route path="/admin/mechanic" element={user.type=='admin'?<MechanicDash />:<Login />} />
                    <Route path="/admin/mechanic/add"element={user.type=='admin'?<MechanicAddForm />:<Login />}/>
                    <Route path="/repairs/mytasks" element={user.type=='mechanic'?<MyTasks />:<Login />} />
                    <Route path="/client/myrequests/add" element={user.type=='client'?<AddRequest />:<Login />}/>
                    <Route path="/client/myrequests" exact element={user.type=='client'?<MyRequests />:<Login />}/>
                    <Route path="/client/dashboard" element={user.type=='client'?<ClientDashboard />:<Login />}/>
                    <Route path="/serviceSchdule" element={user.type=='admin'?<ServiceSchduleDash />:<Login />} />
                    <Route path="/mechanic/dashboard" element={<MechanicDashboard />}/>
                    <Route path="/mechanic/requests" element={<CheckRequests />}/>
                    <Route path="/admin/dashboard" element={<AdminDashboard />}/>
                    <Route path="/register" element={<Register />} />
                    <Route path="/" exact element={<HomePage />} />
                    <Route path="/ClientServiceScduleAdd" element={<ClientServiceScduleAdd />}/>
				            <Route path="/ServiceStationSchduleView" element={<ServiceStationSchduleView />} />
                    <Route path="/admin/client" element={<AdminClientDashboard />}/>
                </Routes>
            </UserContext.Provider>
            </BrowserRouter>
    );
}

export default App;
