import { ReactNode } from 'react';
import * as S from './styles';

export type MenuLinkProps = {
    children: ReactNode
    link: string
    newTab?: boolean,
}

export const MenuLink = ({ children, link, newTab= false }: MenuLinkProps) => {
	const target = newTab ? '_blank' : '_self';
	return (
		<S.Conteiner href={link} target={target}>{children}</S.Conteiner>
	);
};