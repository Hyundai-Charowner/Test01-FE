import React, { useState } from 'react';
import commentImage from '../../assets/image/comment.png';
import heartTrueImage from '../../assets/image/heartTrue.png';
import heartFalseImage from '../../assets/image/heartFalse.png';
import shareImage from '../../assets/image/share.png';
import viewsImage from '../../assets/image/views.png';
import '../../styles/Post.css';

const Footer = ({ commentCount, initialHeartCount, viewsCount }) => {
    const [isHeartClicked, setIsHeartClicked] = useState(false);
    const [heartCount, setHeartCount] = useState(initialHeartCount);

    const handleHeartClick = () => {
        setIsHeartClicked(!isHeartClicked);
        setHeartCount(prevHeartCount => isHeartClicked ? prevHeartCount - 1 : prevHeartCount + 1);
    };

    return (
        <div className='post-footer'>
            <div className='post-footer-buttons'>
                <div className='post-button'>
                    <img src={commentImage} alt='Comment' className='footer-icon'/>
                    <div className='post-footer-text'>{commentCount}</div>
                </div>
                <button className='post-button' onClick={handleHeartClick}>
                    <img src={isHeartClicked ? heartTrueImage : heartFalseImage} alt='Heart' className='footer-icon'/>
                    <div className='post-footer-text'>{heartCount}</div>
                </button>
                <button className='post-button'>
                    <img src={shareImage} alt='Share' className='footer-icon'/>
                </button>
                <div className='post-button'>
                    <img src={viewsImage} alt='Views' className='footer-icon'/>
                    <div className='post-footer-text'>{viewsCount}</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
