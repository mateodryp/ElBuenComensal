import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import hamburguer from '../Statics/img/Hamburguer.png'
import arrow from "../Statics/img/arrow.png";
import { UserContext } from '../Context/UserContext';
import cryptoJs from 'crypto-js';


const Login = () => {


    const key = "10007226001007107960"
    const { data, setData } = useContext(UserContext)
    const [titleModal, settitleModal] = useState("")
    const [messageModal, setmessageModal] = useState("")
    const navigate = useNavigate("");


    const handleClose = (e) => {
        const modal = document.getElementById("modalInfo")
        if (modal !== null) {
            modal.style.display = "none"
            
        }

    }

    const requestLogin = async (e) => {
        e.preventDefault()
        let refUser = document.getElementById("correoElectronico")
        let refPassword = document.getElementById("contraseña")
        let modal = document.getElementById("modalInfo")

        if (refUser.value !== "" && refPassword.value !== "") {
            const formData = new FormData();
            formData.append("email", refUser.value)
            formData.append("password", refPassword.value)

            try {
                const resPost = await fetch("http://144.22.197.146:8000/restaurants/login/", {
                    method: 'POST',
                    body: formData,
                })
                if (resPost.status === 201) {
                    const post = await resPost.json()
                    setData({
                        ...data,
                        address: post.address,
                        description: post.description,
                        email: post.email,
                        id_restaurant: post.id_restaurant,
                        name_representative: post.name_representative,
                        last_name_representative: post.last_name_representative,
                        menu: post.menu,
                        name: post.name,
                        neighborhood: post.neighborhood,
                        phone_number: post.phone_number,
                        phone_number_representative: post.phone_number_representative,
                        prices: post.prices,
                        token: post.token,
                        type_food: post.type_food,
                        environment: post.environment,
                        vegetarian: post.vegetarian,
                        schedule: post.schedule,
                        new: post.new,
                        tags: post.tags
                    })
                    let encyrpted = cryptoJs.AES.encrypt(JSON.stringify(data), key)
                    localStorage.setItem("userInfo", encyrpted );
                    if(post.new === true){
                        navigate("/RestaurantInfo");
                    }else{
                        navigate("/Home");

                    }
                } else {
                    settitleModal("¡Usuario o contraseña incorrectos!")
                    setmessageModal("Por favor verifique sus credenciales")
                    modal.style.display = "flex"

                }
            } catch (e) {
                console.log(e)
            };
        } else {
            settitleModal("¡Llene todos los campos!")
            setmessageModal("Hay campos vacios en el formulario")
            modal.style.display = "flex"

        }
    }
    return (
        <>
            <div class="modalInfo" id="modalInfo">
                <div class="modalInfo_content">
                    <div class="modalInfo__text">
                        <h2>{titleModal}</h2>
                        <h3>{messageModal}</h3>
                    </div>
                    <div class="modalInfo__button">
                        <button onClick={handleClose}>Cerrar</button>
                    </div>
                </div>
            </div>
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