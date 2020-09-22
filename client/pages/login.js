
import { useState } from 'react'
import Link from 'next/link'

import Layout from '../components/layout';
import Navbar from '../components/navbar';
import Login from '../components/login'


const LoginPage = () => {
  return (
    <Layout>
      <Navbar />
      <Login />
    </Layout>
  )
}

export default LoginPage
