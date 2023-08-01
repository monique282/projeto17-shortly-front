
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.jsx"
import Register from "./Pages/Register.jsx";
import Home from "./Pages/Home.jsx";
import Ranking from "./Pages/Ranking.jsx";


export default function App() {
  return (
    <BrowserRouter>
      {/* <AuthProvider> */}
        <Routes>
        <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/ranking' element={<Ranking/>} />
        </Routes>
      {/* </AuthProvider> */}
    </BrowserRouter>
  );
};
