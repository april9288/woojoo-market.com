import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DropDownMenu from '../DropDownMenu';
import { StyledSection, StyledLogo, StyledSearch } from './styles';

const FeedNav = () => {
    const [show, setShow] = useState(false);

    const closeMenu = () => {
        if (show) {
            setShow(false);
            document.removeEventListener('click', closeMenu);
        }
    };

    const showMenu = e => {
        e.preventDefault();
        setShow(true);
        document.addEventListener('click', closeMenu);
    };

    useEffect(() => {
        return () => {
            document.removeEventListener('click', closeMenu);
        };
    }, []);

    return (
        <StyledSection>
            <StyledLogo>
                <Link to="/feed">WJM</Link>
            </StyledLogo>
            <StyledSearch type="search" placeholder="search" />
            <DropDownMenu showMenu={showMenu} show={show} />
        </StyledSection>
    );
};

export default FeedNav;
