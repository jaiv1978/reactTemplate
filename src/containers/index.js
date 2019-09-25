import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from '@material-ui/core/Container';
import TemplateWS01 from './templates/components/template-ws01';

const Main = (props) => {

    return(
        <Container fixed>
            <Router>
                <Switch>
                    <Route exact={true} path="/" component={TemplateWS01} ></Route>
                </Switch>
            </Router>
        </Container>
    )
}

export default Main;
