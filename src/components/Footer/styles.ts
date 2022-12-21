import styled, { css } from 'styled-components';

import { Conteiner as TextComponent } from '../TextComponent/styles';
import { Conteiner as SectionConteiner } from '../SectionConteiner/styles';

export const Conteiner = styled.div`
    ${({ theme }) => css`
        text-align: center;
        border-top: 0.1rem solid ${theme.colors.mediumGray};
        
        a {
            text-decoration: none;
            color: inherit;
        }

        & ${TextComponent} {
            font-size: ${theme.font.size.small};
        }

        & ${SectionConteiner} {
            padding-top: 0;
            padding-bottom: 0;
        }
    `}
`;