import Register from './pages/Register';
import Login from './pages/Login';
import Change from './pages/Change';

export const privateRoutes = [
    {path: '/change', component: <Change/>, exact: true}
]

export const publicRoutes = [
    {path: '/login', component: <Login/>, exact: true},
    {path: '/register', component: <Register/>, exact: true}
]