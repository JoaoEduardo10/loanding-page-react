import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { NavLinks, NavLinksProps } from '.';
import { theme } from '../../styles/theme';

import { mockLinks } from './mock';

export default {
	title: 'NavLinks',
	component: NavLinks,
	args: {
		links: mockLinks
	} as NavLinksProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof NavLinks> = (agrs: NavLinksProps) => {
	return <NavLinks {...agrs} />;
};