
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useAuth } from '../../context/authProvider'


export function PrivateRoute(Component){
    return () => {
        const { auth } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (!auth.authenticated){
                router.push('/login')
            }
        }, [auth]);
        
        return (<Component {...arguments} />)
    }
    
}

export function PublicOnlyRoute(Component){
    return () => {
        const { auth, login } = useAuth();
        const router = useRouter();

        useEffect(() => {
            if (auth.authenticated){
                router.push('/profile')
            }
        }, [auth]);
        
        return (<Component {...arguments} />)
    }
    
}

