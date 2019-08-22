import styled from 'styled-components';

export const StyledFirstLine = styled.section`
    background: black;
    padding: 1.5rem 2rem;
    display: flex;
    justify-content: flex-end;

    padding-right: 10%;
`;

export const StyledSection = styled.section`
    background: #fffffffc;
    display: flex;
    justify-content: space-between;
    padding: 0 2rem;
    align-items: center;

    width: 82%;
    margin: auto;

    img {
        cursor: pointer;
    }
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
    font-weight: bold;

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
