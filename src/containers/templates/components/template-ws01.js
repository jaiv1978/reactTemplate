import React from 'react';
import MenuBar from '../../common/components/menu-bar';
import Grid from '@material-ui/core/Grid';
import MediaImages from '../../common/components/media-images';
import landscape from '../../../lib/images/landscape.jpg'
import '../../../styles/containers/templates/components/template-ws01-style.css';

const TemplateWS01 = (props) => {
    //~
    return(
        <Grid container>
            <Grid xs={12} item><MenuBar /></Grid>
            <Grid xs={12} style={{ height : "100%" }} item><img src={require('lib/images/landscape.jpg')} alt="landscape" className="imagen" ></img> </Grid>
        </Grid>
    );
}

export default TemplateWS01;