import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    margin: auto;
    align-items: flex-start;
    margin: 3rem auto;
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.1);
    padding: 2%;
    border-radius: 3px;
`;

export const StyledSubSection = styled.section`
    display: flex;
    padding: 2%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 90%;
    margin: auto;
    padding-bottom: 3%;
`;

export const StyledKey = styled.section`
    font-size: 25px;
    line-height: 24px;
    font-weight: 500;
    width: 20%;
`;

export const StyledPhotoKey = styled.section`
    font-size: 25px;
    line-height: 24px;
    font-weight: 500;
    width: 12%;
    display: flex;
    flex-direction: column;

    input {
        display: none;
    }
`;

export const StyledUploadButton = styled.button`
    font-size: 1.2rem;
    height: 2rem;
    border: transparent;
    color: white;
    border-radius: 3px;
    background: #000000e0;
    cursor: pointer;
    margin-top: 10%;

    label {
        cursor: pointer;
    }

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
`;

export const StyledDeleteButton = styled.button`
    margin-top: 10%;
    border: transparent;
    background: rgba(0, 0, 0, 0.2);
    cursor: pointer;
    padding: 5px;
`;

export const StyledPreview = styled.section`
    width: 100%;
    margin-left: 10%;

    input {
        width: 400px;
        height: 400px;
        padding: 8px 12px;
        font-size: 14px;
        min-height: 36px;
        background: transparent;
        border: 1px solid #c1bfbc;
        border-radius: 2px;
        color: #4a4a4a;
    }
`;

export const StyledInput = styled.section`
    width: 100%;

    input {
        width: ${({ att }) =>
            att === 'Title' || att === 'Description' ? '80%' : '20%'};
        padding: 8px 12px;
        font-size: 14px;
        min-height: 36px;
        background: transparent;
        border: 1px solid #c1bfbc;
        border-radius: 2px;
        color: #4a4a4a;
    }

    select {
        padding: 8px 12px;
        font-size: 14px;
        background: transparent;
        border: 1px solid #c1bfbc;
        border-radius: 2px;
        color: #4a4a4a;
        line-height: 36px;
        height: 3.4rem;
        width: 16rem;
    }
`;

export const StyledButton = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-end;

    button {
        font-size: 18px;
        min-width: 78px;
        height: 46px;
        line-height: 44px;
        margin-right: 4%;
        margin-top: 2%;
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

export const StyledWarning = styled.p`
    margin: 0;
    padding: 0;
    color: red;
`;
