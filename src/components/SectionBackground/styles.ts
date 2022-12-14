import styled, { css } from 'styled-components';
import { ThemeProps } from '../../styles/theme';

const activeBackgroundDark = (theme: ThemeProps) => css`
    background-color: ${theme.colors.primaryColor};
    color: ${theme.colors.white};
`;

export const Conteiner = styled.section<{ background: boolean }>`
    ${({ theme, background }) => css`
        background-color: ${theme.colors.white};
        color: ${theme.colors.primaryColor};
        ${background && activeBackgroundDark(theme)}
        min-height: 100vh;
        display: flex;
        align-items: center;
    `}
`;