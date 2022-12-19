import styled, { css } from 'styled-components';

import { Title as HeadingConteiner } from '../Heading/styles';
import { Conteiner as TextComponent } from '../TextComponent/styles';

export const Conteiner = styled.div`
    ${({ theme }) => css`
        
        ${TextComponent} {
            margin-bottom: ${theme.spacings.xhuge};
        }

    `}
`;

export const Grid = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacings.large};
    `}
`;

export const GridElement = styled.div`
    ${({ theme }) => css`
        overflow: hidden;
    `}
`;

export const Image = styled.img`
    ${({ theme }) => css`
        width: 100%;
        transition: all 300ms ease-in-out;

        &:hover {
            transform: scale(1.2) rotate(10deg);
        }
    `}
`;