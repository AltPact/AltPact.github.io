import React, {useState, useEffect}  from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import { Link } from 'react-router-dom';
// import { Button } from 'bootstrap';
import { Button } from '../Button'
import './Navbar.css'
// import AshTech from '../../icons/AshTech.tsx'

function Navbar() {
    const [click, setClick] = useState(false); //Variables to change state
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton()
    },[]);
    
    window.addEventListener('resize', showButton);
    return (
        <>
            <nav className='navbar"'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        AshTech Ventures 
                        {/* <i className='fab fa-typo3' /> */}
                        {/* <AshTech/> */}
                    </Link>
                    {/* Creates button that can expand navbar for mobile user */}
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fa fa-times' : 'fa fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/articles' className='nav-links' onClick={closeMobileMenu}>
                                Articles
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/blog' className='nav-links' onClick={closeMobileMenu}>
                                Blog
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects/1' className='nav-links' onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
                </div>
            </nav>
        </>
    );
}

export default Navbar
