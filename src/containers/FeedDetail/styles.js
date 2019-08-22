import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: row;
    height: 80vh;
    align-items: flex-start;
    width: 80%;
    margin: auto;
    padding-top: 4%;
`;

export const StyledPhotoSection = styled.section`
    margin: 2%;
`;

export const StyledPhotoPreviewSection = styled.section`
    margin: 2%;
    cursor: pointer;
`;

export const StyledRightSection = styled.section`
    margin: 2%;
    width: 30%;
`;

export const StyledProfileSection = styled.section`
    display: flex;
    margin-bottom: 20px;

    img {
        cursor: pointer;
        border-radius: 50%;
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }

    p {
        margin: 0.3rem 0;
        font-size: 0.8rem;
    }

    h4 {
        cursor: pointer;
        margin: 0.3rem 0;
    }
`;

export const StyledItemSection = styled.section`
    h1 {
        font-size: 2rem;
    }
    p {
        font-size: 2rem;
    }

    border-bottom: 2px solid rgba(0, 0, 0, 0.2);

    section {
        display: flex;
        align-items: center;
        justify-content: flex-start;

        div {
            width: 2rem;
            text-align: center;
            margin-left: 20px;
            border-radius: 2px;
            border: 1px solid rgba(0, 0, 0, 0.3);
        }
    }
`;

export const StyledDetail = styled.section`
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
`;

export const StyledButtonSection = styled.section`
    margin: 20px 0;
    width: 100%;
    display: flex;
`;

export const StyledButton = styled.button`
    margin-right: 20px;
    font-size: 18px;
    line-height: 44px;
    border: transparent;
    color: white;
    border-radius: 3px;
    background: #000000e0;
    cursor: pointer;

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
`;
