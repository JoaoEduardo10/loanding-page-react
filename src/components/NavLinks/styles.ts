import styled, { css } from 'styled-components';

export const Conteiner = styled.div`
    ${({ theme }) => css`
        display: flex;
        flex-flow: wrap;

        @media ${theme.media.lteMedia} {
            flex-flow: column;
            align-items: center;
        }
    `}
`;