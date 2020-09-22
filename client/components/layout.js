
import Head from 'next/head';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Next App</title>
                <link rel="icon" href="/favicon.ico" />

                {/* <!-- Compiled and minified CSS --> */}
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css"/> 
                  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link> 
                {/* <!-- Compiled and minified JavaScript --> */}
                <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
            </Head>

            {children}
        </>
    )
};

export default Layout;
