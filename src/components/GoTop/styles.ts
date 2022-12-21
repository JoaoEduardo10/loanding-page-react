import styled, { css } from 'styled-components';

export const Conteiner = styled.a`
    ${({ theme }) => css`
        position: fixed;
        background: ${theme.colors.primaryColor};
        display: flex;
        align-items: center;
        justify-content: center;
        width: 4rem;
        height: 4rem;
        bottom: 2rem;
        right: 2rem;
        z-index: 6;
        opacity: 0.7;
    `}
`;