import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
`;

export const StyledTopSection = styled.section`
    height: 500px;

    background: url(https://woojoo.s3-us-west-1.amazonaws.com/c6.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
`;

export const StyledTopSubSection = styled.section`
    display: flex;
    align-items: flex-end;
    width: 60%;
    margin: auto;
    justify-content: space-around;

    img {
        border-radius: 50%;
    }

    section {
        font-size: 1.5rem;
        font-weight: bold;
        height: 100%;
        color: rgba(0, 0, 0, 0.7);
    }
`;

export const StyledButtonSection = styled.section`
    position: absolute;
    height: 7%;
    width: 10%;

    button {
        font-size: 1rem;
        height: 40%;
        border: transparent;
        color: white;
        border-radius: 3px;
        background: #000000e0;
        cursor: pointer;

        &:hover {
            background: rgba(0, 0, 0, 0.7);
        }
    }
`;

export const StyledMenuSection = styled.section`
    border-bottom: 1.5px solid rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    padding: 1% 0;
`;

export const StyledMenuButton = styled.button`
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0 4%;
    cursor: pointer;
    max-height: 1.5rem;

    color: ${({ att, name }) =>
        att === name ? 'rgba(0, 0, 0, 0.8)' : 'rgba(0, 0, 0, 0.4)'};

    &:focus {
        outline-color: white;
    }

    &:hover {
        border-bottom: 2px solid black;
    }
`;

export const StyledBottomSection = styled.section`
    display: flex;
    justify-content: center;
    width: 80%;
    margin: 2% auto;
`;

export const StyledBottomSubSection = styled.section`
    width: 100%;
    display: flex;
    justify-content: center;
`;

export const StyledPostCard = styled.section`
    letter-spacing: 0.1rem;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3);
    font-size: 1rem;
    overflow: hidden;
    background: #fff;
    color: #4a4a4a;
    margin: 1rem;

    img {
        cursor: pointer;
    }
`;

export const StyledPostCardContent = styled.section`
    padding: 2%;

    button {
        font-size: 1rem;
        height: 40%;
        border: transparent;
        color: white;
        border-radius: 3px;
        background: #000000e0;
        cursor: pointer;

        margin: 2%;

        &:hover {
            background: rgba(0, 0, 0, 0.7);
        }
    }
`;

export const StyledFollowingsSection = styled.section`
    width: 50%;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    border-radius: 3px;
    margin: 0.5rem;
    background: #fff;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const StyledFollowingsCard = styled.section`
    margin: 2%;
    width: 90%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        justify-content: space-around;

        img {
            border-radius: 50%;
            padding: 2% 5%;
            cursor: pointer;
        }

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
    }
`;
