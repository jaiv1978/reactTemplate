import React from 'react';
import MenuBar from 'containers/common/components/menu-bar';
import Grid from '@material-ui/core/Grid';
import 'styles/containers/templates/components/template-ws01-style.css';

const TemplateWS01 = (props) => {

    return(
        <Grid container>
            <Grid xs={12} item><MenuBar /></Grid>
            <Grid xs={12} className="div-main-picture" item>
                <img src={require('lib/images/landscape.jpg')} alt="landscape" className="imagen" ></img>
                <Grid xs={12} className="div-text-picture" item >
                    <h3>This is a great picture!!</h3>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default TemplateWS01;