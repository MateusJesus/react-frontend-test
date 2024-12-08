import React from 'react';
import { Link, useLocation } from 'react-router';
import styled from 'styled-components';

const Navigation = styled.nav`
    margin: 0;
    text-transform: uppercase;
`

const NavigationContent = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 5px;
    li {
        text-decoration: none;
        color: var(--breadcrumb-color);
        a{    
            text-decoration: none;
            color: var(--breadcrumb-color);
        }
    }
`

const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split('/').filter((path) => path);

    return (
        <Navigation>
            <NavigationContent>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                {paths.map((path, index) => {
                    const routeTo = `/${paths.slice(0, index + 1).join('/')}`;
                    const isLast = index === paths.length - 1;
                    return (
                        <li key={path}>
                            {isLast ? (
                                <span>{"> "+path}</span>
                            ) : (
                                
                                <Link to={routeTo}>{"> "+path}</Link>
                            )}
                        </li>
                    );
                })}
            </NavigationContent>
        </Navigation>
    );
};

export default Breadcrumb;
