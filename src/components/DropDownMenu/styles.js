import styled from 'styled-components';

export const StyledDropDownButton = styled.button`
    background: transparent;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    border: transparent;

    &:hover {
        color: rgba(0, 0, 0, 0.4);
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
    background: white;
    width: 12rem;

    a,
    button {
        text-decoration: none;
        border: transparent;
        font-size: 14px;
        padding: 0.5rem;
        background: transparent;
        cursor: pointer;
        color: rgba(0, 0, 0, 0.8);

        &:hover {
            background: rgba(0, 0, 0, 0.3);
        }
    }

    button {
        border-top: 1px solid gray;
    }
`;
