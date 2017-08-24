import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import './styles/main.css';
import Header from './components/Header'
import Home from './components/Home/Home'
import SinglePlayer from './components/SinglePlayer/SinglePlayer'
import Multiplayer from './components/Multiplayer/Multiplayer'
import Menu from './components/Menu/Menu'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <Header />
                        <div className="content-container">
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route path="/single-player" component={SinglePlayer} />
                                <Route path="/multiplayer" component={Multiplayer} />
                                <Route path="/menu" component={Menu} />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    <Footer />
                </div>
            </Router>
        );
    }
}

export default App
