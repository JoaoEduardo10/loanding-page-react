import { renderTheme } from '../../utils/renderTheme';
import { Heading } from '.';
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { ThemeProvider } from 'styled-components';
import { GlobalStyled } from '../../styles/globalStyles';

describe('<Heading />', () => {
	it('should render a Heading', () => {
		renderTheme(<Heading>Children</Heading>);

		const heading = screen.getByRole('heading', { name: 'Children' });

		expect(heading).toHaveStyleRule('font-size', theme.font.size.xlarge);
		expect(heading).toHaveStyleRule('text-transform', 'none');
		expect(heading).toHaveStyleRule('color', theme.colors.primaryColor);
	});

	it('should render another color and uppercases true', () => {
		renderTheme(<Heading darkColor={true} uppercase={true}>Children</Heading>);

		const heading = screen.getByRole('heading', { name: 'Children' });
        
		expect(heading).toHaveStyleRule('text-transform', 'uppercase');
		expect(heading).toHaveStyleRule('color', theme.colors.white);
	});

	it('should render all font sizes', () => {
		const { rerender } = renderTheme(<Heading size='medium'>Children</Heading>);

		const heading = screen.getByRole('heading', { name: 'Children' });
        
		expect(heading).toHaveStyleRule('font-size', theme.font.size.large);

		rerender(
			<ThemeProvider theme={theme}>
				<Heading size='small'>Children</Heading>
				<GlobalStyled />
			</ThemeProvider>
		);
		expect(heading).toHaveStyleRule('font-size', theme.font.size.medium);

		rerender(
			<ThemeProvider theme={theme}>
				<Heading size='huge'>Children</Heading>
				<GlobalStyled />
			</ThemeProvider>
		);
		expect(heading).toHaveStyleRule('font-size', theme.font.size.xhuge);
		expect(heading).toHaveStyleRule('font-size', theme.font.size.xlarge,{
			media: theme.media.lteMedia
		});
	});

	it('should render Heading correct', () => {
		const { container } = renderTheme(<Heading as="h6">Children</Heading>);
		const h6 = container.querySelector('h6');

		expect(h6?.tagName.toLowerCase()).toBe('h6');
	});
});