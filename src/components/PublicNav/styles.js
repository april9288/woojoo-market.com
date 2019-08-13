import styled from 'styled-components';

export const StyledSection = styled.section`
    background: #d93c7cfc;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem 2rem;
    align-items: center;
`;

export const StyledLogo = styled.p`
    margin: 0;
    font-size: 2rem;
    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const StyledButton = styled.section`
    background: transparent;
    display: flex;
    font-size: 1.2rem;

    a {
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const StyledDivider = styled.section`
    border-left: 2px solid white;
    margin: 0 1rem;
`;
