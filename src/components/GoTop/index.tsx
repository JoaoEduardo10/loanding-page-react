import * as S from './styles';

import { KeyboardArrowUp } from '@styled-icons/material-outlined/KeyboardArrowUp';


export const GoTop = () => {
	return (
		<S.Conteiner href='#' aria-label='Go to top'>
			<KeyboardArrowUp />
		</S.Conteiner>
	);
};