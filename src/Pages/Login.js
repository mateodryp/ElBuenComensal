import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hamburguer from '../Statics/img/Hamburguer.png'
import arrow from "../Statics/img/arrow.png";

const Login = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="row_back" onClick={() => { navigate("/"); }}>
                <img src={arrow} alt="" />
                <h2>Atras</h2>
            </div>
            <main class="main_login">
                <div class="main_login_elements">
                    <div class="main_login_element_form">
                        <div class="main_login_element_form_title">
                            <h1>Iniciar Sesión</h1>
                        </div>
                        <form class="main_login_element_form_form">
                            <input class="main_login_element_form_form_input" placeholder="Correo Electrónico" type="text" />
                            <input class="main_login_element_form_form_input" placeholder="Contraseña" type="password" />
                            <Link to="/" class="main_login_element_form_form_linkN">Olvidé mi contraseña</Link>
                            <button class="main_login_element_form_form_button">Ingresar</button>
                            <Link to="/Register" class="main_login_element_form_form_linkG">Registrarme</Link>
                        </form>
                    </div>
                    <div class="main_login_element_image">
                        <img src={hamburguer} alt="" />
                    </div>
                </div>
            </main>
        </>
    )
}

export default Login