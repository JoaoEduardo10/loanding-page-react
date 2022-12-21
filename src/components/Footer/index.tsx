import { SectionConteiner } from '../SectionConteiner';
import { TextComponent } from '../TextComponent';

import * as S from './styles';

export type FooterProps = {
    html: string
}

export const Footer = ({ html }: FooterProps) => {
	return (
		<S.Conteiner>
			<SectionConteiner>
				<TextComponent>
					{html}
				</TextComponent>
			</SectionConteiner>
		</S.Conteiner>
	);
};