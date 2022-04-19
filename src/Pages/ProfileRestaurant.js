import React, { useEffect } from 'react'
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

const ProfileRestaurant = () => {
    var option_home = null
    var option_stadistic = null
    var option_comment = null
    var option_suggestion = null
    var option_complaint = null
    var option_profile = null
    var option_logout = null

    const addEventHomeHoverIn = (e) => { 
        option_home.style.content = 'url(' + aside_restaurant_home_hover + ')' 
        document.getElementById("title_modal_menu_home").style.display ="flex"
    }
    const addEventHomeHoverOut = (e) => { 
        option_home.style.content = 'url(' + aside_restaurant_home_normal + ')'
        document.getElementById("title_modal_menu_home").style.display ="none" 
    }

    const addEventStadisticHoverIn = (e) => { 
        option_stadistic.style.content = 'url(' + aside_restaurant_stadistic_hover + ')' 
        document.getElementById("title_modal_menu_stadistics").style.display ="flex"
    }
    const addEventStadisticHoverOut = (e) => { 
        option_stadistic.style.content = 'url(' + aside_restaurant_stadistic_normal + ')' 
        document.getElementById("title_modal_menu_stadistics").style.display ="none"
    }
    const addEventCommentHoverIn = (e) => { 
        option_comment.style.content = 'url(' + aside_restaurant_comment_hover + ')' 
        document.getElementById("title_modal_menu_comments").style.display ="flex"
    }
    const addEventCommentHoverOut = (e) => {
        option_comment.style.content = 'url(' + aside_restaurant_comment_normal + ')' 
        document.getElementById("title_modal_menu_comments").style.display ="none"
    }
    const addEventSuggestionHoverIn = (e) => { 
        option_suggestion.style.content = 'url(' + aside_restaurant_suggestion_hover + ')' 
        document.getElementById("title_modal_menu_suggestions").style.display ="flex"
    }
    const addEventSuggestionHoverOut = (e) => { 
        option_suggestion.style.content = 'url(' + aside_restaurant_suggestion_normal + ')' 
        document.getElementById("title_modal_menu_suggestions").style.display ="none"
    }
    const addEventComplaintHoverIn = (e) => { 
        option_complaint.style.content = 'url(' + aside_restaurant_complaint_hover + ')' 
        document.getElementById("title_modal_menu_complaints").style.display ="flex"
    }
    const addEventComplaintHoverOut = (e) => { 
        option_complaint.style.content = 'url(' + aside_restaurant_complaint_normal + ')' 
        document.getElementById("title_modal_menu_complaints").style.display ="none"
    }
    
    const addEventLogoutHoverIn = (e) => { 
        option_logout.style.content = 'url(' + aside_restaurant_logout_hover + ')' 
        document.getElementById("title_modal_menu_logout").style.display ="flex"
    }
    const addEventLogoutHoverOut = (e) => { 
        option_logout.style.content = 'url(' + aside_restaurant_logout_normal + ')' 
        document.getElementById("title_modal_menu_logout").style.display ="none"
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
            <div class="main_restaurant_header">
                <h1>Profile</h1>
            </div>
        </div>
    )
}

export default ProfileRestaurant