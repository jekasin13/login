import React from 'react'
import MyButton from '../Mybutton/MyButton'
import cl from './navbar.module.css'
import {  useDispatch, useSelector } from 'react-redux';
import { setLogOutAction } from '../../../store/authReducer'

function Navbar() {

 const dispatch = useDispatch()
 const isAuth = useSelector(state => state.auth.isLogin)

  return (
    <div className={cl.navbar}>
      <h1 style = {{color: 'white'}} >  SPA-приложение с авторизацией</h1>
    {isAuth 
      ? 
      <MyButton style = {{color: 'white'}} onClick = {() => dispatch(setLogOutAction())}>Выйти</MyButton>
      :
      null
    }
      
    </div>
  )
}

export default Navbar