import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar, NavbarBrand, NavItem, Nav} from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import routes from '../../../router/routes';

import styles from './index.module.scss';

const Header = () => {
    
    return (
            <Navbar className={styles.container}>
                <NavbarBrand>Logo</NavbarBrand>
                <Nav>
                    {
                        routes.map(route => (
                            <NavItem className={styles.navItem} key={`${route.no}-${route.path}-headerRoute`}>
                                <Link to={route.path}>
                                    <span className={styles.label}>{route.label}</span>
                                    <FontAwesomeIcon icon={route.faIcon} />
                                </Link>
                            </NavItem>
                        ))
                    }
                </Nav>
            </Navbar>
    );
};

export default Header;
