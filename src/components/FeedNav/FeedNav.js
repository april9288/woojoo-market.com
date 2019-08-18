import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import DropDownMenu from '../DropDownMenu';
import {
    StyledSection,
    StyledSubSection,
    StyledLogo,
    StyledSearch
} from './styles';

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
            <StyledSubSection>
                <StyledLogo>
                    <Link to="/feed">
                        <img
                            src="https://woojoo.s3-us-west-1.amazonaws.com/logo1.png"
                            alt="company logo"
                            width="60px"
                        />
                    </Link>
                </StyledLogo>
                <StyledSearch type="search" placeholder="search" />
                <DropDownMenu showMenu={showMenu} show={show} />
            </StyledSubSection>
        </StyledSection>
    );
};

export default FeedNav;
