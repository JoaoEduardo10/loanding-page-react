import * as S from './styles';

import { MenuLink } from '../MenuLink';
import { PropsLink } from './mock';

export type NavLinksProps = {
    links: PropsLink[]
}

export const NavLinks = ({ links }: NavLinksProps) => {
	return (
		<S.Conteiner aria-label='Main menu'>
			{
				links.map(link => (
					<MenuLink key={link.link} {...link} />
				))
			}
		</S.Conteiner>
	);
};