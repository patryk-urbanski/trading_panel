import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import DefaultLayout from '../../components/DefaultLayout';

import Dashboard from '../../views/Dashboard';

const RootRouter = () => {

    return (
        <Router>
            <DefaultLayout>
                <Route path='/' name='home' render={() => <Dashboard />}/> 
            </DefaultLayout>
            
        </Router>
    )
};

export default RootRouter;