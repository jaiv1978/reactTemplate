import React from 'react';
import '../../../styles/containers/common/components/media-images-style.css'

const MediaImages = (props) => {
    const image = require('lib/images/landscape.jpg');

    return(<>
            <picture className="">
                <source srcSet={image} media="(min-width: 1200px)" ></source>
                <img src={image} alt="landscape" ></img>
            </picture>
        </>
    );
}

export default MediaImages;