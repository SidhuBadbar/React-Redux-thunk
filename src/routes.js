import React from 'react'
import { Switch, Route } from 'react-router-dom';
import TodoOuter from './container/todoOuter'
import Home from './container/Home'

export default function(props) {
    return (
        <React.Fragment>
            <Switch>
            <Route exact path="/todo" component={TodoOuter} />
            <Route exact path="/" component={Home} />
            </Switch>
        </React.Fragment>
    )
}