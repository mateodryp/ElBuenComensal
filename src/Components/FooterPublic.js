import React from 'react'
import logo_copy from '../Statics/img/Logo copyri.png'
import android_store from '../Statics/img/android_store.png'
import apple_store from '../Statics/img/apple_store.png'
import facebook from '../Statics/img/facebook.png'
import instragram from '../Statics/img/instagram.png'
import youtube from '../Statics/img/youtube.png'
import twitter from '../Statics/img/twitter.png'
import { Link } from 'react-router-dom'

const FooterPublic = () => {
    return (
        <div class="main_footer">
            <div class="main_footer_social">
                <div class="main_footer_social_apps">
                    <h3>Disponible en</h3>
                    <div class="main_footer_social_apps_image">
                        <img src={android_store} alt="" />
                        <img src={apple_store} alt="" />
                    </div>
                </div>
                <div class="main_footer_social_social">
                    <h3>Redes Sociales</h3>
                    <div class="main_footer_social_social_content">
                        <div class="main_footer_social_social_content_media">
                            <div class="main_footer_social_social_content_media_content">
                                <img src={facebook} alt="" />
                            </div>
                            <div class="main_footer_social_social_content_media_content">
                                <img src={instragram} alt="" />
                            </div>
                            <div class="main_footer_social_social_content_media_content">
                                <img src={youtube} alt="" />
                            </div>
                            <div class="main_footer_social_social_content_media_content">
                                <img src={twitter} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="main_footer_info">
                <div class="main_footer_info_div">
                    <Link to="/">Terminos y condiciones</Link>
                    <Link to="/">Politicas de seguridad</Link>
                    <Link to="/">Centro de ayudas</Link>
                </div>
                <div class="main_footer_info_div_img">
                    <img src={logo_copy} alt="" />
                </div>
                <div class="main_footer_info_div">
                    <Link to="/">Asociate con nosotros</Link>
                    <Link to="/">Nuestros aliados</Link>
                    <Link to="/">Quienes somos</Link>
                </div>

            </div>
        </div>
    )
}

export default FooterPublic