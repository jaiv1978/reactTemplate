import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';
import TemplateWS01 from './templates/components/template-ws01';
import MainStyle from '../styles/containers/index-style';

const Main = (props) => {
    const classes = MainStyle();
    return(
        <Container maxWidth={false} className={classes.root}>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={TemplateWS01} ></Route>
                </Switch>
            </Router>
        </Container>
    );
}

export default Main;