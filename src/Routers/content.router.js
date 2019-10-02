import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Content from '../component/content/';
import ProfileContent from '../component/profile/content';
import Error from '../component/error';

const ContentRouter = () => {


    return (
        <Switch>
            <Route path="/home" component={Content} />
            <Route path="/sign-up" component={Content} />
            <Route path="/forget" component={Content} />
            <Route path="/profile" component={ProfileContent} />
            <Route component={Error} />
        </Switch>
    )
}
export default ContentRouter;