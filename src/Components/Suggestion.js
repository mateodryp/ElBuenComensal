import React from 'react'
import man_comments from '../Statics/img/man_comments.png'
import woman_comments from '../Statics/img/woman_comments.png'

const Suggestion = ({ gender, title, name, suggestion, date }) => {
    return (
        <div className="main_restaurant_content_comments_comment">
            <div className="main_restaurant_content_comments_comment_image">
                {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
            </div>
            <div className="main_restaurant_content_comments_comment_content">
                <div className="main_restaurant_content_comments_comment_content_score">
                    <div className="main_restaurant_content_comments_comment_content_score_title">{title}</div>
                </div>
                <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                <div className="main_restaurant_content_comments_comment_content_comment">{suggestion}</div>
                <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

            </div>
        </div>
    )
}

export default Suggestion