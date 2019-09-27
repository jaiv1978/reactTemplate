import React from 'react';
import landscape from '../../../lib/images/landscape.jpg';
import '../../../styles/containers/common/components/media-images-style.css'

const MediaImages = (props) => {

    return(<>
            <picture className="">
                <source srcSet={landscape} media="(min-width: 1200px)" ></source>
                <img src={landscape} alt="landscape" ></img>
            </picture>
        </>
    );
}

export default MediaImages;