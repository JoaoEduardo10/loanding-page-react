import styled, { css } from 'styled-components';

export const Conteiner = styled.div`
    ${({ theme }) => css`
        max-width: 120rem;
        margin: 0 auto;
        padding: ${theme.spacings.large};
    `}
`;