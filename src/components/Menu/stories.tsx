import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Menu, MenuProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

import { mockLinks } from '../NavLinks/mock';

export default {
	title: 'Menu',
	component: Menu,
	args: {
		links: mockLinks,
		logoData: {
			link: '#target',
			text:'Menu',
			srcImg:'assets/images/logo.svg'
		}
	} as MenuProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Menu> = (agrs: MenuProps) => {
	return <Menu {...agrs} />;
};