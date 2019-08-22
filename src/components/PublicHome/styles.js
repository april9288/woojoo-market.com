import styled from 'styled-components';

export const StyledSection = styled.section``;

export const StyledFirstSection = styled.section`
    background-image: url('https://woojoo.s3-us-west-1.amazonaws.com/bg4.webp');
    height: 80vh;
    background-repeat: no-repeat;
    background-size: cover;

    display: flex;
    flex-direction: column;
    align-items: end;
    padding-left: 2rem;

    width: 80%;
    margin: auto;
    margin-top: 2%;
`;

export const StyledGrayLayer = styled.section`
    // background: rgba(0.1, 0.1, 0.1, 0.4);
    height: 80vh;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: flex-start;
`;

export const StyledText = styled.div`
    margin: 0;
    padding: 0;
    font-size: 2.5rem;
    color: white;
    display: flex;
    flex-direction: column;

    align-items: center;
    justify-content: flex-start;
    margin-top: 8%;
`;

export const StyledButton = styled.button`
    background: transparent;
    border: ${({ att }) =>
        att ? '2px solid rgba(0,0,0,0.8)' : '2px solid white'};
    font-size: 1.5rem;
    margin: 1rem 0;
    padding: 1rem;
    cursor: pointer;
    color: ${({ att }) => (att ? 'rgba(0,0,0,0.8)' : 'white')};

    &:hover {
        background: rgba(0, 0, 0, 0.2);
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
    color: ${({ att2, att3 }) => (att2 || att3 ? 'white' : 'rgba(0,0,0,0.8)')};
    font-weight: bold;
    font-size: ${({ att3 }) => (att3 ? '2rem' : '4rem')};
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    section {
        font-size: 2rem;
    }
`;

export const StyledImage = styled.img`
    margin: 5rem;
`;
