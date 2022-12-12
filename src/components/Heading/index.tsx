import { ReactNode } from 'react';
import * as S from './styles';

export type HeadingProps = {
    children: ReactNode
}

export const Heading = ({ children }: HeadingProps) => {
	return <S.Title>{children}</S.Title>;
};