
import { useState, useRef } from 'react'
import Link from 'next/link'

import { PublicOnlyRoute } from './hoc/customRoutes'
import { useAuth } from '../context/authProvider'
import { sign } from 'jsonwebtoken'


const Signup = () => {

    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef()

    const { auth, signup } = useAuth();


    const [passwordDoNotMatch, setPasswordDoNotMatch] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(`Signup details \n username: ${username.current.value} \n password: ${password.current.value}`);
        signup(username.current.value, password.current.value);
    }
    
    const matchPassword = e => {
        passwordError = null;
        const checkPass = confirmPassword.current.value;
        if (password.current.value.substr(0, checkPass.length) !== checkPass) {
            // password do not match
            setPasswordDoNotMatch(true);
        }
        else {
            setPasswordDoNotMatch(false);
        }
    }

    const handleError = field => {
        
        console.log('auth: ', auth);
        if (auth.message === null){
            return null
        }
        
        return (auth.message[field] ? auth.message[field] : null)
    
    }
    const usernameError = handleError('username');
    let passwordError = handleError('password');
    
    return (
        <center className="valign-wrapper page-container">

            <div className="container">
                <h3 className="purple-text">Sign Up</h3>
                <div className="section"></div>
                
                <div className="z-depth-1 grey lighten-5 row form-group">

                    <form className="col s12 center" onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <input ref={username} className={(usernameError ? 'invalid' : 'validate')} type='text' name='username' id='username' required />
                                <label htmlFor='username'>Username</label>
                                <span className="helper-text" data-error={usernameError}></span>
                            </div>

                            <div className='input-field col s12'>
                                <input ref={password} className={passwordDoNotMatch || passwordError ? 'invalid' : 'validate'} type='password' type='password' name='password' id='password' required />
                                <label htmlFor='password'>Password</label>
                                <span className="helper-text" data-error={passwordError}></span>

                            </div>

                            <div className='input-field col s12'>
                                <input ref={confirmPassword} className={passwordDoNotMatch ? 'invalid' : 'validate'} type='password' name='confirm-password' id='confirm-password' required onChange={matchPassword} />
                                <label htmlFor='confirm-password'>Confirm Password</label>
                                <span className="helper-text" data-error="Passwords Do Not match!"></span>
                            </div>


                        </div>

                        <br />
                        <center>
                            <div className='row'>
                                <button type='submit' name='btn_login' className='col s12 waves-effect waves-light btn btn-large purple'>Signup</button>
                            </div>
                        </center>
                    </form>

                    <Link href='/login'>Login</Link>
                </div>
            </div>

            <style jsx>
            {`
                .page-container {
                    height: calc(100vh - 64px);
                    width: 100%;
                    display: -ms-flexbox;
                    display: flex;
                    color: rgb(255, 255, 255);
                    padding: 10px;
                }

                .form-group {
                    display: inline-block; 
                    padding: 50px 10px 50px 10px;
                    border: 1px solid #EEE;
                    width: 100%
                }
                
                @media (min-width: 600px) {
                    .form-group{
                        width: 450px;
                        padding: 50px;
                        border-radius: 10px;
                    }
                }
                
            `}
        </style>
        </center>
    )
}


export default PublicOnlyRoute(Signup)
