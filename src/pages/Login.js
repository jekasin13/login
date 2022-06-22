import React , {useState, useEffect}from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import MyButton from '../components/UI/Mybutton/MyButton'
import MyInput from '../components/UI/MyInput/MyInput'
import useInput from '../hooks/useInput'
import { setLoginAction } from '../store/authReducer'
import { setCurrenUserAction } from '../store/userReducer'


function Login() {
  const login = useInput('')
  const password  = useInput('')
  const [errorLogin, setErrorLogin] = useState(false)
  const users = useSelector( state => state.user.users)
  const dispatch = useDispatch()


  const loginUser = () => {
   if(users.length > 0){
    users.map(user => {
      if (user.login === login.value ) {
        if (user.password === password.value) {
          dispatch(setLoginAction())
          dispatch(setCurrenUserAction(user.login))
        }else {
          setErrorLogin(true)
          setTimeout(() =>{ 
            setErrorLogin(false)
          }, 2000)
        }
      }else {
        setErrorLogin(true)
        setTimeout(() =>{ 
          setErrorLogin(false)
        }, 2000)
      }

    })
   } else {
    setErrorLogin(true)
   } 

  }
   
  return (
    <div className='form-contaier'>
        <MyInput {...login} placeholder = 'login'/>
        <MyInput {...password} type="password"  placeholder = 'password' />
        <Link to = '/register'>Регистрация</Link>
        <MyButton onClick = {() => loginUser()}>Войти</MyButton>
        {errorLogin ? <h2 style={{color:'red'}}>Пользователь не найден</h2> : null}
    </div>
  )
}

export default Login