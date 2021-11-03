import React, { Component } from 'react'
import { Redirect, Route, Switch } from 'react-router'
import Home from '../Home/Home'
import NAv from '../Nav/Nav'
import About from '../About/About'
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import Portoflio from '../Portfolio/Portoflio'
import Notfound from '../Notfound/Notfound'

export default class App extends Component {
    render() {
        return (
            <div>
                <NAv/>    
                    <Switch>
                        <Route path='/home'> <Home/> </Route>
                        <Route path='/about'> <About/> </Route>
                        <Route path='/contact'> <Contact/> </Route>
                        <Route path='/portoflio'> <Portoflio/> </Route>
                        <Redirect from='/' exact to='/home'></Redirect>
                        <Route path='*'> <Notfound/> </Route>
                    </Switch>
                <Footer/>  
            </div>
        )
    }
}
