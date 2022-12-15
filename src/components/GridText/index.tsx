import { Heading } from '../Heading';
import { SectionBackground } from '../SectionBackground';
import { TextComponent } from '../TextComponent';
import * as S from './styles';

type gridArreyProps = {
    title: string
    description: string
}

export type GridTextProps = {
    background?: boolean
    title: string
    description: string
    grid: gridArreyProps[]
}

export const GridText = ({ description, grid, title, background= false }: GridTextProps) => {
	return (
		<SectionBackground background={background}>
			<S.Conteiner>
				<Heading size='huge' uppercase darkColor={background}>{title}</Heading>
				<TextComponent>{description}</TextComponent>
				<S.Grid>
					{
						grid.map(el => (
							<S.GridElement key={el.title}>
								<Heading size='medium' darkColor={background}>{el.title}</Heading>
								<TextComponent>{el.description}</TextComponent>
							</S.GridElement>
						))
					}
				</S.Grid>
			</S.Conteiner>
		</SectionBackground>
	);
};