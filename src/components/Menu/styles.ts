import styled, { css } from 'styled-components';

import { Conteiner as SectionConteiner } from '../SectionConteiner/styles';
import { Title as Heading } from '../Heading/styles';

export const Conteiner = styled.aside`
    ${({ theme }) => css`
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-bottom: 0.1rem solid ${theme.colors.mediumGray};
        background-color: ${theme.colors.white};
        overflow-y: auto;

        > ${SectionConteiner} {
            padding-top: 0;
            padding-bottom: 0;
        }

        & ${Heading} {
            margin-top: 0;
            margin-bottom: 0%;
        }

        @media ${theme.media.lteMedia} {
            height: 100vh;

            ${SectionConteiner} {
                display: grid;
                grid-template-columns: 1fr;
                grid-template-rows: 1fr;
                height: 100vh;
                align-items: center;
            }

            & ${Heading} {
                display: flex;
                justify-content: center;
            }
        }
    `}
`;

export const MenuConteiner = styled.div`
    ${({ theme }) => css`
        display: flex;
        justify-content: space-between;
        align-items: center;

        @media ${theme.media.lteMedia} {
            display: block;
            text-align: center;
            padding: ${theme.spacings.xxlarge} 0;
        }
    `}
`;

export const Button = styled.button`
    ${({ theme }) => css`

    `}
`;