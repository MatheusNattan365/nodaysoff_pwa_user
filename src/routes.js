import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";


import Login from '../src/views/Login'
import Register from '../src/views/Register'
import Games from '../src/views/Events'
import About from '../src/views/About'

import Footer from '../src/components/Footer'


export default function App() {

    return (
        <>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/events" component={Games} />
                <Route path="/about" component={About} />
                <Redirect from="/" to="/login" />}
            </Switch>
        </Router>
        <Footer />
        </>
    );
}

