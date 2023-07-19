import {useState} from 'react';
import './LoginPage.css'

//here getting the addnewuser func from app 
const LoginPage = ({addNewUser}) => {
  
  //need this state to be able to pass value into the
  //prop's addnewuser function that would update app's user state
  const [newUser, setnewUser] = useState('')

  //a function that uses the addnewuser function from app and passes
  //the newUser value from this local state
  const handleLogin=(e)=>{
    e.preventDefault()
    addNewUser(newUser)
    console.log(newUser) 
  }

return (
  <div className="login-container">
    <div className="login-box">
      <h2 className="login-title">Welcome Back!</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          
          <input 
            onChange={(e)=> setnewUser(e.target.value)}
            type="text"
            placeholder="Enter your username"
          />
        </div>
        <button type="submit" className="login-btn"> <b>Log In</b> </button>
      </form>

    </div>
  </div>
);
};


export default LoginPage;