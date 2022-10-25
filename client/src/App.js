import './App.css';
import MechanicDash from './components/admin/MechanicDash';
import MyTasks from "./components/repairs/MyTasks";
import MyRequests from "./components/repairs/MyRequests";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/admin/mechanic" element={<MechanicDash />} />
              <Route path="/repairs/mytasks" element={<MyTasks />} />
              <Route path="/repairs/myrequests" element={<MyRequests />} />
          </Routes>
          {/* <Client /> */}
      </BrowserRouter>
  );
}

export default App;