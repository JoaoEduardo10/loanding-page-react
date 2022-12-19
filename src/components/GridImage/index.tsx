import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

type Props = {
    altText: string
    srcImg: string
}

export type GridImageProps = {
    background?: boolean
    title: string
    description: string
    grid: Props[]
}

export const GridImage = ({ description, grid, title, background= false }: GridImageProps) => {
	return (
		<SectionBackground background={background}>
			<S.Conteiner>
				<Heading size='huge' uppercase darkColor={background} as="h2">{title}</Heading>
				<TextComponent>{description}</TextComponent>
				<S.Grid>
					{
						grid.map(el => (
							<S.GridElement key={el.altText}>
								<S.Image src={el.srcImg} alt={el.altText} />
							</S.GridElement>
						))
					}
				</S.Grid>
			</S.Conteiner>
		</SectionBackground>
	);
};