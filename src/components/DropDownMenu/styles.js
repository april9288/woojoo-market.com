import styled from 'styled-components';

export const StyledDropDownButton = styled.button`
    background: transparent;
    cursor: pointer;
    color: rgba(0, 0, 0, 0.8);
    font-size: 14px;
    border: transparent;
    display: flex;
    align-items: center;

    &:hover {
        color: rgba(0, 0, 0, 0.4);
    }

    a {
        text-decoration: none;
    }

    img {
        border-radius: 50%;
        margin-right: 12px;
    }
`;

export const StyledDropDownMenu = styled.section`
    position: fixed;
    right: 20%;
    top: 7%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: white;
    width: 12rem;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

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
            background: rgba(0, 0, 0, 0.1);
        }
    }

    button {
        border-top: 1px solid gray;
    }
`;
