import styled, { css } from 'styled-components';

export const Conteiner = styled.div`
    ${({ theme }) => css`
        font-size: ${theme.font.size.medium};
    `}
`;