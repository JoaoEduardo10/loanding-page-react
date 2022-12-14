import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { SectionConteiner, SectionConteinerProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'SectionConteiner',
	component: SectionConteiner,
	args: {
		children: (
			<div>
				<h1>SectionConteiner</h1>
				<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, eveniet illo repellat voluptas labore laborum nam, ea quam vel quo, laboriosam iste dolor? Voluptatum saepe repellat mollitia repellendus, odit voluptas!</p>
			</div>
		)
	} as SectionConteinerProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof SectionConteiner> = (agrs: SectionConteinerProps) => {
	return <SectionConteiner {...agrs} />;
};