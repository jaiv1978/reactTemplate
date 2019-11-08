import React from 'react';
import PropTypes from 'prop-types';

const WebSection = (props) => {
    var { contentAligment, width, children } = props;
    width = width == null ? "100%" : width;
    contentAligment = contentAligment === null ? "left" : contentAligment;

    return(<>
            <div style={{ width : width, textAlign : contentAligment }} >{children}</div>
    </>
    )
};

WebSection.propTypes = {
    contentAligment : PropTypes.string,
    width : PropTypes.string
}

export default WebSection;