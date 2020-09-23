
import { useRef } from 'react'
import Link from 'next/link'

import { useAuth } from '../context/authProvider'

const Login = () => {

    const username = useRef();
    const password = useRef();

    const { auth, login } = useAuth()


    const handleSubmit = e => {
        e.preventDefault();
        // console.log(`Login details \n username: ${username.current.value} \n password: ${password.current.value}`);
        login(username.current.value, password.current.value);
        // redirect

    }
    console.log(auth)


    return (
        <center className="valign-wrapper page-container">

            <div className="container">


                <h3 className="indigo-text">Login</h3>
                <div className="section"></div>

                <div className="z-depth-1 grey lighten-5 row form-group">

                    <form className="col s12 center" onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <input ref={username} className='validate' type='text' name='username' id='username' required />
                                <label htmlFor='username'>Username</label>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <input ref={password} className='validate' type='password' name='password' id='password' required />
                                <label htmlFor='password'>Password</label>
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


export default Login



