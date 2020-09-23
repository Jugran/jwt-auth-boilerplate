
import Link from 'next/link'

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Signup from '../components/signup'


const SignupPage = () => {
  return (
    <Layout>
      <Navbar />
      <div className="container">
        <Signup />
      </div>
    </Layout>
  )
}

export default SignupPage
