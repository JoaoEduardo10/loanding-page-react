import { LogoLinkProps, LogoLink } from '../LogoLink';
import { NavLinks } from '../NavLinks';
import { PropsLink } from '../NavLinks/mock';
import { SectionConteiner } from '../SectionConteiner';
import * as S from './styles';

export type MenuProps = {
    links: PropsLink[]
    logoData: LogoLinkProps
}

export const Menu = ({ links = [], logoData }: MenuProps) => {
	return (
		<S.Conteiner>
			<SectionConteiner>
				<S.MenuConteiner>
					<LogoLink {...logoData} />
					<NavLinks links={links} />
				</S.MenuConteiner>
			</SectionConteiner>
		</S.Conteiner>
	);
};