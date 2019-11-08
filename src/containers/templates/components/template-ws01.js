import React from 'react';
import MenuBar from 'containers/common/components/menu-bar';
import Grid from '@material-ui/core/Grid';
import 'styles/containers/templates/components/template-ws01-style.css';
import WebSection from 'containers/common/components/web-section';

const TemplateWS01 = (props) => {

    return(
        <Grid container>
            <Grid xs={12} item><MenuBar /></Grid>
            <Grid xs={12} className="div-main-picture" item>
                <Grid xs={12}  item ><h3></h3></Grid>
            </Grid>
            <Grid xs={12} className="div-content-pad-medium div-content-align-center" item >
                <WebSection width="20rem" contentAligment="left" >
                    <div><h6>this is a test for this web site this is a test for this web site this is a test for this web site this is a test for this web site</h6></div>
                </WebSection>
            </Grid>
        </Grid>
    );
}

export default TemplateWS01;