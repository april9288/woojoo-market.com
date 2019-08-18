import styled from 'styled-components';

export const StyledSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    width: 60%;
    margin: 2% auto;
`;

export const StyledLeftSection = styled.section`
    width: 25%;

    p {
        margin: 2%;
        font-size: 2rem;
        padding: 2%;
        color: rgba(0, 0, 0, 0.8);
    }
`;

export const StyledMenu = styled.section`
    border-top: 1px solid #e6e2df;
    color: #2a2a2a;
    font-weight: 500;
    padding: 1.25em 1.75em;
    cursor: pointer;

    &:hover {
        background: #f5f2ee;
    }
`;

export const StyledRightSection = styled.section`
    max-width: 750px;
    width: 100%;
    padding: 2.5% 5%;
    margin: 0 1em;
    border-radius: 3px;
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.1);
    background: #fff;
    display: flex;
    flex-direction: column;

    p {
        padding: 1rem 0;
        border-bottom: 1px solid rgba(0, 0, 0, 0.2);
        font-size: 2rem;
        margin: 1rem 0;
    }
`;

export const StyledCell = styled.section`
    display: flex;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 90%;
    margin: auto;
    padding: 1rem 0 2rem 0;
`;

export const StyledKey = styled.section`
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    width: ${props =>
        props.att === 'newPassword' || props.att === 'newPassword2'
            ? '70%'
            : '30%'};
`;

export const StyledInput = styled.section`
    width: 100%;

    input {
        width: ${props =>
            props.att === 'address' || props.att === 'website' ? '80%' : '50%'};
        padding: 8px 12px;
        font-size: 14px;
        border: 1px solid #c1bfbc;
        border-radius: 2px;
        color: #4a4a4a;
        line-height: 2.5rem;
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

export const StyledSubSection = styled.section`
    display: flex;
    padding: 2%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    width: 90%;
    margin: auto;
    padding-bottom: 3%;
`;

export const StyledPhotoKey = styled.section`
    font-size: 1.5rem;
    line-height: 24px;
    font-weight: 500;
    width: 40%;
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

export const StyledWarning = styled.p`
    margin: 0.5rem 0 !important;
    padding: 0 !important;
    color: red;
    font-size: 1rem !important;
    border-bottom: transparent !important;
`;

export const StyledInforming = styled.h5`
    padding: 0;
    margin: 0;
    font-size: 1rem;
    background: aquamarine;
`;
