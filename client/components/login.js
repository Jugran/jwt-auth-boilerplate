
import { useState, useRef } from 'react'
import Link from 'next/link'

const Login = () => {

    const username = useRef();
    const password = useRef();


    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Login details \n username: ${username.current.value} \n password: ${password.current.value}`);

    }

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

        </center>
    )
}


export default Login



