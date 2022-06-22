import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MyButton from '../components/UI/Mybutton/MyButton'
import MyInput from '../components/UI/MyInput/MyInput'
import useInput from '../hooks/useInput'
import { editUsersAction } from '../store/userReducer'


function Change() {
  const oldPassword = useInput('')
  const newPassword = useInput('')
  const repeatPassword = useInput('')
  const  users = useSelector( state => state.user.users)
  const  currentUser = useSelector( state => state.user.currentUser)
  const dispatch = useDispatch()
  const [error, setError] = useState(null);
  const [succes, setSucces] = useState(null);

 
  const changePass = () => {
    const newUsers = []
    setError(null)
    for( let i = 0; i< users.length; i++) {
      if (users[i].login === currentUser)  {
        console.log('ui')
        if ((repeatPassword.value === newPassword.value) && (oldPassword.value ===users[i].password )) {
        newUsers.push({email: users[i].email, login: users[i].login, password: newPassword.value})
        setSucces('УСПЕШНО СМЕНА ПАРОЛЯ!')  
        setTimeout( () => {
          setSucces(null)
        }, 2000)
        } else {
          setError('ОШБИКА')
          setTimeout( () => {
            setError(null)
          }, 2000)
          newUsers.push(users[i])
        }
        
        
      }else {
        newUsers.push(users[i])
      }
    }
    console.log(newUsers);
    dispatch(editUsersAction(newUsers))  
  }

  return (
    

    <div className='form-contaier'>
        <MyInput {...oldPassword} placeholder = 'Old password'/>
        <MyInput {...newPassword} placeholder = 'New password' />
        <MyInput {... repeatPassword} placeholder = 'Repeat new password'/>
        <MyButton onClick = {() => changePass()}>Сменить пароль</MyButton>
        {error ? <h2 style={{color: 'red'}}>{error}</h2> : null }
        {succes ? <h2 style={{color: 'green'}}>{succes}</h2> : null }
    </div>
  )
}

export default Change