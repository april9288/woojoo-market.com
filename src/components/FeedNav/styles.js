import styled from 'styled-components';

export const StyledSection = styled.section`
    background: white;
    display: flex;
    justify-content: center;
    padding: 0.5rem 2rem;
    align-items: center;
    position: sticky;
    box-shadow: 0 1px 6px 1px rgba(0, 0, 0, 0.1);
`;

export const StyledSubSection = styled.section`
    display: flex;
    justify-content: space-between;
    width: 60%;
    margin: auto;
    align-items: center;
`;

export const StyledLogo = styled.p`
    margin: 0;
    font-size: 2rem;
    a {
        color: #9b2727;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const StyledSearch = styled.input`
    padding: 0.5rem;
    height: 3rem;
    width: 50%;
    border-radius: 0.4rem;
    border: 1px solid rgba(0, 0, 0, 0.2);

    &:focus {
        border-radius: 0.4rem;
        border: 1.5px solid skyblue;
        outline: none;
    }
`;
