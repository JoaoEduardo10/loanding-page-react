import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { TextComponent, TextComponentProps } from '.';
import { theme } from '../../styles/theme';

export default {
	title: 'TextComponent',
	component: TextComponent,
	args: {
		children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam fugit voluptatibus repellendus quisquam provident veritatis incidunt praesentium, in nihil facilis ut ducimus illum quaerat delectus debitis ullam sit quod quos?'
	} as TextComponentProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof TextComponent> = (agrs: TextComponentProps) => {
	return <TextComponent {...agrs} />;
};