import styled from 'styled-components';

export const StyledCardSection = styled.section`
    margin: 12px 0;
    padding: 20px;
    border-radius: 2px;
    box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    background: white;
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
    cursor: pointer;

    h3 {
        margin: 0.5rem 0;
    }

    p {
        margin: 0.5rem 0;
    }
`;
