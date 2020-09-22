import Link from 'next/link';

import Layout from '../components/layout';
import Navbar from '../components/navbar';


export default function Home() {
  return (
    <Layout>
      <Navbar />
      <div className="container">
        <h1>Hello world</h1>
        <Link href='/'>Link to somthing</Link>
      </div>
    </Layout>
  )
}
