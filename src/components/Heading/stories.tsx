import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Heading, HeadingProps } from '.';
import { theme } from '../../styles/theme';

export default {
	title: 'Heading',
	component: Heading,
	args: {
		text: 'Olá amigo'
	} as HeadingProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		)
	],
	parameters: {
		backgrounds: {
			default: 'ligth'
		}
	}
	
} as Meta;

export const Ligth: ComponentStory<typeof Heading> = (agrs: HeadingProps) => {
	return <Heading {...agrs} />;
};

export const Dark: ComponentStory<typeof Heading> = (agrs: HeadingProps) => {
	return <Heading {...agrs} darkColor={true} />;
};

Ligth.parameters = {
	backgrounds: {
		default: 'ligth'
	}
};

Dark.parameters = {
	backgrounds: {
		default: 'dark'
	}
};