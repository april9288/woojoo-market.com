import styled from 'styled-components';

export const StyledDropDownButton = styled.button`
    background: transparent;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1.2rem;
    border: 2px solid #eb4545;

    &:hover {
        background: rgba(0, 0, 0, 0.1);
    }

    a {
        text-decoration: none;
    }
`;

export const StyledDropDownMenu = styled.section`
    position: fixed;
    right: 25px;
    top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: rgba(0, 0, 0, 0.2);
    width: 10rem;

    a {
        text-decoration: none;
        border: transparent;
        font-size: 1rem;
        padding: 0.5rem;
        background: transparent;
        cursor: pointer;
        color: rgba(0,0,0,0.8)

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }
`;
