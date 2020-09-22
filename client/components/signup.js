
import { useState, useRef } from 'react'
import Link from 'next/link'

const Signup = () => {

    const username = useRef();
    const password = useRef();
    const confirmPassword = useRef()

    const [passwordDoNotMatch, setPasswordDoNotMatch] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        console.log(`Signup details \n username: ${username.current.value} \n password: ${password.current.value}`);

    }

    const matchPassword = e => {
        const checkPass = confirmPassword.current.value;
        if (password.current.value.substr(0, checkPass.length) !== checkPass) {
            // password do not match
            setPasswordDoNotMatch(true);
        }
        else {
            setPasswordDoNotMatch(false);
        }
    }

    return (
        <center className="valign-wrapper page-container">

            <div className="container">
                <h3 className="purple-text">Sign Up</h3>
                <div className="section"></div>
                
                <div className="z-depth-1 grey lighten-5 row form-group">

                    <form className="col s12 center" onSubmit={handleSubmit}>

                        <div className='row'>
                            <div className='input-field col s12'>
                                <input ref={username} className='validate' type='text' name='username' id='username' required />
                                <label htmlFor='username'>Username</label>
                            </div>

                            <div className='input-field col s12'>
                                <input ref={password} className={passwordDoNotMatch ? 'invalid' : 'valid'} type='password' type='password' name='password' id='password' required />
                                <label htmlFor='password'>Password</label>
                            </div>

                            <div className='input-field col s12'>
                                <input ref={confirmPassword} className={passwordDoNotMatch ? 'invalid' : 'valid'} type='password' name='confirm-password' id='confirm-password' required onChange={matchPassword} />
                                <label htmlFor='confirm-password'>Confirm Password</label>
                                <span class="helper-text" data-error="Passwords Do Not match!"></span>
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
        </center>
    )
}


export default Signup



