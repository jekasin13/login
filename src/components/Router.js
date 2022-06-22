import React from 'react'
import {  Route, Routes ,Navigate} from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { privateRoutes , publicRoutes } from '../routes'


function Router() {

    const isAuth = useSelector(state => state.auth.isLogin)

  return (
    isAuth 
        ?        
    <Routes>
        {privateRoutes.map( route => 
            <Route                        
            element={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}/> 

        )}
        <Route path= '*'  element = { <Navigate replace to="/change" /> }/> 
    </Routes> 
        :
    <Routes>
        {publicRoutes.map( route => 
            <Route                        
            element={route.component}
            path={route.path}
            exact={route.exact}
            key={route.path}/> 

        )}
        <Route path= '*'  element = { <Navigate replace to="/login" /> }/> 
    </Routes> 
    
    

  )
}

export default Router