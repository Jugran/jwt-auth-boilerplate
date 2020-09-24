
import { useRef } from 'react'
import Link from 'next/link'

import { PublicOnlyRoute } from './hoc/customRoutes'
import { useAuth } from '../context/authProvider'

const Login = () => {

    const username = useRef();
    const password = useRef();
    const { auth, login } = useAuth();

    
    const handleSubmit = e => {
        e.preventDefault();
        login(username.current.value, password.current.value);
    }
    
    const handleError = field => {
        
        console.log('auth: ', auth);
        if (auth.message === null){
            return null
        }
        
        return (auth.message[field] ? auth.message[field] : null)
    
    }
    const usernameError = handleError('username');
    const passwordError = handleError('password');
    
    return (
        <center className="valign-wrapper page-container">

            <div className="container">


                <h3 className="indigo-text">Login</h3>
                <div className="section"></div>

                <div className="z-depth-1 grey lighten-5 row form-group">

                    <form className="col s12 center" onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <input ref={username} className={(usernameError ? 'invalid' : 'validate')} type='text' name='username' id='username' required />
                                <label htmlFor='username'>Username</label>
                                <span className="helper-text" data-error={usernameError}></span>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <input ref={password} className={(passwordError ? 'invalid' : 'validate')}  type='password' name='password' id='password' required />
                                <label htmlFor='password'>Password</label>
                                <span className="helper-text" data-error={passwordError}></span>
                            </div>
                            <label>
                                <a className='pink-text' href='#!'><b>Forgot Password?</b></a>
                            </label>
                        </div>

                        <br />
                        <center>
                            <div className='row'>
                                <button type='submit' name='btn_login' className='col s12 btn btn-large waves-effect waves-light indigo accent-4'>Login</button>
                            </div>
                        </center>
                    </form>

                    <Link href='/signup'>Create Account</Link>
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


export default PublicOnlyRoute(Login)



