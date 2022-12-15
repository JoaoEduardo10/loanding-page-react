import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GridContent, GridContentProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { mockGridContent } from './mock';

export default {
	title: 'GridContent',
	component: GridContent,
	args: mockGridContent,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof GridContent> = (agrs: GridContentProps) => {
	return <GridContent {...agrs} />;
};