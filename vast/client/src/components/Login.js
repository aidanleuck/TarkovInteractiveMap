import React, { useState } from "react";
import ReactDOM from "react-dom";
import '../CSS/login.css'

export const LoginForm = (props) => {
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');

    async function fetchLogin(){
      try{
        const response = await fetch(`http://localhost:5000/login/validate`, {
          method : 'POST',
          headers: {
            'Content-Type':"application/json"
          },
          body : JSON.stringify({username: user, userPassword: password})
        });
        if(response.ok){
            props.setLoginVal("Log Out");
            props.setLogin("true");
            props.setHidden("hidden");
        }
        else{
          console.log("Login Failed!");
        }
      }catch(err){
        console.log(err);
      }
      
    }
    return (
        <div id = "loginForm" class={`position-fixed collapse container-fluid w-100 mt-2 ${props.hidden}`}>
            <div class="row d-flex justify-content-end align-items-end pt-5">
              <div class="col-xl-2 no-padding">
                <div class="card theme1 text-white">
                  <div class="card-body p-5 text-center">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Enter your username and password</p>
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" value = {user} onChange={evt => setUser(evt.target.value)}/>
                      <label class="form-label" for="typeEmailX">Email</label>
                    </div>
                    <div class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" value = {password} onChange={evt => setPassword(evt.target.value)} />
                      <label class="form-label" for="typePasswordX">Password</label>
                    </div>
                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                    <button onClick={() => fetchLogin()} class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

