import {BrowserRouter,Route,Routes,} from "react-router-dom";
import ComoFunciona from "../Pages/ComoFunciona";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import HomeRestaurant from "../Pages/HomeRestaurant";
import StadisticsRestaurant from "../Pages/StadisticsRestaurant";
import CommentsRestaurant from "../Pages/CommentsRestaurant";
import SuggestionsRestaurant from "../Pages/SuggestionsRestaurant";
import ComplaintsRestaurant from "../Pages/ComplaintsRestaurant";
import ProfileRestaurant from "../Pages/ProfileRestaurant";

const ListRoutes = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<HomeRestaurant/>}/>
            <Route exact path="/Home/Profile" element={<ProfileRestaurant/>}/>
            <Route exact path="/Home/Stadistics" element={<StadisticsRestaurant/>}/>
            <Route exact path="/Home/Comments" element={<CommentsRestaurant/>}/>
            <Route exact path="/Home/Suggestions" element={<SuggestionsRestaurant/>}/>
            <Route exact path="/Home/Complaints" element={<ComplaintsRestaurant/>}/>
            <Route exact path="/Login" element={<Login/>}/>
            <Route exact path="/Register" element={<Register/>}/>
            <Route exact path="/ComoFunciona" element={<ComoFunciona/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default ListRoutes;