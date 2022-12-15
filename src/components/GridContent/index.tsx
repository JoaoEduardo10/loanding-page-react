import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

export type GridContentProps = {
    title: string
    html: string
    background?: boolean
}

export const GridContent = ({ html, title, background= false }: GridContentProps) => {
	return (
		<SectionBackground background={background}>
			<S.Conteiner>
				<Heading uppercase darkColor={background}>{title}</Heading>
				<S.Html>
					<TextComponent>{html}</TextComponent>
				</S.Html>
			</S.Conteiner>
		</SectionBackground>
	);
};