import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { SectionBackground, SectionBackgroundProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';

export default {
	title: 'SectionBackground',
	component: SectionBackground,
	args: {
		children: (
			<div>
				<h1>SectionBackground</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt voluptatibus id ipsam minus harum fugiat obcaecati rerum blanditiis facere officiis eveniet maiores dicta debitis nulla eum saepe laborum, recusandae esse.</p>
			</div>
		)
	} as SectionBackgroundProps,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof SectionBackground> = (agrs: SectionBackgroundProps) => {
	return <SectionBackground {...agrs} />;
};