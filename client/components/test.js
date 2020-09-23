import React, { useEffect } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

const TestComponent = ({ data }) => {

    const [storage, setStorage] = useLocalStorage('data', data);

    useEffect(() => {
        console.log('client render component')
    })

    if(!storage){
        return <div>Loading...</div>
    }
    return (
        <div>
            <h3>Data - </h3>
            <br/>
            {JSON.stringify(storage)}
        </div>
    )
}

export default TestComponent
