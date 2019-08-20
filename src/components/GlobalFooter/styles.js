import styled from 'styled-components';

export const StyledSection = styled.section`
    border-top: 1.5px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    margin: auto;
`;

export const StyledSubSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    height: 15vh;
    color: white;
    font-size: 2rem;
`;

export const StyledText = styled.div`
    color: ${({ att }) => (att ? 'black' : 'black')};
    font-weight: bold;
    font-size: ${({ att }) => (att === 'Description' ? '1rem' : '2rem')};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
