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

import UserProvider, { UserContext } from '../Context/UserContext'


const ProfileRestaurant = () => {
    const { data, setData } = useContext(UserContext)
    const { menu, setMenu } = useState({
        state: 1,
        url: data["menu"]
    })
    const [inf_cont, setInfcont] = useState({
        state: 1,
        name: data["name_representative"],
        last_name: data["last_name_representative"],
        email: data["email"],
        phone: data["phone_number_representative"]
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
        var refName = document.getElementById("info_contacts_name")
        var refLast_name = document.getElementById("info_contacts_last_name")
        var refEmail = document.getElementById("info_contacts_email")
        var refPhone_number = document.getElementById("info_contacts_phone")
        setInfcont({
            state: 1,
            name: data["name_representative"],
            last_name: data["last_name_representative"],
            email: data["email"],
            phone: data["phone_number_representative"]
        })
    }

    const sendContactsButton = (e) => {
        e.preventDefault();

    }


    const editInformationRestaurantButton = (e) => {
        e.preventDefault();
        var refName = document.getElementById("info_res_name")
        var refAddress = document.getElementById("info_res_addres")
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
        setInfres({
            state: 1,
            name: data["name"],
            address: data["address"],
            neighborhood: data["neighborhood"],
            phone: data["phone_number"],
            prices: data["prices"]
        })
    }

    const sendRestaurantButton = (e) => {
        e.preventDefault();

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
                                <input type="text" name="" id="info_res_addres" readOnly value={inf_res["address"]} onChange={handleChange} />
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

                    </form>
                </div>
                <div className="main_restaurant_content_infoc_contact_header">
                    <h3>Menú del restaurante</h3>
                </div>
                <div className='main_restaurant_content_infoc_menu'>
                    <div className="main_restaurant_content_infoc_menu_pdf">
                        <input type="file" name="file_menu_restaurant" id="file_menu_restaurant" accept=".pdf" />
                        <label htmlFor="file_menu_restaurant" ><img src={pdfImage} alt="" /></label>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default ProfileRestaurant