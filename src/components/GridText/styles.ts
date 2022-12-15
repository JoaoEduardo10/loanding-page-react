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
        counter-reset: grid-counter;
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: ${theme.spacings.large};
    `}
`;

export const GridElement = styled.div`
    ${({ theme }) => css`
        ${HeadingConteiner} {
            position: relative;
            left: 5rem;
        }

        ${HeadingConteiner}::before{
            position: absolute;
            counter-increment: grid-counter;
            content: counter(grid-counter);
            font-size: ${theme.font.size.xhuge};
            left: -5rem;
            top: -3rem;
            transform: rotate(5deg);
        }
    `}
`;