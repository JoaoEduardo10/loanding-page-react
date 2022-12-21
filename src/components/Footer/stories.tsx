import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Footer, FooterProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'Footer',
	component: Footer,
	args: {
		html: '<strong>Footer</strong>',
	} as FooterProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Footer> = (agrs: FooterProps) => {
	return <Footer {...agrs} />;
};