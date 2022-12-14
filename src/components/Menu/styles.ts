import styled, { css } from 'styled-components';

import { Conteiner as SectionConteiner } from '../SectionConteiner/styles';
import { Title as Heading } from '../Heading/styles';

const menuVisible = () => css`
    visibility: visible;
    opacity: 1;
`;

export const Conteiner = styled.aside<{ visible: boolean }>`
    ${({ theme, visible }) => css`
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
        transition: all 300ms ease-in-out;

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
            visibility: hidden;
            opacity: 0;
            ${visible && menuVisible()}

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
                margin-bottom: ${theme.spacings.large};
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
        z-index: 6;
        position: fixed;
        top: 2rem;
        right: 2rem;
        width: 4rem;
        height: 4rem;
        background-color: ${theme.colors.primaryColor};
        color: ${theme.colors.white};
        border: none;
        display: none;
        cursor: pointer;

        @media ${theme.media.lteMedia} {
            display: flex;
            align-items: center;
            justify-content: center;
        }

        > svg {
            width: 2.5rem;
            height: 2.5rem  
        }
    `}
`;