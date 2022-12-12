import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '../styles/globalStyles';
import { theme } from '../styles/theme';

export const renderTheme = (children: JSX.Element) => {
	return (
		render(
			<ThemeProvider theme={theme}>
				{children}
				<GlobalStyled />
			</ThemeProvider>
		)
	);
};