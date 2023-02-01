import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
function App() {
  return (
    <>
      <Navbar/>
        <Routes>
          {/* here we are defining the path . on that path which page should be render */}
          <Route  path='/' element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path='/signup' element={<Signup/>} />
        </Routes>
    </>
  );
}

export default App;
