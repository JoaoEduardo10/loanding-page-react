import { Meta, ComponentStory } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import { Base, BaseProps } from '.';
import { GlobalStyled } from '../../styles/globalStyles';
import { theme } from '../../styles/theme';
import { mockBase } from './mock';

export default {
	title: 'Tamplates/Base',
	component: Base,
	args: mockBase,
	decorators: [
		(Story) => (
			<ThemeProvider theme={theme}>
				<Story />
				<GlobalStyled />
			</ThemeProvider>
		)
	]
} as Meta;

export const Tamplate: ComponentStory<typeof Base> = (agrs: BaseProps) => {
	return <Base {...agrs} />;
};