import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #4b4453;
    height: 40vh;
    color: white;
    font-size: 4rem;
`;

export const StyledText = styled.div`
    color: ${props => (props.att1 || props.att2 ? 'white' : 'rgba(0,0,0,0.8)')};
    font-weight: bold;
    font-size: ${props => (props.att2 ? '2rem' : '4rem')};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
