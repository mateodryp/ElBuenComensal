import React from 'react'
import chefImage from '../Statics/img/chef B.png'
import forkImage from '../Statics/img/fork W.png'
import backgroundRestaurant from '../Statics/img/CF_rest.jpg'
import stepsRestaurant from '../Statics/img/steps_restaurant.jpg'

const ComoFuncionaRestaurante = ({userFunction}) => {
    return (
        <>
            <div class="main_section_selectors">
                <div class="main_Section_selectors_selector_y">
                    <img src={chefImage} alt=""/>
                </div>
                <div class="main_Section_selectors_selector_b">
                    <img src={forkImage} alt="" onClick={() => userFunction(2)}/>
                </div>
            </div>
            <div class="main_image_cf">
                <img src={backgroundRestaurant} alt="" />
            </div>
            <div class="main_steps_image">
                <img src={stepsRestaurant} alt="" />
            </div>
        </>
    )
}

export default ComoFuncionaRestaurante