import * as S from './styles';

import { LogoLinkProps, LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { PropsLink } from '../NavLinks/mock';
import { SectionConteiner } from '../SectionConteiner';

import { Menu as MenuIcon } from '@styled-icons/material-outlined/Menu';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { useState } from 'react';

export type MenuProps = {
    links?: PropsLink[]
    logoData: LogoLinkProps
}

export const Menu = ({ links = [], logoData }: MenuProps) => {
	const [menuVisible, setMenuVisible] = useState(false);

	return (
		<>
			<S.Button aria-label='Open/Close menu' onClick={() => setMenuVisible(e => !e)}>
				{
					menuVisible ? <CloseIcon aria-label='Close menu' /> : <MenuIcon aria-label='Open menu' />
				}
			</S.Button>
			<S.Conteiner aria-label='Conteiner menu' visible={menuVisible} onClick={() => setMenuVisible(false)}>
				<SectionConteiner>
					<S.MenuConteiner>
						<LogoLink {...logoData} />
						<NavLinks links={links} />
					</S.MenuConteiner>
				</SectionConteiner>
			</S.Conteiner>
		</>
	);
};