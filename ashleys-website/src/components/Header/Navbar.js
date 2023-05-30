import React, {useState}  from 'react'
import { PrimaryNav, MenuLink, Menu, Hamburger } from './NavElement'
import { Link } from 'react-router-dom';
// const Navbar = () => {
//     return (
//         <>
//             <PrimaryNav>
//                 <Hamburger />
//                 <Menu>
//                     <MenuLink to="/home" activeStyle>
//                         Home
//                     </MenuLink>
//                     <MenuLink to="/about" activeStyle>
//                         About
//                     </MenuLink>
//                     <MenuLink to="/articles" activeStyle>
//                         Articles
//                     </MenuLink>
//                     <MenuLink to="/blog" activeStyle>
//                         Blog
//                     </MenuLink>
//                 </Menu>
//             </PrimaryNav>
//         </>
//     )
// }

function Navbar() {
    const [click, setClick] = useState(false); //Variables to change state
    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    return (
        <>
            <nav className='navbar"'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'>
                        TRVL <i className='fab fa-typo3' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu-active' : 'nav-menu'}>
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
                            <Link to='/about' className='nav-links' onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
