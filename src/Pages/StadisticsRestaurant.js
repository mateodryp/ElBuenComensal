import React, { useContext, useEffect, useState } from 'react'
import aside_restaurant_home_normal from '../Statics/img/aside_restaurant_home_normal.png'
import aside_restaurant_home_hover from '../Statics/img/aside_restaurant_home_hover.png'
import aside_restaurant_stadistic_selected from '../Statics/img/aside_restaurant_stadistic_selected.png'
import aside_restaurant_comment_normal from '../Statics/img/aside_restaurant_comment_normal.png'
import aside_restaurant_comment_hover from '../Statics/img/aside_restaurant_comment_hover.png'
import aside_restaurant_suggestion_normal from '../Statics/img/aside_restaurant_suggestion_normal.png'
import aside_restaurant_suggestion_hover from '../Statics/img/aside_restaurant_suggestion_hover.png'
import aside_restaurant_complaint_normal from '../Statics/img/aside_restaurant_complaint_normal.png'
import aside_restaurant_complaint_hover from '../Statics/img/aside_restaurant_complaint_hover.png'
import aside_restaurant_profile_normal from '../Statics/img/aside_restaurant_profile_normal.png'
import aside_restaurant_profile_hover from '../Statics/img/aside_restaurant_profile_hover.png'
import aside_restaurant_logout_normal from '../Statics/img/aside_restaurant_logout_normal.png'
import aside_restaurant_logout_hover from '../Statics/img/aside_restaurant_logout_hover.png'
import AsideRestaurant from '../Components/AsideRestaurant'
import background_stadistics from '../Statics/img/background_stadistics.png'
import UserProvider, { UserContext } from '../Context/UserContext'

const StadisticsRestaurant = () => {
    const { data, setData } = useContext(UserContext)
    var option_home = null
    var option_stadistic = null
    var option_comment = null
    var option_suggestion = null
    var option_complaint = null
    var option_profile = null
    var option_logout = null

    const addEventHomeHoverIn = (e) => {
        option_home.style.content = 'url(' + aside_restaurant_home_hover + ')'
        document.getElementById("title_modal_menu_home").style.display = "flex"
    }
    const addEventHomeHoverOut = (e) => {
        option_home.style.content = 'url(' + aside_restaurant_home_normal + ')'
        document.getElementById("title_modal_menu_home").style.display = "none"
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
    const addEventProfileHoverIn = (e) => {
        option_profile.style.content = 'url(' + aside_restaurant_profile_hover + ')'
        document.getElementById("title_modal_menu_profile").style.display = "flex"
    }
    const addEventProfileHoverOut = (e) => {
        option_profile.style.content = 'url(' + aside_restaurant_profile_normal + ')'
        document.getElementById("title_modal_menu_profile").style.display = "none"
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

        option_stadistic.style.content = 'url(' + aside_restaurant_stadistic_selected + ')'

        option_home.addEventListener('mouseover', addEventHomeHoverIn, false)
        option_home.addEventListener('mouseleave', addEventHomeHoverOut, false)

        option_comment.addEventListener('mouseover', addEventCommentHoverIn, false)
        option_comment.addEventListener('mouseleave', addEventCommentHoverOut, false)

        option_suggestion.addEventListener('mouseover', addEventSuggestionHoverIn, false)
        option_suggestion.addEventListener('mouseleave', addEventSuggestionHoverOut, false)

        option_complaint.addEventListener('mouseover', addEventComplaintHoverIn, false)
        option_complaint.addEventListener('mouseleave', addEventComplaintHoverOut, false)

        option_profile.addEventListener('mouseover', addEventProfileHoverIn, false)
        option_profile.addEventListener('mouseleave', addEventProfileHoverOut, false)

        option_logout.addEventListener('mouseover', addEventLogoutHoverIn, false)
        option_logout.addEventListener('mouseleave', addEventLogoutHoverOut, false)

        return () => {
            option_home.removeEventListener('mouseover', addEventHomeHoverIn, false)
            option_home.removeEventListener('mouseleave', addEventHomeHoverOut, false)
            option_comment.removeEventListener('mouseover', addEventCommentHoverIn, false)
            option_comment.removeEventListener('mouseleave', addEventCommentHoverOut, false)
            option_suggestion.removeEventListener('mouseover', addEventSuggestionHoverIn, false)
            option_suggestion.removeEventListener('mouseleave', addEventSuggestionHoverOut, false)
            option_complaint.removeEventListener('mouseover', addEventComplaintHoverIn, false)
            option_complaint.removeEventListener('mouseleave', addEventComplaintHoverOut, false)
            option_profile.removeEventListener('mouseover', addEventProfileHoverIn, false)
            option_profile.removeEventListener('mouseleave', addEventProfileHoverOut, false)
            option_logout.removeEventListener('mouseover', addEventLogoutHoverIn, false)
            option_logout.removeEventListener('mouseleave', addEventLogoutHoverOut, false)
        }

    }, [])

    return (
        <div class="main_restaurant">
            <AsideRestaurant />
            <div className="main_restaurant_content">
                <div class="main_restaurant_content_header">
                    <h2>Estadisticas</h2>
                    <h2>{data["name"]}</h2>
                </div>
                <div className="main_restaurant_content_image">
                    <img src={background_stadistics} alt="" />
                </div>
            </div>
        </div>)
}

export default StadisticsRestaurant