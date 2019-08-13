import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`;

export const StyledForm = styled.form`
    display: inline-grid;
    width: 30rem;

    input {
        margin: 0.5rem 0;
        padding: 1rem;
    }
`;

export const StyledButton = styled.button`
    margin: 1rem 0;
    background: transparent;
    border: 2px solid rgba(0, 0, 0, 0.8);
    padding: 1rem;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 1rem;
    color: rgba(0, 0, 0, 0.8);

    &:hover {
        background: #d65db1;
    }
`;

export const StyledText = styled.h1`
    text-align: center;
    font-size: ${props => (props.small ? '1.5rem' : '3rem')};
    color: rgba(0, 0, 0, 0.8);
`;

export const StyledForgotPasswordButton = styled.button`
    border: transparent;
    width: fit-content;
    font-size: 1rem;
    background: transparent;

    a {
        color: rgba(0, 0, 0, 0.6);
        text-decoration: none;
        cursor: pointer;
    }
`;

export const StyledLink = styled.section`
    text-align: center;
    margin-top: 2rem;
    border-top: 1px solid rgba(0, 0, 0, 0.8);
    padding-top: 1rem;
    color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;

    p {
        margin: 0;
        padding-right: 0.5rem;
    }

    a {
        text-decoration: none;
        cursor: pointer;
    }
`;

export const StyledWarning = styled.section`
    color: red;

    p {
        margin: 0;
        padding: 0;
    }
`;

export const StyledInforming = styled.section`
    color: rgba(0, 0, 0, 0.6);
    text-align: center;
    font-size: 0.8rem;

    p {
        margin: 0;
        padding: 0.5rem 2rem;
    }
`;
