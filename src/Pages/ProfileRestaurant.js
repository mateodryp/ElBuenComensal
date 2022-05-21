import React, { useContext, useEffect, useState } from 'react'
import aside_restaurant_profile_selected from '../Statics/img/aside_restaurant_profile_selected.png'
import aside_restaurant_stadistic_normal from '../Statics/img/aside_restaurant_stadistic_normal.png'
import aside_restaurant_stadistic_hover from '../Statics/img/aside_restaurant_stadistic_hover.png'
import aside_restaurant_home_normal from '../Statics/img/aside_restaurant_home_normal.png'
import aside_restaurant_home_hover from '../Statics/img/aside_restaurant_home_hover.png'
import aside_restaurant_comment_normal from '../Statics/img/aside_restaurant_comment_normal.png'
import aside_restaurant_comment_hover from '../Statics/img/aside_restaurant_comment_hover.png'
import aside_restaurant_suggestion_normal from '../Statics/img/aside_restaurant_suggestion_normal.png'
import aside_restaurant_suggestion_hover from '../Statics/img/aside_restaurant_suggestion_hover.png'
import aside_restaurant_complaint_normal from '../Statics/img/aside_restaurant_complaint_normal.png'
import aside_restaurant_complaint_hover from '../Statics/img/aside_restaurant_complaint_hover.png'
import aside_restaurant_logout_normal from '../Statics/img/aside_restaurant_logout_normal.png'
import aside_restaurant_logout_hover from '../Statics/img/aside_restaurant_logout_hover.png'
import AsideRestaurant from '../Components/AsideRestaurant';
import background_profile from '../Statics/img/background_profile.jpg'
import pdfImage from "../Statics/img/pdf_change.png";
import image from "../Statics/img/image.png";
import UserProvider, { UserContext } from '../Context/UserContext'


