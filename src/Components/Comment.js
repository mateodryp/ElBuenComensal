import React from 'react'
import star from '../Statics/img/star.png'
import star_empty from '../Statics/img/star_empty.png'
import man_comments from '../Statics/img/man_comments.png'
import woman_comments from '../Statics/img/woman_comments.png'

const Comment = ({ gender, stars, score, name, comment, date }) => {

    switch (stars) {
        case 1:
            return (
                <div className="main_restaurant_content_comments_comment">
                    <div className="main_restaurant_content_comments_comment_image">
                        {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
                    </div>
                    <div className="main_restaurant_content_comments_comment_content">
                        <div className="main_restaurant_content_comments_comment_content_score">
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_score">{score}</div>
                        </div>
                        <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                        <div className="main_restaurant_content_comments_comment_content_comment">{comment}</div>
                        <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

                    </div>
                </div>
            )
            break;
        case 2:
            return (
                <div className="main_restaurant_content_comments_comment">
                    <div className="main_restaurant_content_comments_comment_image">
                        {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
                    </div>
                    <div className="main_restaurant_content_comments_comment_content">
                        <div className="main_restaurant_content_comments_comment_content_score">
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_score">{score}</div>
                        </div>
                        <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                        <div className="main_restaurant_content_comments_comment_content_comment">{comment}</div>
                        <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

                    </div>
                </div>
            )
            break;
        case 3:
            return (
                <div className="main_restaurant_content_comments_comment">
                    <div className="main_restaurant_content_comments_comment_image">
                        {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
                    </div>
                    <div className="main_restaurant_content_comments_comment_content">
                        <div className="main_restaurant_content_comments_comment_content_score">
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_score">{score}</div>
                        </div>
                        <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                        <div className="main_restaurant_content_comments_comment_content_comment">{comment}</div>
                        <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

                    </div>
                </div>
            )
            break;
        case 4:
            return (
                <div className="main_restaurant_content_comments_comment">
                    <div className="main_restaurant_content_comments_comment_image">
                        {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
                    </div>
                    <div className="main_restaurant_content_comments_comment_content">
                        <div className="main_restaurant_content_comments_comment_content_score">
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_score">{score}</div>
                        </div>
                        <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                        <div className="main_restaurant_content_comments_comment_content_comment">{comment}</div>
                        <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

                    </div>
                </div>
            )
            break;
        case 5:
            return (
                <div className="main_restaurant_content_comments_comment">
                    <div className="main_restaurant_content_comments_comment_image">
                        {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
                    </div>
                    <div className="main_restaurant_content_comments_comment_content">
                        <div className="main_restaurant_content_comments_comment_content_score">
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                            <div className="main_restaurant_content_comments_comment_content_score_score">{score}</div>
                        </div>
                        <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                        <div className="main_restaurant_content_comments_comment_content_comment">{comment}</div>
                        <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

                    </div>
                </div>
            )
            break;
        default:
            <div className="main_restaurant_content_comments_comment">
                <div className="main_restaurant_content_comments_comment_image">
                    {gender === 'M' ? <img src={man_comments} alt="" /> : <img src={woman_comments} alt="" />}
                </div>
                <div className="main_restaurant_content_comments_comment_content">
                    <div className="main_restaurant_content_comments_comment_content_score">
                        <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star} alt="" /></div>
                        <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                        <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                        <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                        <div className="main_restaurant_content_comments_comment_content_score_star"><img src={star_empty} alt="" /></div>
                        <div className="main_restaurant_content_comments_comment_content_score_score">{score}</div>
                    </div>
                    <div className="main_restaurant_content_comments_comment_content_name">{name}</div>
                    <div className="main_restaurant_content_comments_comment_content_comment">{comment}</div>
                    <div className="main_restaurant_content_comments_comment_content_date">Fecha: {date}</div>

                </div>
            </div>
            break;
    }

}

export default Comment