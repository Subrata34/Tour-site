import React from 'react';
import banners from '../../../image/banner.webp'

const Banner = () => {
    return (
        <div>
            <img className="img-fluid" src={banners} alt="" srcset="" />
        </div>
    );
};

export default Banner;