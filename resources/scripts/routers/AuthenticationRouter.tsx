import React from 'react';
import { Route, RouteComponentProps, Switch } from 'react-router-dom';
import TransitionRouter from '@/TransitionRouter';
import LoginContainer from '@/components/auth/LoginContainer';
import LoginCheckpointContainer from '@/components/auth/LoginCheckpointContainer';
import LoginKeyCheckpointContainer from '@/components/auth/LoginKeyCheckpointContainer';
import ForgotPasswordContainer from '@/components/auth/ForgotPasswordContainer';
import ResetPasswordContainer from '@/components/auth/ResetPasswordContainer';
import { NotFound } from '@/components/elements/ScreenBlock';

export default ({ location, history, match }: RouteComponentProps) => (
    <div className={'pt-8 xl:pt-32'}>
        <TransitionRouter>
            <Switch location={location}>
                <Route path={`${match.path}/login`} component={LoginContainer} exact/>
                <Route path={`${match.path}/login/checkpoint`} component={LoginCheckpointContainer}/>
                <Route path={`${match.path}/login/key`} component={LoginKeyCheckpointContainer}/>
                <Route path={`${match.path}/password`} component={ForgotPasswordContainer} exact/>
                <Route path={`${match.path}/password/reset/:token`} component={ResetPasswordContainer}/>
                <Route path={`${match.path}/checkpoint`}/>
                <Route path={'*'}>
                    <NotFound onBack={() => history.push('/auth/login')}/>
                </Route>
            </Switch>
        </TransitionRouter>
    </div>
);
