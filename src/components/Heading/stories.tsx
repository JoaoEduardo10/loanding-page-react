import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Heading, HeadingProps } from '.';
import { theme } from '../../styles/theme';

export default {
	title: 'Heading',
	component: Heading,
	args: {
		children: 'Olá amigo'
	} as HeadingProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Heading> = (agrs: HeadingProps) => {
	return <Heading {...agrs} />;
};