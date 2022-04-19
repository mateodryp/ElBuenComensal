import React from 'react'

import { useNavigate } from "react-router-dom";
import restaurant_aside from '../Statics/img/restaurant_aside.png'
import aside_restaurant_home_normal from '../Statics/img/aside_restaurant_home_normal.png'
import aside_restaurant_stadistic_normal from '../Statics/img/aside_restaurant_stadistic_normal.png'
import aside_restaurant_comment_normal from '../Statics/img/aside_restaurant_comment_normal.png'
import aside_restaurant_suggestion_normal from '../Statics/img/aside_restaurant_suggestion_normal.png'
import aside_restaurant_complaint_normal from '../Statics/img/aside_restaurant_complaint_normal.png'
import aside_restaurant_logout_normal from '../Statics/img/aside_restaurant_logout_normal.png'
import aside_restaurant_profile_normal from '../Statics/img/aside_restaurant_profile_normal.png'

const AsideRestaurant = () => {
    const navigate = useNavigate("");
    return (
        <div class="main_restaurant_aside">
            <div class="main_restaurant_aside_logo">
                <img src={restaurant_aside} alt="" />
            </div>
            <div class="main_restaurant_aside_main_options">
                <div class="main_restaurant_aside_main_options_optionHome">
                    <img src={aside_restaurant_home_normal} alt="" id="aside_restaurant_home" onClick={() => { navigate("/") }} />
                    <div className="main_restaurant_aside_main_options_optionHome_title" id="title_modal_menu_home">
                        <h2>Inicio</h2>
                    </div>
                </div>
                <div class=" main_restaurant_aside_main_options_optionStadistic">
                    <img src={aside_restaurant_stadistic_normal} alt="" id="aside_restaurant_stadistic" onClick={() => { navigate("/Home/Stadistics") }} />
                    <div className="main_restaurant_aside_main_options_optionStadistic_title" id="title_modal_menu_stadistics">
                        <h2>Estadisticas</h2>
                    </div>
                </div>
                <div class=" main_restaurant_aside_main_options_optionComment">
                    <img src={aside_restaurant_comment_normal} alt="" id="aside_restaurant_comment" onClick={() => { navigate("/Home/Comments") }} />
                    <div className="main_restaurant_aside_main_options_optionComment_title" id="title_modal_menu_comments">
                        <h2>Comentarios</h2>
                    </div>
                </div>
                <div class=" main_restaurant_aside_main_options_optionSuggestion">
                    <img src={aside_restaurant_suggestion_normal} alt="" id="aside_restaurant_suggestion" onClick={() => { navigate("/Home/Suggestions") }} />
                    <div className="main_restaurant_aside_main_options_optionSuggestion_title" id="title_modal_menu_suggestions">
                        <h2>Sugerencias</h2>
                    </div>
                </div>
                <div class=" main_restaurant_aside_main_options_optionComplaint">
                    <img src={aside_restaurant_complaint_normal} alt="" id="aside_restaurant_complaint" onClick={() => { navigate("/Home/Complaints") }} />
                    <div className="main_restaurant_aside_main_options_optionComplaint_title" id="title_modal_menu_complaints">
                        <h2>Reclamos</h2>
                    </div>
                </div>
            </div>
            <div class=" main_restaurant_aside_config_options">
                <div class="main_restaurant_aside_config_options_optionProfile">
                    <img src={aside_restaurant_profile_normal} alt="" id="aside_restaurant_profile" onClick={() => { navigate("/Home/Profile") }} />
                    <div className="main_restaurant_aside_config_options_optionProfile_title" id="title_modal_menu_profile">
                        <h2>Editar Perfil</h2>
                    </div>
                </div>
                <div class="main_restaurant_aside_config_options_optionLogout">
                    <img src={aside_restaurant_logout_normal} alt="" id="aside_restaurant_logout" onClick={() => { navigate("/") }} />
                    <div className="main_restaurant_aside_config_options_optionLogout_title" id="title_modal_menu_logout">
                        <h2>Logout</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AsideRestaurant