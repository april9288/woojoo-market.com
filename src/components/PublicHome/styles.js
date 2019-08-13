import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledFirstSection = styled.section`
    background-image: url('https://woojoo.s3-us-west-1.amazonaws.com/bg3.webp');
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;
`;

export const StyledGrayLayer = styled.section`
    background: rgba(0.1, 0.1, 0.1, 0.4);
    height: 80vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: inline-grid;
    align-items: center;
    text-align: center;
`;

export const StyledText = styled.div`
    margin: 0;
    padding: 0;
    font-size: 3rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledButton = styled.button`
    background: transparent;
    border: ${props =>
        props.att ? '2px solid rgba(0,0,0,0.8)' : '2px solid white'};
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 1rem;
    cursor: pointer;
    color: ${props => (props.att ? 'rgba(0,0,0,0.8)' : 'white')};

    &:hover {
        background: #d93c7cfc;
    }

    a {
        text-decoration: none;
    }
`;

export const StyledSubSection = styled.section`
    margin-top: 5rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const StyledText2 = styled.div`
    color: ${props => (props.att2 || props.att3 ? 'white' : 'rgba(0,0,0,0.8)')};
    font-weight: bold;
    font-size: ${props => (props.att3 ? '2rem' : '4rem')};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const StyledImage = styled.img`
    margin: 5rem;
`;
