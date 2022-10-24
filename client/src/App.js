import './App.css';
import MechanicDash from './components/admin/MechanicDash';
import AddRequest from "./components/repairs/AddRequest";
import MyRequests from "./components/repairs/MyRequests";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/admin/mechanic" element={<MechanicDash />} />
              <Route path="/repairs/addrequest" element={<AddRequest />} />
              <Route path="/repairs/myrequests" element={<MyRequests />} />
          </Routes>
          {/* <Client /> */}
      </BrowserRouter>
  );
}

export default App;