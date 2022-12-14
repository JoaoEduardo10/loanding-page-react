import { ReactNode } from 'react';
import * as S from './styles';

export type SectionConteinerProps = {
    children: ReactNode
}

export const SectionConteiner = ({ children }: SectionConteinerProps) => {
	return (
		<S.Conteiner>{children}</S.Conteiner>
	);
};