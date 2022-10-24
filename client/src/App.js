import "./App.css";
import MechanicDash from "./components/admin/MechanicDash";
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/admin/mechanic/*" element={<MechanicDash />} />
            </Routes>
            {/* <Client /> */}
        </BrowserRouter>
    );
}

export default App;
