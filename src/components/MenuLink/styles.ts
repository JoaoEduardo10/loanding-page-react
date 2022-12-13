import styled, { css } from 'styled-components';

export const Conteiner = styled.a`
    ${({ theme }) => css`
        display: inline-block;
        text-decoration: none;
        font-size: ${theme.font.size.small};
        padding: ${theme.spacings.medium};
        color: ${theme.colors.primaryColor};
        position: relative;

        &::after {
            content: '';
            position: absolute;
            bottom: 0.76rem;
            left: 50%;
            width: 0%;
            height: .2rem;
            background-color: ${theme.colors.secondaryColor};
            transition: all 300ms ease-in-out;
        }

        &:hover::after {
            left: 25%;
            width: 50%;
        }
    `}
`;