import React from 'react';
import { Route, Routes } from '../Router';

import About from '../views/About';
import Donate from '../views/Donate';
import Home from '../views/Home';
import Report from '../views/Report';
import Versions from '../views/Versions';

export default () => (
    <Routes notFoundRedirect='/'>
        <Route exact path='/' component={Home} />

        <Route exact path='/about' component={About} />
        <Route exact path='/donate' component={Donate} />
        <Route exact path='/report-comment' component={Report} />
        <Route exact path='/updates-blog' component={Versions} />
    </Routes>
);