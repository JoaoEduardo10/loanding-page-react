import { ReactNode } from 'react';
import { SectionConteiner } from '../SectionConteiner';
import * as S from './styles';

export type SectionBackgroundProps = {
    children: ReactNode
	background?: boolean
}

export const SectionBackground = ({ children, background = false }: SectionBackgroundProps) => {
	return (
		<S.Conteiner background={background}>
			<SectionConteiner>
				{children}
			</SectionConteiner>
		</S.Conteiner>
	);
};