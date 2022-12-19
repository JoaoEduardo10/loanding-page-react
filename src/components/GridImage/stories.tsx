import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { GridImage, GridImageProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { mockGridImage } from './mock';

export default {
	title: 'GridImage',
	component: GridImage,
	args: mockGridImage,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof GridImage> = (agrs: GridImageProps) => {
	return <GridImage {...agrs} />;
};