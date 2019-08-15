import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DropDownMenu from '../DropDownMenu';
import { StyledSection, StyledLogo, StyledSearch } from './styles';

const FeedNav = () => {
    const [show, setShow] = useState(false);

    const closeMenu = () => {
        if (!show) {
            document.removeEventListener('click', closeMenu);
            setShow(false);
        }
    };
    const showMenu = () => {
        if (!show) {
            document.addEventListener('click', closeMenu);
            setShow(true);
        }
    };

    useEffect(() => {
        return () => {
            setShow(false);
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
