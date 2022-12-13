import { ReactNode } from 'react';
import * as S from './styles';

export type TextComponentProps = {
    children: ReactNode
}

export const TextComponent = ({ children }: TextComponentProps) => {
	return (
		<S.Conteiner>{children}</S.Conteiner>
	);
};