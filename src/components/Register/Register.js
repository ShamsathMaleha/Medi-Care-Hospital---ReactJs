import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import './Register.css'

const Register = () => {
    const {handlePassword,handleEmail,email,password,error,setError,setUser}=useAuth()
    const history = useHistory()
    const auth = getAuth()
    const uri = '/'

    const handleRegistration = e =>{
        e.preventDefault()
          if(password.length< 6){
              setError('Password Must be 6 Character long')
              return;
          }
        
        else {

        createUserWithEmailAndPassword(auth,email, password)
        .then(result=>{
            const user = result.user;
            setUser(user)
           
            setError('')
           history.push(uri)

            })   
    
       .catch(error=>{
           setError(error.message)
       })
         
        }
      }
    return (
        

<div>

<div className="container " >
<div className="form w-50">
<div className="row d-flex justify-content-center"> 
<div className="col-sm-12 col-lg-12 ">
                             
  <form onSubmit={ handleRegistration }>
      <h1>Register</h1>
 
  <input onBlur={handleEmail} required type="email" name="email" className=" mb-3 mx-auto w-100 inputs" placeholder="Email" /> 
     <input onBlur={handlePassword} required type="password" className=" mx-auto inputs w-100 " name="Password" placeholder="Password" />
     <p className="mt-2 text-danger">{error}</p>

   
     <button type="submit" className="buttons">Register</button>
  </form>
  
  <br />
     <Link to="/login">Already Registered?</Link>
  
        
  </div>
</div>
</div>
</div>
</div>
    );
};

export default Register;