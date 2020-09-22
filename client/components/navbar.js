import { useEffect } from 'react';
import Link from 'next/link';

const Navbar = (props) => {
    const is_authenticated = props.auth ? true : false;

    useEffect(() => {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, {});
    })

    return (
        <div className="navbar">
            <nav className="navbar-fixed">
                <div className="nav-wrapper">
                <a className="brand-logo" style={{padding: "0 5px"}} href="/">Node app</a>

                    <a href="#" data-target="navbar" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul className="right hide-on-med-and-down">
                    {is_authenticated ? (
                        <>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/logout">Logout</Link></li>
                        </>
                    ) : (
                    <>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/signup">Sign up</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </>
                    )}
                    </ul>

                </div>
            </nav>

            <ul className="sidenav sidenav-close" id="navbar">
                <div className="section"></div>
                    {is_authenticated ? (
                        <>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/profile">Profile</Link></li>
                            <li><Link href="/logout">Logout</Link></li>
                        </>
                    ) : (
                    <>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/signup">Sign up</Link></li>
                        <li><Link href="/login">Login</Link></li>
                    </>
                    )}
            </ul>
        </div>
    )
}

export default Navbar


// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarFixed"
// aria-controls="navbarFixed" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarFixed">
// <div className="navbar-nav ml-auto">
//     {is_authenticated ? (
//         <>
//             <Link href="/feed">
//                 <a className="nav-link active" >Home</a>
//             </Link>
//             <Link href='/profile'>
//                 <a className="nav-link">Profile</a>
//             </Link>
//             <Link href='#' onClick={() => console.log('Let me out!!!')}>
//                 <a className="nav-link">Logout</a>
//             </Link>
//         </>
//     ) : (
//             <>
//                 <Link href="/">
//                     <a className="nav-link active" >Home</a>
//                 </Link>                          
//                 <Link href='/signup'>
//                     <a className="nav-link" >Sign Up</a>
//                 </Link>
//                 <Link href='/login'>
//                     <a className="nav-link">Login</a>
//                 </Link>
//             </>
//         )}

// </div>
// </div>
