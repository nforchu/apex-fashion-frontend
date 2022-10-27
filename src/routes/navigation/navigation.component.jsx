import { Fragment, useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ReactComponent as ReactLogo } from '../../assets/react.svg';
import { UserContext } from '../../context/user.context';
import './navigation.styles.scss';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext);
    //const { isCartOpen } = useContext(CartContext);

    const signOutHandler =  () => {
        setCurrentUser(null);
    }

    return (
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to={'/'}>
                    <div><ReactLogo className='logo' /></div>
                    <div className='app-name'>APEX CLOTHING</div>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to={'shop'}>Shop</Link>
                    <Link className='nav-link' to={'contact'}>Contact</Link>   
                    {
                        currentUser ? 
                            (<span onClick={signOutHandler} className='nav-link'>Signout</span>): 
                            (<Link className='nav-link' to={'auth'}>Sign in</Link>)
                    }
                                   
                </div>
            </div>
            <Outlet />            
        </Fragment>
    )

}

export default Navigation;