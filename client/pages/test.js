import Layout from '../components/layout';
import Navbar from '../components/navbar';
import TestComponent from '../components/test';
import useLocalStorage from '../hooks/useLocalStorage'

import { useEffect } from 'react'

const TestPage = ({ data }) => {
    
    useEffect(() => {
        console.log('client render page')
    })

    return (
        <Layout>
            <Navbar />
            <TestComponent data={data} />
        </Layout>
    )
}

export const getServerSideProps = (context) => {
    
    const data = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    };
    

    return {
        props: {data: data  }
    }
}

export default TestPage
