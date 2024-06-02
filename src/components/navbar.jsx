import React, { useEffect, useState } from 'react';
import Logo from '../assets/Logo.png';
import { Link } from 'react-dom';
import {FaXmark, FaBars} from "react-icons/fa6";
import { useAuth0 } from "@auth0/auth0-react";



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSticky, setIsSticky] = useState(false);
    const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll); // Use removeEventListener to avoid memory leaks
        }
    }, []) // Add an empty dependency array to run the effect only once
    

    const navItems = [
        { link: "Home", path: "/home" },
        { link: "MoodTracker", path: "/moodtracker" },
        { link: "Dashboard", path: "/dashboard" },
        { link: "Recommendations", path: "/recommendations" },
        { link: "Doc Nearby", path: "/docnearby" },
        { link: "About Us", path: "/aboutus" },
    ];
    
    return (
        <header className={`w-full ${isSticky ? 'bg-white' : 'bg-transparent'} fixed top-0 left-0 right-0`}>
            <nav className={`bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 right-0 left-0`}>
             
              <div className='flex justify-between items-center text-basr gap-8'>

                    <a href="/" className="text-2xl font-semibold flex items-center space-x-3">
                        <img src={Logo} alt="" className="w-10 inline-block items-center"/>
                        <span className="text-[#1E12ED]">YOU-GA</span>
                    </a>
                
                {/* nav items for large devices */}
                <ul className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} space-x-12`}>
                    {navItems.map(({ link, path }) => (
                        <li key={path}>
                            <a href={path} className="block text-base text-[#1E12ED] hover:text-brandPrimary font-medium">
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
                {/* button for large devices */}
                <div className='space-x-12 hidden lg:flex items-center text-xl'>
               
                    {/* <a href="/" className='hidden lg:flex items-center text-skyblue hover:text-DarkBlue'>Login</a> */}
                    {/* <button 
                    onClick={() => loginWithRedirect()}
                    >Log In</button> */}
                    {isAuthenticated && <p> {user.name} </p>}

                    {
                        isAuthenticated ? (
                        
                            <button
                            onClick={() => logout({ returnTo: window.location.origin})} 
                            className='bg-darkBlue text-white text-lg py-2 px-4 transition-all duration-300 rounded
                    hover: bg-orange'>
                                Log-Out
                            </button>
                        
                        ) : (
                            
                                <button onClick={() => loginWithRedirect()} className='bg-darkBlue text-white text-lg py-2 px-4 transition-all duration-300 rounded
                    hover: bg-orange'>Login</button>
                            
                        )
                    }
                    {/* <button onClick={() => loginWithRedirect()} className='bg-darkBlue text-white text-lg py-2 px-4 transition-all duration-300 rounded
                    hover: bg-orange'>Login</button>
                    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                     Log Out
                    </button> */}

                </div>

                {/* {menu button only mobile devices*/}
                <div className='md:hidden'>
                    <button 
                    onClick={() => loginWithRedirect()}
                    // onClick={toggleMenu}
                    className='focus:outline-none focus:text-darkblue text-xl'>
                        {
                            isMenuOpen ? (<FaXmark className='h-6 w-6 text-DarkBlue'/>) : (<FaBars className='h-6 w-6 text-DarkBlue'></FaBars>)
                        }
                    </button>
                </div>

                
                 {/* nav items for mobile devices */}
                 <div className={`md:hidden ${isMenuOpen ? 'block fixed top-0 right-0 left-0 text-xl bg-blue-700' : 'hidden'}`}>
                 <ul className="py-4"> 
                   {navItems.map(({ link, path }) => (
                       <li key={path}> 
                         <a href={path} className="block px-4 py-2 text-white hover:text-orange">
                          {link} 
                        </a> 
                        </li> 
                        ))}
                 </ul> 
                 </div>

                
 

             </div>
        </nav>
    </header>
   );
}

export default Navbar;
