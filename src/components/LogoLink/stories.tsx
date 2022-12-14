import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { LogoLink, LogoLinkProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'LogoLink',
	component: LogoLink,
	args: {
		link:'https://github.com/',
		srcImg: 'assets/images/logo.svg',
		text: 'LogoLink'
	} as LogoLinkProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const ImageOnly: ComponentStory<typeof LogoLink> = (agrs: LogoLinkProps) => {
	return <LogoLink {...agrs} />;
};

export const TextOnly: ComponentStory<typeof LogoLink> = (agrs: LogoLinkProps) => {
	return <LogoLink {...agrs} />;
};

TextOnly.args = {
	srcImg: ''
};