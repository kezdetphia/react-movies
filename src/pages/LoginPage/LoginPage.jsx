import {useState} from 'react';

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
    <div className="auth-page">
    <h1>LoginPage</h1>
    {/* onsubmit the handlelogin function */}
    <form onSubmit={handleLogin}>
      <label>
        Username:
        <input
          // this funct updates the newUser state based on the events value
          //working code
          onChange={(e)=> setnewUser(e.target.value)}
          //question,
          //why do we need to update local state in this case newUser and
          //why does the addNewUser function that we received as props
          // not update directly the App's user state? 
          //is it just how react is? A function from another component
          // cant affect another component's state? 
          //It has to go through a state update?
          //so this is the code below that made me ask this question
          // onchange={((e)=>(addNewUser(e.target.value)))}
          //or is the e.target.value not a string? cause then it would
          //makes sense
          type="text"
          placeholder="Enter your username"
      
          />
      </label>
      <button type="submit">Login</button>
    </form>
  </div>
  );
};

export default LoginPage;