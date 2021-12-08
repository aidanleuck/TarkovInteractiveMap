import React from "react";

export const LoginForm = ({ isShowLogin }) => {
    return (
        <div class="container">
            <div class="row d-flex justify-content-center align-items-center pt-5">
              <div class="col-xl-5">
                <div class="card theme1 text-white">
                  <div class="card-body p-5 text-center">
                    <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                    <p class="text-white-50 mb-5">Enter your username and password</p>
                    <div class="form-outline form-white mb-4">
                      <input type="email" id="typeEmailX" class="form-control form-control-lg" />
                      <label class="form-label" for="typeEmailX">Email</label>
                    </div>
                    <div class="form-outline form-white mb-4">
                      <input type="password" id="typePasswordX" class="form-control form-control-lg" />
                      <label class="form-label" for="typePasswordX">Password</label>
                    </div>
                    <p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
                    <button class="btn btn-outline-light btn-lg px-5" type="submit">Login</button>
                    <div class="d-flex justify-content-center text-center mt-4 pt-1">
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    );
}