const ProfileRestaurant = () => {
    const { data, setData } = useContext(UserContext)

    const [menu, setMenu] = useState({
        state: 1,
        url: data["menu"]
    })

    const [images, setimages] = useState({
        state: 1
    })


    const [description, setDescription] = useState({
        state: 1,
        description: data["description"]
    })
    const [archivo, setArchivo] = useState("")
    const [archivoImage, setArchivoImage] = useState("")
    const [errorContact, seterrorContact] = useState("")
    const [errorRestaurant, seterrorRestaurant] = useState("")
    const [errorExtra, seterrorExtra] = useState("")
    const [errorMenu, seterrorMenu] = useState("")
    const [errorDescription, seterrorDescription] = useState("")
    const [errorImages, seterrorImages] = useState("")
    const [errorEtiqueta, seterrorEtiqueta] = useState("")

    const [inf_cont, setInfcont] = useState({
        state: 1,
        name: data["name_representative"],
        last_name: data["last_name_representative"],
        email: data["email"],
        phone: data["phone_number_representative"]
    })
    const [inf_ext, setInfext] = useState({
        state: 1,
        type_food: data["type_food"],
        schedule: data["schedule"],
    })

    const [inf_res, setInfres] = useState({
        state: 1,
        name: data["name"],
        address: data["address"],
        neighborhood: data["neighborhood"],
        phone: data["phone_number"],
        prices: data["prices"]
    })

    var option_home = null
    var option_stadistic = null
    var option_comment = null
    var option_suggestion = null
    var option_complaint = null
    var option_profile = null
    var option_logout = null



    const handleChange = (e) => {
        setInfcont({
            ...inf_cont,
            [e.target.name]: e.target.value,
        });
    }

    const handleChangeExtra = (e) => {
        setInfext({
            ...inf_ext,
            [e.target.name]: e.target.value,
        });
    }

    const handleChangeDescription = (e) => {
        setDescription({
            ...description,
            [e.target.name]: e.target.value,
        });
    }

    const editInformationContactsButton = (e) => {
        e.preventDefault();
        var refName = document.getElementById("info_contacts_name")
        var refLast_name = document.getElementById("info_contacts_last_name")
        var refEmail = document.getElementById("info_contacts_email")
        var refPhone_number = document.getElementById("info_contacts_phone")
        refName.readOnly = false
        refLast_name.readOnly = false
        refEmail.readOnly = false
        refPhone_number.readOnly = false
        setInfcont(2)
    }

    const cancelContactsButton = (e) => {
        e.preventDefault();
        var refResponse = document.getElementById("contacts_response")
        refResponse.style.display = "none"
        setInfcont({
            state: 1,
            name: data["name_representative"],
            last_name: data["last_name_representative"],
            email: data["email"],
            phone: data["phone_number_representative"]
        })
    }

    const sendContactsButton = async (e) => {
        e.preventDefault();
        var refName = document.getElementById("info_contacts_name")
        var refLast_name = document.getElementById("info_contacts_last_name")
        var refEmail = document.getElementById("info_contacts_email")
        var refPhone_number = document.getElementById("info_contacts_phone")
        var refResponse = document.getElementById("contacts_response")

        const formData = new FormData();
        if (refName.value !== "" && refLast_name.value !== "" && refEmail.value !== "" && refPhone_number.value !== "") {
            formData.append("email", refEmail.value)
            formData.append("name_representative", refName.value)
            formData.append("last_name_representative", refLast_name.value)
            formData.append("phone_number_representative", refPhone_number.value)
            try {
                const resPut = await fetch("http://144.22.197.146:8000/restaurants/update_contact/" + data["id_restaurant"], {
                    method: 'PUT',
                    body: formData,
                })
                const put = await resPut.json()
                if (put["code"] === 1) {
                    seterrorContact("¡Datos actualizados, para visualizar los cambios debe volver a iniciar sesión!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                        setInfcont({
                            state: 1,
                            name: data["name_representative"],
                            last_name: data["last_name_representative"],
                            email: data["email"],
                            phone: data["phone_number_representative"]
                        })
                    }, 5000);
                } else {
                    seterrorContact("¡Correo electrónico en uso, por favor ingrese uno nuevo!")
                    refResponse.style.display = "flex"
                }

            } catch (e) {
                console.log(e)
            }
        } else {
            seterrorContact("¡Por favor llenar todos los campos!")
            refResponse.style.display = "flex"
        }
    }


    const editInformationRestaurantButton = (e) => {
        e.preventDefault();
        var refName = document.getElementById("info_res_name")
        var refAddress = document.getElementById("info_res_address")
        var refNeighborhood = document.getElementById("info_res_neighborhood")
        var refPhone_number = document.getElementById("info_res_phone")
        var refPrices = document.getElementById("info_res_prices")
        refName.readOnly = false
        refAddress.readOnly = false
        refNeighborhood.readOnly = false
        refPhone_number.readOnly = false
        refPrices.readOnly = false
        setInfres(2)
    }

    const cancelRestaurantButton = (e) => {
        e.preventDefault();
        var refResponse = document.getElementById("restaurant_response")
        refResponse.style.display = "none"
        setInfres({
            state: 1,
            name: data["name"],
            address: data["address"],
            neighborhood: data["neighborhood"],
            phone: data["phone_number"],
            prices: data["prices"]
        })
    }

    const sendRestaurantButton = async (e) => {
        e.preventDefault();
        var refName = document.getElementById("info_res_name")
        var refAddress = document.getElementById("info_res_address")
        var refNeighborhood = document.getElementById("info_res_neighborhood")
        var refPhone_number = document.getElementById("info_res_phone")
        var refPrices = document.getElementById("info_res_prices")
        var refResponse = document.getElementById("restaurant_response")

        const formData = new FormData();
        if (refName.value !== "" && refNeighborhood.value !== "" && refAddress.value !== "" && refPhone_number.value !== "" && refPrices.value !== "") {
            formData.append("name", refName.value)
            formData.append("address", refAddress.value)
            formData.append("neighborhood", refNeighborhood.value)
            formData.append("phone_number", refPhone_number.value)
            formData.append("prices", refPrices.value)
            try {
                const resPut = await fetch("http://144.22.197.146:8000/restaurants/update_restaurant/" + data["id_restaurant"], {
                    method: 'PUT',
                    body: formData,
                })
                const put = await resPut.json()
                if (put["code"] === 1) {
                    seterrorRestaurant("¡Datos actualizados, para visualizar los cambios debe volver a iniciar sesión!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                        setInfres({
                            state: 1,
                            name: data["name"],
                            address: data["address"],
                            neighborhood: data["neighborhood"],
                            phone: data["phone_number"],
                            prices: data["prices"]
                        })
                    }, 5000);
                }
            } catch (e) {
                console.log(e)
            }
        } else {
            seterrorRestaurant("¡Por favor llenar todos los campos!")
            refResponse.style.display = "flex"
        }


    }

    const openMenu = (e) => {
        e.preventDefault();
        window.open("http://144.22.197.146:8000" + data["menu"])
    }

    const handleFileSelect = (e) => {
        setArchivo({
            archivo: e.target.files[0],
            archivoNombre: e.target.files[0].name
        })

    }

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

    const sendMenu = async (e) => {
        e.preventDefault();
        var refResponse = document.getElementById("menu_response")
        if (archivo.archivo) {
            const formData = new FormData();
            formData.append("menu", archivo.archivo)
            try {
                const resPut = await fetch("http://144.22.197.146:8000/restaurants/update_menu/" + data["id_restaurant"], {
                    method: 'PUT',
                    body: formData,
                })
                const put = await resPut.json()
                if (put["code"] === 1) {
                    seterrorMenu("¡Menú actualizado, para visualizar los cambios debe volver a iniciar sesión!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                        setMenu({
                            state: 1,
                            url: data["menu"]
                        })
                    }, 5000);
                }

            } catch (e) {
                console.log(e)
            };

        } else {
            seterrorMenu("¡Por favor seleccione un archivo!")
            refResponse.style.display = "flex"

        }
    }

    const editInformationExtraButton = (e) => {
        e.preventDefault();
        var refTipo = document.getElementById("info_ext_tipo")
        var refHorario = document.getElementById("info_ext_horario")
        refTipo.readOnly = false
        refHorario.readOnly = false
        setInfext(2)
    }

    const cancelarInformationExtraButton = (e) => {
        e.preventDefault();
        var refTipo = document.getElementById("info_ext_tipo")
        var refHorario = document.getElementById("info_ext_horario")
        refTipo.readOnly = true
        refHorario.readOnly = true
        setInfext({
            state: 1,
            type_food: data["type_food"],
            schedule: data["schedule"],
        })
    }

    const sendExtraInfo = async (e) => {
        e.preventDefault();
        var refTipo = document.getElementById("info_ext_tipo")
        var refHorario = document.getElementById("info_ext_horario")
        var refResponse = document.getElementById("extra_response")
        if (refTipo.value !== "" && refHorario.value !== "") {
            console.log("entre")
            const formData = new FormData();
            formData.append("type_food", refTipo.value)
            formData.append("schedule", refHorario.value)
            try {
                const resPut = await fetch("http://144.22.197.146:8000/restaurants/update_info/" + data["id_restaurant"] + "/", {
                    method: 'PUT',
                    body: formData,
                })
                const put = await resPut.json()
                console.log(put)
                if (put["code"] === 1) {
                    seterrorExtra("¡Información actualizada, para visualizar los cambios debe volver a iniciar sesión!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                        setInfext({
                            state: 1,
                            type_food: data["type_food"],
                            schedule: data["schedule"],
                        })
                    }, 5000);
                }

            } catch (e) {
                console.log(e)
            };

        } else {
            seterrorExtra("¡Por favor llenar todos los campos!")
            refResponse.style.display = "flex"

        }
    }



    const editInformationDescriptionButton = (e) => {
        e.preventDefault();
        var refDescription = document.getElementById("restaurant_description")
        refDescription.readOnly = false
        setDescription(2)
    }

    const cancelDescriptionButton = (e) => {
        e.preventDefault();
        var refDescription = document.getElementById("restaurant_description")
        refDescription.readOnly = true
        var refResponse = document.getElementById("description_response")
        refResponse.style.display = "none"
        setDescription({
            state: 1,
            description: data["description"]
        })
    }

    const sendDescription = async (e) => {
        e.preventDefault();
        var refDescription = document.getElementById("restaurant_description")
        var refResponse = document.getElementById("description_response")
        if (refDescription.value !== "") {
            const formData = new FormData();
            formData.append("description", refDescription.value)
            try {
                const resPut = await fetch("http://144.22.197.146:8000/restaurants/update_description/" + data["id_restaurant"], {
                    method: 'PUT',
                    body: formData,
                })
                const put = await resPut.json()
                console.log(put)
                if (put["code"] === 1) {
                    seterrorDescription("¡Descripción actualizada, para visualizar los cambios debe volver a iniciar sesión!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                        setDescription({
                            state: 1,
                            description: data["description"]
                        })
                    }, 5000);
                }

            } catch (e) {
                console.log(e)
            };

        } else {
            seterrorDescription("¡Por favor llenar todos los campos!")
            refResponse.style.display = "flex"

        }
    }

    const cancelImageButton = (e) => {
        e.preventDefault();
        var refResponse = document.getElementById("images_response")
        refResponse.style.display = "none"
        setimages({
            state: 1
        })
        setArchivoImage({})
    }

    const sendImages = async (e) => {
        e.preventDefault();
        var refResponse = document.getElementById("images_response")
        if (archivoImage.Imagenes) {
            const formData = new FormData();
            console.log(archivoImage.Imagenes)
            formData.append("restaurant", parseInt(data["id_restaurant"], 10))
            for (var i = 0; i < archivoImage.Imagenes.length; i++) {
                formData.append("imagen", archivoImage.Imagenes[i])
            }

            try {
                const resPost = await fetch("http://144.22.197.146:8000/restaurants/gallery/", {
                    method: 'POST',
                    body: formData
                })
                const post = await resPost.json()
                console.log(post)
                if (post["code"] === 1) {
                    console.log("correcto")
                    seterrorImages("¡Imagenes actualizadas!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                        setimages({
                            state: 1
                        })
                    }, 5000);
                }

            } catch (e) {
                console.log(e)
            };

        } else {
            seterrorImages("¡Por favor seleccione al menos una imagen!")
            refResponse.style.display = "flex"

        }
    }

    const addEtiqueta = async (e) => {
        e.preventDefault();
        var refetiqueta = document.getElementById("field_add_etiqueta")
        var refResponse = document.getElementById("etiquetas_response")
        if (refetiqueta.value !== "") {
            const formData = new FormData();
            formData.append("restaurant", data["id_restaurant"])
            formData.append("tags", refetiqueta.value)
            try {
                const resPut = await fetch("http://144.22.197.146:8000/restaurants/tags/", {
                    method: 'POST',
                    body: formData,
                })
                const post = await resPut.json()
                console.log(post)
                if (post["code"] === 1) {
                    seterrorEtiqueta("¡Etiqueta agregada, para visualizar los cambios debe volver a iniciar sesión!")
                    refResponse.style.color = "#A3D818"
                    refResponse.style.display = "flex"

                    setTimeout(() => {
                        refResponse.style.color = "red"
                        refResponse.style.display = "none"
                    }, 5000);
                } else {
                    seterrorEtiqueta("¡Etiqueta ya existe!")
                    refResponse.style.color = "red"
                    refResponse.style.display = "flex"
                    setTimeout(() => {
                        refResponse.style.display = "none"
                    }, 5000);
                }

            } catch (e) {
                console.log(e)
            };

        } else {
            seterrorEtiqueta("¡Por favor llenar todos los campos!")
            refResponse.style.display = "flex"

        }
    }

    const deleteEtiqueta = async (e) => {
        e.preventDefault();
        let id_etiqueta = e.currentTarget.id
        var refResponse = document.getElementById("etiquetas_response")
        try {
            const resDel = await fetch("http://144.22.197.146:8000/restaurants/tags_delete/"+id_etiqueta+"/", {
                method: 'DELETE',
            })
            const del = await resDel.json()
            console.log(del)
            if (del["code"] === 1) {
                seterrorEtiqueta("¡Etiqueta eliminada, para visualizar los cambios debe volver a iniciar sesión!")
                refResponse.style.color = "#A3D818"
                refResponse.style.display = "flex"

                setTimeout(() => {
                    refResponse.style.color = "red"
                    refResponse.style.display = "none"
                }, 5000);

        } 
        }catch (e) {
            console.log(e)
        };
    }


    const addEventHomeHoverIn = (e) => {
        option_home.style.content = 'url(' + aside_restaurant_home_hover + ')'
        document.getElementById("title_modal_menu_home").style.display = "flex"
    }
    const addEventHomeHoverOut = (e) => {
        option_home.style.content = 'url(' + aside_restaurant_home_normal + ')'
        document.getElementById("title_modal_menu_home").style.display = "none"
    }

    const addEventStadisticHoverIn = (e) => {
        option_stadistic.style.content = 'url(' + aside_restaurant_stadistic_hover + ')'
        document.getElementById("title_modal_menu_stadistics").style.display = "flex"
    }
    const addEventStadisticHoverOut = (e) => {
        option_stadistic.style.content = 'url(' + aside_restaurant_stadistic_normal + ')'
        document.getElementById("title_modal_menu_stadistics").style.display = "none"
    }
    const addEventCommentHoverIn = (e) => {
        option_comment.style.content = 'url(' + aside_restaurant_comment_hover + ')'
        document.getElementById("title_modal_menu_comments").style.display = "flex"
    }
    const addEventCommentHoverOut = (e) => {
        option_comment.style.content = 'url(' + aside_restaurant_comment_normal + ')'
        document.getElementById("title_modal_menu_comments").style.display = "none"
    }
    const addEventSuggestionHoverIn = (e) => {
        option_suggestion.style.content = 'url(' + aside_restaurant_suggestion_hover + ')'
        document.getElementById("title_modal_menu_suggestions").style.display = "flex"
    }
    const addEventSuggestionHoverOut = (e) => {
        option_suggestion.style.content = 'url(' + aside_restaurant_suggestion_normal + ')'
        document.getElementById("title_modal_menu_suggestions").style.display = "none"
    }
    const addEventComplaintHoverIn = (e) => {
        option_complaint.style.content = 'url(' + aside_restaurant_complaint_hover + ')'
        document.getElementById("title_modal_menu_complaints").style.display = "flex"
    }
    const addEventComplaintHoverOut = (e) => {
        option_complaint.style.content = 'url(' + aside_restaurant_complaint_normal + ')'
        document.getElementById("title_modal_menu_complaints").style.display = "none"
    }

    const addEventLogoutHoverIn = (e) => {
        option_logout.style.content = 'url(' + aside_restaurant_logout_hover + ')'
        document.getElementById("title_modal_menu_logout").style.display = "flex"
    }
    const addEventLogoutHoverOut = (e) => {
        option_logout.style.content = 'url(' + aside_restaurant_logout_normal + ')'
        document.getElementById("title_modal_menu_logout").style.display = "none"
    }

    useEffect(() => {
        option_home = document.getElementById("aside_restaurant_home")
        option_stadistic = document.getElementById("aside_restaurant_stadistic")
        option_comment = document.getElementById("aside_restaurant_comment")
        option_suggestion = document.getElementById("aside_restaurant_suggestion")
        option_complaint = document.getElementById("aside_restaurant_complaint")
        option_profile = document.getElementById("aside_restaurant_profile")
        option_logout = document.getElementById("aside_restaurant_logout")

        option_profile.style.content = 'url(' + aside_restaurant_profile_selected + ')'

        option_home.addEventListener('mouseover', addEventHomeHoverIn, false)
        option_home.addEventListener('mouseleave', addEventHomeHoverOut, false)

        option_stadistic.addEventListener('mouseover', addEventStadisticHoverIn, false)
        option_stadistic.addEventListener('mouseleave', addEventStadisticHoverOut, false)

        option_comment.addEventListener('mouseover', addEventCommentHoverIn, false)
        option_comment.addEventListener('mouseleave', addEventCommentHoverOut, false)

        option_suggestion.addEventListener('mouseover', addEventSuggestionHoverIn, false)
        option_suggestion.addEventListener('mouseleave', addEventSuggestionHoverOut, false)

        option_complaint.addEventListener('mouseover', addEventComplaintHoverIn, false)
        option_complaint.addEventListener('mouseleave', addEventComplaintHoverOut, false)

        option_logout.addEventListener('mouseover', addEventLogoutHoverIn, false)
        option_logout.addEventListener('mouseleave', addEventLogoutHoverOut, false)

        return () => {
            option_stadistic.removeEventListener('mouseover', addEventStadisticHoverIn, false)
            option_stadistic.removeEventListener('mouseleave', addEventStadisticHoverOut, false)
            option_comment.removeEventListener('mouseover', addEventCommentHoverIn, false)
            option_comment.removeEventListener('mouseleave', addEventCommentHoverOut, false)
            option_suggestion.removeEventListener('mouseover', addEventSuggestionHoverIn, false)
            option_suggestion.removeEventListener('mouseleave', addEventSuggestionHoverOut, false)
            option_complaint.removeEventListener('mouseover', addEventComplaintHoverIn, false)
            option_complaint.removeEventListener('mouseleave', addEventComplaintHoverOut, false)
            option_home.removeEventListener('mouseover', addEventHomeHoverIn, false)
            option_home.removeEventListener('mouseleave', addEventHomeHoverOut, false)
            option_logout.removeEventListener('mouseover', addEventLogoutHoverIn, false)
            option_logout.removeEventListener('mouseleave', addEventLogoutHoverOut, false)
        }

    }, [])

    return (
        <div class="main_restaurant">
            <AsideRestaurant />
            <div className="main_restaurant_content">
                <div class="main_restaurant_content_header">
                    <h2>Editar Perfil</h2>
                    <h2>{data["name"]}</h2>
                </div>
                <div className="main_restaurant_content_image">
                    <img src={background_profile} alt="" />
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Información de contacto</h3>
                </div>
                <div className="main_restaurant_content_infoc_contact_content">
                    <form action="" className="form_infoc">
                        <div className="form_infoc_contacts">
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Nombre: </label>
                                <input type="text" name="" id="info_contacts_name" readOnly value={inf_cont["name"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Apellido: </label>
                                <input type="text" name="" id="info_contacts_last_name" readOnly value={inf_cont["last_name"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Email: </label>
                                <input type="email" name="" id="info_contacts_email" readOnly value={inf_cont["email"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Telefono: </label>
                                <input type="tel" name="" id="info_contacts_phone" readOnly value={inf_cont["phone"]} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form_infoc_contacts_buttons">
                            {inf_cont["state"] === 1 ?
                                <div className="form_infoc_contacts_buttons_button">
                                    <button onClick={editInformationContactsButton}>Editar Información</button>
                                </div>
                                :
                                <>
                                    <div className="form_infoc_contacts_buttons_button">
                                        <button onClick={cancelContactsButton}>Cancelar</button>
                                    </div>
                                    <div className="form_infoc_contacts_buttons_button">
                                        <button onClick={sendContactsButton}>Guardar</button>
                                    </div>
                                </>
                            }
                        </div>

                        <div className="form_infoc_contacts_response" id="contacts_response">
                            <h3>{errorContact}</h3>
                        </div>

                    </form>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Información del restaurante</h3>
                </div>
                <div className="main_restaurant_content_infoc_contact_content">
                    <form action="" className="form_infoc">
                        <div className="form_infoc_contacts">
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Nombre: </label>
                                <input type="text" name="" id="info_res_name" readOnly value={inf_res["name"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Dirección: </label>
                                <input type="text" name="" id="info_res_address" readOnly value={inf_res["address"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Barrio: </label>
                                <input type="email" name="" id="info_res_neighborhood" readOnly value={inf_res["neighborhood"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Telefono: </label>
                                <input type="tel" name="" id="info_res_phone" readOnly value={inf_res["phone"]} onChange={handleChange} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="">Precio promedio: </label>
                                <input type="tel" name="" id="info_res_prices" readOnly value={inf_res["prices"]} onChange={handleChange} />
                            </div>
                        </div>

                        <div className="form_infoc_contacts_buttons">
                            {inf_res["state"] === 1 ?
                                <div className="form_infoc_contacts_buttons_button">
                                    <button onClick={editInformationRestaurantButton}>Editar Información</button>
                                </div>
                                :
                                <>
                                    <div className="form_infoc_contacts_buttons_button">
                                        <button onClick={cancelRestaurantButton}>Cancelar</button>
                                    </div>
                                    <div className="form_infoc_contacts_buttons_button">
                                        <button onClick={sendRestaurantButton}>Guardar</button>
                                    </div>
                                </>
                            }
                        </div>

                        <div className="form_infoc_contacts_response" id="restaurant_response">
                            <h3>{errorRestaurant}</h3>
                        </div>

                    </form>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Información extra</h3>
                </div>
                <div className="main_restaurant_content_infoc_contact_content">
                    <form action="" className="form_infoc">
                        <div className="form_infoc_contacts">
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="tipo_comida">Tipo de comida: </label>
                                <input type="text" name="tipo_comida" id="info_ext_tipo" readOnly value={inf_ext["type_food"]} onChange={handleChangeExtra} />
                            </div>
                            <div className="form_infoc_contacts_input">
                                <label htmlFor="horario">Horario: </label>
                                <input type="text" name="horario" id="info_ext_horario" readOnly value={inf_ext["schedule"]} onChange={handleChangeExtra} />
                            </div>
                        </div>

                        <div className="form_infoc_contacts_buttons">
                            {inf_ext["state"] === 1 ?
                                <div className="form_infoc_contacts_buttons_button">
                                    <button onClick={editInformationExtraButton}>Editar Información</button>
                                </div>
                                :
                                <>
                                    <div className="form_infoc_contacts_buttons_button">
                                        <button onClick={cancelarInformationExtraButton}>Cancelar</button>
                                    </div>
                                    <div className="form_infoc_contacts_buttons_button">
                                        <button onClick={sendExtraInfo}>Guardar</button>
                                    </div>
                                </>
                            }
                        </div>

                        <div className="form_infoc_contacts_response" id="extra_response">
                            <h3>{errorExtra}</h3>
                        </div>

                    </form>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Menú del restaurante</h3>
                </div>
                <div className='main_restaurant_content_infoc_menu'>
                    <div className="main_restaurant_content_infoc_menu_pdf">
                        {menu["state"] === 1 ?
                            <>
                                <input type="file" name="file_menu_restaurant" id="file_menu_restaurant" accept=".pdf" onClick={openMenu} />
                                <label htmlFor="file_menu_restaurant" >
                                    <img src={pdfImage} alt="" />
                                    <h3>Descargar Menú actual</h3>
                                </label>
                                <button onClick={() => setMenu({ state: 2 })}>Cambiar Menu</button>
                            </>
                            :

                            <>
                                <input type="file" name="file_menu_restaurant" id="file_menu_restaurant" accept=".pdf" onChange={handleFileSelect} />
                                <label htmlFor="file_menu_restaurant" >
                                    <img src={pdfImage} alt="" />
                                    <h3>{archivo.archivo ? archivo.archivoNombre : "No ha seleccionado ningun archivo"}</h3>
                                </label>
                                <button onClick={sendMenu}>Enviar</button>

                            </>
                        }
                    </div>
                    <div className="form_infoc_contacts_response" id="menu_response">
                        <h3>{errorMenu}</h3>
                    </div>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Descripción del restaurante</h3>
                </div>
                <div className='main_restaurant_content_infoc_description'>
                    <div className='main_restaurant_content_infoc_description_text'>
                        <textarea name="" id="restaurant_description" cols="70" readOnly rows="10" value={description["description"]} onChange={handleChangeDescription}> </textarea>
                    </div>
                    <div className='main_restaurant_content_infoc_description_buttons'>
                        {description["state"] === 1 ?
                            <>
                                <button onClick={editInformationDescriptionButton}>Editar Información</button>
                            </>
                            :

                            <>
                                <button onClick={cancelDescriptionButton}>Cancelar</button>
                                <button onClick={sendDescription}>Actualizar</button>
                            </>
                        }

                    </div>
                    <div className="form_infoc_contacts_response" id="description_response">
                        <h3>{errorDescription}</h3>
                    </div>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Fotos del restaurante</h3>
                </div>
                <div className="main_restaurant_content_infoc_photos">
                    <div className="main_restaurant_content_infoc_photos_photo">
                        {images["state"] === 1 ?
                            <>
                                <input type="file" name="file_images_restaurant" id="file_menu_restaurant" />
                                <label htmlFor="file_images_restaurant" >
                                    <img src={image} alt="" />
                                    <h3>Ya ha subido imagenes</h3>
                                </label>
                                <button onClick={() => setimages({ state: 2 })}>Cambiar fotos</button>
                            </>
                            :

                            <>
                                <input type="file" multiple name="file_images_restaurant_select" id="file_images_restaurant_select" accept="image/*" onChange={handleImageSelect} />
                                <label htmlFor="file_images_restaurant_select" >
                                    <img src={image} alt="" />
                                    <h3>{archivoImage.size ? "Ha seleccionado " + archivoImage.size + " imagenes" : "No ha seleccionado ningun archivo"}</h3>
                                </label>
                                <div className='main_restaurant_content_infoc_photos_photo_buttons'>
                                    <button onClick={cancelImageButton} >Cancelar</button>
                                    <button onClick={sendImages}>Actualizar</button>
                                </div>

                            </>
                        }
                    </div>
                    <div className="form_infoc_contacts_response" id="images_response">
                        <h3>{errorImages}</h3>
                    </div>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Etiquetas del restaurante</h3>
                </div>
                <div className="main_restaurant_content_etiquetas">
                    <div className="main_restaurant_content_etiquetas_field">
                        <label htmlFor="etiqueta">Nombre de etiqueta:</label>
                        <input type="text" name="etiqueta" id="field_add_etiqueta" />
                        <button onClick={addEtiqueta}>Añadir</button>
                    </div>
                    <div className="main_restaurant_content_etiquetas_list">
                        <h3>Lista de etiquetas activas</h3>
                        {Object.entries(data["tags"]).map(element => {
                            return (
                                <div key={element[1].id_tags} className="main_restaurant_content_etiquetas_list_etiqueta">
                                    <h4>{element[1].tags}</h4>
                                    <button id={element[1].id_tags} onClick={deleteEtiqueta}>X</button>
                                </div>)
                        })}

                    </div>
                    <div className="form_infoc_contacts_response" id="etiquetas_response">
                        <h3>{errorEtiqueta}</h3>
                    </div>

                </div>
                <div className="espacio"></div>

            </div>

        </div>

    )
}

export default ProfileRestaurant