import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hamburguer from '../Statics/img/Hamburguer.png'
import arrow from "../Statics/img/arrow.png";

const Login = () => {

    const requestLogin = async (e) => {
        e.preventDefault()
        let refUser = document.getElementById("correoElectronico")
        let refPassword = document.getElementById("contraseña")

        if (refUser.value !== "" && refPassword.value !== "") {
            const formData = new FormData();
            formData.append("email", refUser.value)
            formData.append("password", refPassword.value)

            try {
                const resPost = await fetch("http://144.22.197.146:8000/restaurants/login/", {
                    method: 'POST',
                    body: formData,
                })
                const post = await resPost.json()
                console.log(post)
            } catch (e) {
                console.log(e)
            };
        }
    }
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
                        <form class="main_login_element_form_form" onSubmit={requestLogin}>
                            <input class="main_login_element_form_form_input" placeholder="Correo Electrónico" type="text" name='CorreoElectronico' id="correoElectronico" />
                            <input class="main_login_element_form_form_input" placeholder="Contraseña" type="password" name='Contraseña' id="contraseña" />
                            <Link to="/" class="main_login_element_form_form_linkN">Olvidé mi contraseña</Link>
                            <button class="main_login_element_form_form_button" type='submit'>Ingresar</button>
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