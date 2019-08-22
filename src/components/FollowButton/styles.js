import styled from 'styled-components';

export const StyledSection = styled.section`
    button {
        width: 5rem !important;
        height: 2rem !important;
        font-size: 1rem;
        height: 40%;
        border: transparent;
        color: white;
        border-radius: 3px;
        cursor: pointer;
        margin: 2%;
        background: ${({ att }) => (att ? 'rgba(0,0,0,0.2)' : '#000000e0')};

        &:hover {
            background: rgba(0, 0, 0, 0.7);
        }
    }
`;
