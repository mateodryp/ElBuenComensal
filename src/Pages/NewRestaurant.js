import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from "../Statics/img/image.png";
import UserProvider, { UserContext } from '../Context/UserContext'

const NewRestaurant = () => {
    const navigate = useNavigate("");
    const { data, setData } = useContext(UserContext)
    const [archivoImage, setArchivoImage] = useState({
        size: 0
    })

    const [titleModal, settitleModal] = useState("")
    const [messageModal, setmessageModal] = useState("")

    const handleImageSelect = (e) => {
        var Images = []
        Array.from(e.target.files).forEach(image => {
            Images.push(image)
        })
        setArchivoImage({
            Imagenes: Images,
            size: Images.length
        })
    }

    const handleClose = (e) => {
        const modal = document.getElementById("modalInfo")
        if (modal !== null) {
            modal.style.display = "none"
            
        }

    }

    const requestSend = async (e) => {
        e.preventDefault()
        let modal = document.getElementById("modalInfo")
        let typeRestaurant = document.getElementById("TipoRestaurante");
        let typeEnviroment = document.getElementById("TipoAmbiente");
        let horario = document.getElementById("Horario");
        let vegan = document.querySelector('input[name="vegan"]:checked');
        console.log(vegan)

        if(horario.value !== "" && vegan !== null && archivoImage.size !== 0){
            const formData = new FormData();
            formData.append("restaurant", data["id_restaurant"])
            formData.append("schedule", horario.value)
            formData.append("type_food", typeRestaurant.value)
            formData.append("environment", typeEnviroment.value)
            formData.append("vegetarian", vegan.value)

            for (var i = 0; i < archivoImage.Imagenes.length; i++) {
                formData.append("imagen", archivoImage.Imagenes[i])
            }

            const resPost = await fetch("http://144.22.197.146:8000/restaurants/restaurant_info/",{
            method: 'PUT',
            body: formData,
            })
            const post = await resPost.json()
            if(post["code"] ===1){
                navigate("/Home");
            }else{
                settitleModal("¡Ocurrio un problema!")
                setmessageModal("Por favor intente mas tarde")
                modal.style.display = "flex"
            }
            

        }else{
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
            <main className="infoRestaurant">
                <div className="infoRestaurant_content">
                    <div className="InfoRestaurant_content_title">
                        <h2>Información Adicional</h2>
                    </div>
                    <div className="InfoRestaurant_content_subtitle">
                        <p>Para empezar, necesitamos la siguiente información para publicar tu restaurante en la aplicación</p>
                    </div>
                    <form className="InfoRestaurant_content_form" onSubmit={requestSend}>
                        <div className="InfoRestaurant_content_form_fields">
                            <div className="InfoRestaurant_content_form_container">
                                <div className="InfoRestaurant_content_form_select">
                                    <h3>Tipo de restaurante</h3>
                                    <select name="TipoRestaurante" id="TipoRestaurante" >
                                        <option value="Restaurante Gourmet">Restaurante Gourmet</option>
                                        <option value="Restaurante familiar">Restaurante familiar</option>
                                        <option value="Restaurante tipo Buffet">Restaurante tipo Buffet</option>
                                        <option value="Restaurante Tematico">Restaurante Tematico</option>
                                        <option value="Comida Rapida">Comida Rapida</option>
                                     </select>
                                </div>
                                <div className="InfoRestaurant_content_form_select">
                                    <h3>Tipo de ambiente</h3>
                                    <select name="TipoAmbiente" id="TipoAmbiente" >
                                        <option value="Ambiente Familiar">Ambiente Familiar</option>
                                        <option value="Ambiente Friends">Ambiente Friends</option>
                                        <option value="Ambiente Solitario">Ambiente Solitario</option>
                                     </select>
                                </div>
                            </div>
                            <div className="InfoRestaurant_content_form_container">
                                <div className="InfoRestaurant_content_form_field">
                                    <h3>Horario</h3>
                                    <input type="text" name='Horario' id='Horario'  />
                                </div>
                                <div className="InfoRestaurant_content_form_radio">
                                    <h3>¿Ofrece comida vegetariana?</h3>
                                    <div className="radio_options">
                                       <div className="radio_option">
                                          <label htmlFor="">Si</label>    
                                          <input type="radio" name="vegan" id="" value="1" />
                                       </div>
                                       <div className="radio_option">
                                          <label htmlFor="">No</label>    
                                          <input type="radio" name="vegan" id="" value="0" />
                                       </div>
                                    </div>
                                </div>
                            </div>
                            <div className="InfoRestaurant_content_form_container">
                                <div className="InfoRestaurant_content_form_images">
                                  <input type="file" multiple name="file_images_restaurant_initial"accept="image/*" id="file_images_restaurant_initial" onChange={handleImageSelect} />
                                    <label htmlFor="file_images_restaurant_initial" >
                                      <img src={image} alt="" className='InfoRestaurant_content_form_images_input_img'/>
                                      <h3 className='image_title'>{archivoImage.size ? "Ha seleccionado " + archivoImage.size + " imagenes" : "Subir imagenes"}</h3>
                                    </label>
                                </div>
                                <div className="InfoRestaurant_content_form_button">
                                    <button type='submit'>Enviar</button>
                                </div>
                            </div>
                        </div>
                        <div className="InfoRestaurant_content_form_button">
                            
                        </div>
                        
                    </form>
                </div>
            </main>
        </>
    )
}

export default NewRestaurant