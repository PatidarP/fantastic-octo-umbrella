import React from 'react';
import Home from './home/home';
import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/NavBar'

const Main = () => {
    return(
        <div>
            <NavBar/>
            <Switch>
                <Route exact path ="/" component={Home} />
            </Switch>
        </div>
        
    );
}

export default Main;