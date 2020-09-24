
import React, { useEffect, useContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const AuthContext = React.createContext();
const url = require('../config.json')['server-url'];


export function useAuth(){
    return useContext(AuthContext);
}


export function AuthProvider({ children }){

    const authData = {authenticated: false, user_id: null, message: null};
    const [auth, setAuth] = useLocalStorage('auth', authData)

    const login = (username, password) => {
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
            setAuth({authenticated: false, user_id: null, message: 'error'});
        });
        
    }

    const signup = (username, password) => {
        const credentials = {
            username: username,
            password: password
        }

        fetch(url + 'auth/signup', {
            method: 'POST',
            credentials: 'include',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        }).then(resp => resp.json())
        .then(data => {
            if (data.success === 'OK'){
                console.log('signup successfull! ');
                setAuth({authenticated: false, user_id: null, message: 'user created successfully'});
                // setAuth({authenticated: true, user_id: data.message.user_id, message: 'user created successfully'});
                login(username, password);
            }
            else{
                    console.log('SIGNUP_FAILED resp JSON ', data)
                    setAuth({authenticated: false, user_id: null, message: data.message});
            }
        })
        .catch((error) => {
            console.log('ERROR: ', error);
            setAuth({authenticated: false, user_id: null, message: 'error'});
        });
    }

    const logout = async () => {
        fetch(url + 'auth/logout', {
            method: 'POST',
            credentials: 'include',
        })
        .then(response => {
            if (response.status === 200){
                response.json().then(data => {
                    console.log('logout successfull');
                    setAuth({authenticated: false, user_id: null, message: data.message});

                })
            }
        })
        .catch((error) => {
            console.log('logout ERROR: ', error);
        });
        
    }

    return (
        <AuthContext.Provider value={{auth, login, logout, signup}}>
            {children}
        </AuthContext.Provider>
    )
    
}