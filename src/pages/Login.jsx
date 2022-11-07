import React, { useState } from "react";
import { baseUrl } from "../environment";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        var data = {
            email: email,
            password: pass
        }
        
        fetch(`${baseUrl}/auth/login`,
        {
        method:"POST",
        mode: "cors",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
            'Accept': 'application/json'
        }
        
        })
        .then((response) => {
            if(response.status === 200){
                return response.json();
            }
            else if(response.status === 401){
                alert("Username or password wrong")
                
            }
        })
        .then((data) => {
            console.log(data._id);
            props.setUserToken(data._id);
            props.onFormSwitch("loggedIn");
        })
        .catch(err => {console.log(err)})
        // .finally(()=>{
        //     props.onFormSwitch('loggedIn')
        // })
    }

    return (
        <div>
            <section className="vh-100 gradient-custom">
                <div className="container py-5 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                        <div className="card bg-dark text-white" style={{borderRadius: "1rem"}}>
                        <div className="card-body p-5 text-center">

                            <div className="mb-md-5 mt-md-4 pb-5">

                            <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                            <p className="text-white-50 mb-5">Please enter your login and password!</p>

                            <form className="register-form" onSubmit={handleSubmit}>
                                
                                <div className="form-outline form-white mb-4">
                                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" id="typeEmailX" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                                </div>

                                <div className="form-outline form-white mb-4">
                                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" id="typePasswordX" className="form-control form-control-lg" />
                                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                                </div>

                                <p className="small mb-5 pb-lg-2"><a className="text-white-50" href="#!">Forgot password?</a></p>

                                <button className="btn btn-outline-light btn-lg px-5" type="submit">Login</button>

                            </form>

                            <div className="d-flex justify-content-center text-center mt-4 pt-1">
                                <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                                <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                                <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                            </div>

                            </div>

                            <div>
                            <p className="mb-0">Don't have an account? <a onClick={() => props.onFormSwitch('register')} href="#!" className="text-white-50 fw-bold">Sign Up</a>
                            </p>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    )
}