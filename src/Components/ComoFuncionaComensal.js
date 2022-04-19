import React from 'react'
import chefImage from '../Statics/img/chef W.png'
import forkImage from '../Statics/img/fork B.png'
import backgroundRestaurant from '../Statics/img/CF_com.jpg'
import stepsRestaurant from '../Statics/img/stepsComensal.jpg'

const ComoFuncionaComensal = ({userFunction}) => {
    return (
        <>
            <div class="main_section_selectors">
                <div class="main_Section_selectors_selector_b">
                    <img src={chefImage} alt="" onClick={() => userFunction(1)}/>
                </div>
                <div class="main_Section_selectors_selector_y">
                    <img src={forkImage} alt="" />
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

export default ComoFuncionaComensal