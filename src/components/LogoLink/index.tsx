import { Heading } from '../Heading';
import * as S from './styles';

export type LogoLinkProps = {
    text: string
	srcImg?: string
	link: string
}

export const LogoLink = ({ srcImg, text, link }: LogoLinkProps) => {
	return (
		<Heading size='small' uppercase>
			<S.Conteiner href={link}>
				{
					srcImg ? (
						<img src={srcImg} alt={text} />
					) : (
						text
					)
				}
			</S.Conteiner>
		</Heading>
	);
};