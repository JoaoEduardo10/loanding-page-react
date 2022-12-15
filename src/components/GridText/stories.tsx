import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GridText, GridTextProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { mockGridText } from './mock';

export default {
	title: 'GridText',
	component: GridText,
	args: mockGridText,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof GridText> = (agrs: GridTextProps) => {
	return <GridText {...agrs} />;
};