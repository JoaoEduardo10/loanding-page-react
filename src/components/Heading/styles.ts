import styled, { css } from 'styled-components';
import { ThemeProps } from '../../styles/theme';

type Props = 'big' | 'small' | 'medium' | 'huge'


const tileSize = {
	small: (theme: ThemeProps) => css`
        font-size: ${theme.font.size.medium};
    `,
	big: (theme: ThemeProps) => css`
        font-size: ${theme.font.size.xlarge};
    `,
	medium: (theme: ThemeProps) => css`
    font-size: ${theme.font.size.large};
    `,
	huge: (theme: ThemeProps) => css`
        font-size: ${theme.font.size.xhuge};
        ${titleMedia(theme)}
    `,
};

const titleMedia = (theme: ThemeProps) => css`
    @media ${theme.media.lteMedia} {
        font-size: ${theme.font.size.xlarge};
    }
`;

const titleUppercase = (uppercase: boolean) => css`
    text-transform: ${uppercase ? 'uppercase' : 'none'};
`;

export const Title = styled.h1<{ darkColor: boolean, size: Props, uppercase: boolean }>`
    ${({ theme, darkColor, size, uppercase }) => css`
        color: ${ darkColor ? theme.colors.white : theme.colors.primaryColor};
        ${tileSize[size](theme)}
        ${titleUppercase(uppercase)}
    `}
`;