import React from 'react';
import {Switch, Redirect, Routes, Route} from 'react-router-dom'
import {authRoutes, publicRoutes} from '.routes'

const AppRouter = () => {
    const isAuth = false
    return (
        <Switch>
            { isAuth === true &&
                authRoutes.map(({path,Component}) =>
                    <Route key={path} path={path} component={Component} exact/>                
            )}
            { 
                publicRoutes.map(({path,Component}) =>
                    <Route key={path} path={path} component={Component} exact/>                
            )}
        </Switch>
    )
}

export default Auth;