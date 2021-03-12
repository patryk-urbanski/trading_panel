import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Test from '../../views/test';

const RootRouter = ({

}) => {
    const routes = []
    return (
        <Router>
            <Layout>
                <Route path='/' name='home' render={() => <Test />}/> 
            </Layout>
            
        </Router>
    )
};

export default RootRouter;