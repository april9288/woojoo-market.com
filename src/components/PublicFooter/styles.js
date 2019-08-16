import styled from 'styled-components';

export const StyledHigherSection = styled.section`
    border-top: 2px solid rgba(0, 0, 0, 0.3);
    width: 80%;
    display: flex;
    justify-content: center;
    margin: auto;
`;

export const StyledSection = styled.section`
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
    color: ${props => (props.att1 || props.att2 ? 'black' : 'black')};
    font-weight: bold;
    font-size: ${props => (props.att2 ? '1rem' : '2rem')};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
