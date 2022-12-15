import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GridTwoColumn, GridTwoColumnProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { mockGrid } from './mock';

export default {
	title: 'GridTwoColumn',
	component: GridTwoColumn,
	args: mockGrid,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof GridTwoColumn> = (agrs: GridTwoColumnProps) => {
	return <GridTwoColumn {...agrs} />;
};