import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { MenuLink, MenuLinkProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'MenuLink',
	component: MenuLink,
	args: {
		children: 'MenuLink',
		link: 'https://github.com/storybook/react'
	} as MenuLinkProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof MenuLink> = (agrs: MenuLinkProps) => {
	return <MenuLink {...agrs} />;
};