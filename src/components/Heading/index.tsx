import * as S from './styles';
import { ReactNode } from 'react';

export type HeadingProps = {
    children: ReactNode
    darkColor?: boolean
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' 
    size?: 'big' | 'small' | 'medium' | 'huge'
    uppercase?: boolean
}

export const Heading = ({ children, darkColor= false, as='h1', size='big', uppercase= false }: HeadingProps) => {
	return (
		<S.Title 
			darkColor={darkColor}
			as={as}
			size={size}
			uppercase={uppercase}
		>
			{children}
		</S.Title>
	);
};