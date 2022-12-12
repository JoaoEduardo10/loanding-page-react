import * as S from './styles';

export type HeadingProps = {
    text: string
    darkColor?: boolean
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
    size?: 'big' | 'small' | 'medium' | 'huge'
    uppercase?: boolean
}

export const Heading = ({ text, darkColor= false, as='h1', size='big', uppercase= false }: HeadingProps) => {
	return (
		<S.Title 
			darkColor={darkColor}
			as={as}
			size={size}
			uppercase={uppercase}
		>
			{text}
		</S.Title>
	);
};