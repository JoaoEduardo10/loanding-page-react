import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

export type GridTwoColumnProps = {
    title: string
    text: string
    srcImg: string
    background?: boolean
}

export const GridTwoColumn = ({ text, srcImg, title, background= false }: GridTwoColumnProps) => {
	return (
		<SectionBackground background={background}>
			<S.Conteiner>
				<S.TextConteiner>
					<Heading darkColor={background} as="h2">{title}</Heading>
					<TextComponent>{text}</TextComponent>
				</S.TextConteiner>
				<S.ImageConteiner>
					<S.Image src={srcImg} alt={title} />
				</S.ImageConteiner>
			</S.Conteiner>
		</SectionBackground>
	);
};