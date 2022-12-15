import styled, { css } from 'styled-components';
import { Title as Heading } from '../Heading/styles';

export const Conteiner = styled.div`
    ${({ theme }) => css`
        display: grid;
        grid-template-columns: 1fr 2fr;
        align-items: center;
        gap: ${theme.spacings.large};

        @media ${theme.media.lteMedia} {
            grid-template-columns: 1fr;
            text-align: center;
        }

        & ${Heading} {
            margin-bottom:  ${theme.spacings.xlarge};
        }
    `}
`;

export const TextConteiner = styled.div`
    ${({ theme }) => css`
        @media ${theme.media.lteMedia} {
            margin-bottom: ${theme.spacings.large};
        }
    `}
`;

export const ImageConteiner = styled.div`
    ${() => css``}
`;

export const Image = styled.img`
    ${() => css``}
`;