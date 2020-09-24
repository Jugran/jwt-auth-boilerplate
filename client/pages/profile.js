import { PrivateRoute } from '../components/hoc/customRoutes'

import Layout from '../components/layout';
import Navbar from '../components/navbar';

import { useAuth } from '../context/authProvider';


const ProfilePage = () => {
  const { auth } = useAuth()

  return (
    <Layout>
      <Navbar />
      <h2>
          Hello {auth.user_id}
      </h2>
    </Layout>
  )
}

export default PrivateRoute(ProfilePage)
