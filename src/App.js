import React from 'react';
import './App.css';
import { NavLink, Switch, Route } from 'react-router-dom';
import Nav from './components/nav/nav.js'
import Footer from './components/footer/footer.js'
import PSection1 from './components/partners/section-1/section-1.js'
import PSection2 from './components/partners/section-2/section-2.js'
import PSection3 from './components/partners/section-3/section-3.js'
import PSection4 from './components/partners/section-4/section-4.js'
import Section1 from './components/section-1/section-1.js'
import Section2 from './components/section-2/section-2.js'
import Section3 from './components/section-3/section-3.js'
import Section4 from './components/section-4/section-4.js'
import Contact from './components/general/contact/contact.js'


const App = () => (
    <div className='app'>
        <Nav />
        <Main />
        <Footer />
    </div>
);

const Home = () => (
    <div>
        <div id='top'></div>
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
    </div>
);

const Partners = () => (
    <div id='partners'>
        <PSection1 />
        <PSection2 />
        <PSection3 />
        <PSection4 />
        <Contact />
    </div>
);

const resetPassword = () => (
    <div id='partners'>
        <Contact />
    </div>
);

const Main = () => (
    <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/partners' component={Partners}></Route>
        <Route exact path='/reset-password' component={resetPassword}></Route>
    </Switch>
);

export default App;