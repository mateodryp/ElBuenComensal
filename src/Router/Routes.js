import {BrowserRouter,Route,Routes,} from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
  

const ListRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Register" element={<Register/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default ListRoutes;