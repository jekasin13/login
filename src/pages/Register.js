import React , {useState}from 'react'
import {  useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Loader from '../components/UI/Loader/Loader';
import MyButton from '../components/UI/Mybutton/MyButton';
import MyInput from '../components/UI/MyInput/MyInput';
import useInput from '../hooks/useInput';
import { addUserAction } from '../store/userReducer';

function Register() {
  const email = useInput('')
  const login = useInput('')
  const password = useInput('')
  const [isLoading,setIsLoading] = useState(false)


  const dispatch = useDispatch()
  

  

  const reg = () => {
    setIsLoading(true)
    setTimeout( () => {
    
      const user = { 
        email : email.value,
        login : login.value,
        password: password.value,
       }
       dispatch (addUserAction(user))
       setIsLoading(false)
    }, 2000) 

  }

  return (
    
    <div >
      {isLoading ?
      <Loader/>

       :
      <div className='form-contaier'>
        <MyInput {...email} placeholder = 'Email' />
        <MyInput {...login} placeholder = 'Login' />
        <MyInput {...password} type="password" placeholder = 'Password' />
        <Link to = '/login'>Логин</Link>
        <MyButton onClick = {() => reg()}>Зарегестрироваться</MyButton>
      </div>
      }

    </div>
  )
}

export default Register