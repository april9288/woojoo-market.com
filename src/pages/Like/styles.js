import styled from 'styled-components';

export const StyledPageSection = styled.section`
    min-height: 60vh;
`;

export const StyledSubSection = styled.section`
    width: 60%;
    margin: 2rem auto;

    h1 {
        border-bottom: 1.5px solid rgba(0, 0, 0, 0.5);
        font-size: 2rem;
    }
`;

export const StyledTableSection = styled.section`
    display: flex;
    flex-direction: column;
    margin: 2rem 0;
    display: flex;
    justify-content: center;

    margin-top: ${({ att }) => (att === 'total' ? '5rem' : '0')};
    border-top: ${({ att }) =>
        att === 'total' ? '2px solid rgba(0,0,0,0.2)' : 'none'};

    tr {
        display: ${({ att }) => att === 'total' && 'flex'};
        align-items: ${({ att }) => att === 'total' && 'center'};
        justify-content: ${({ att }) => att === 'total' && 'space-around'};
    }

    table {
        font-size: 1.2rem;
        text-align: center;
        width: 100%;
    }

    th {
        margin: 0 1rem;
    }

    img {
        cursor: pointer;
    }

    h5 {
        cursor: pointer;
    }

    button {
        height: 2rem;
        cursor: pointer;
        border: transparent;
        color: white;
        border-radius: 3px;
        background: rgba(0, 0, 0, 0.8);

        &:hover {
            background: rgba(0, 0, 0, 0.2);
        }
    }
`;
