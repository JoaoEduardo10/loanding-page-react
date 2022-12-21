import * as S from './styles';
import { ReactNode } from 'react';

import { Menu, MenuProps } from '../../components/Menu';
import { Footer } from '../../components/Footer';
import { GoTop } from '../../components/GoTop';

export type BaseProps = MenuProps & {
    children: ReactNode
	footerHtml: string
}

export const Base = ({ children, links = [], logoData, footerHtml }: BaseProps) => {
	return (
		<>
			<Menu links={links} logoData={logoData} />
			<S.Conteiner>
				{children}
				<Footer html={footerHtml} />
				<GoTop />
			</S.Conteiner>
		</>
	);
};