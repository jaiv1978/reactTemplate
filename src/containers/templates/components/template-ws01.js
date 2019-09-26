import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import '../../../styles/containers/templates/components/template-ws01-style.css';

const TemplateWS01 = (props) => {
    return(
        <Grid container >
            <Grid xs={12} sm={6} className="panel" item>
                <Paper >Hello World 1</Paper>
            </Grid>
            <Grid xs={12} sm={6} className="panel" item>
                <Paper >Hello World 2</Paper>
            </Grid>            
        </Grid>
    );
}

export default TemplateWS01;