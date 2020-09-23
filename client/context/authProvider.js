
import React, { useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = React.createContext();
const url = require('../config.json')['server-url'];


export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({ children }){

    const authData = {authenticated: false, user_id: null, message: null};
    const [auth, setAuth] = useLocalStorage('auth', authData)

    const login = async (username, password) => {
        const credentials = {
            username: username,
            password: password
        }

        fetch(url + 'auth/login', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(resp => resp.json())
        .then(data => {
            console.log('login response ', data);
            if (data.success === 'OK'){
                //login success
                setAuth({authenticated: true, user_id: data.message.user_id, message: 'user logged in'});
            }
            else{
                // login failed
                setAuth({authenticated: false, user_id: null, message: data.message});
            }
        })
        .catch((error) => {
            console.log('ERROR: ', error);
            // dispatch({type: 'LOGIN_FAILED', data: {error: error}})
            setAuth({authenticated: false, user_id: null, message: 'error'});
        });
    }

    return (
        <AuthContext.Provider value={{auth, login}}>
            {children}
        </AuthContext.Provider>
    )
    
}