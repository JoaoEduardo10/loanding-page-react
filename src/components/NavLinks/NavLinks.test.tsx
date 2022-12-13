import { screen } from '@testing-library/react';
import { NavLinks } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/renderTheme';

import { mockLinks } from './mock';

describe('<NavLinks />', () => {
	it('should render all links', () => {
		const { container } = renderTheme(<NavLinks links={mockLinks}/>);

		const links = screen.getAllByRole('link', { name: /link/i });

		expect(links).toHaveLength(10);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should not render  links', () => {
		renderTheme(<NavLinks links={[]}/>);

		const links = screen.queryAllByRole('link');

		expect(links).toHaveLength(0);
	});

	it('should render screen mobile', () => {
		const { container} = renderTheme(<NavLinks links={mockLinks}/>);

		expect(container.firstChild).toHaveStyleRule('display', 'flex');
		expect(container.firstChild).toHaveStyleRule('flex-flow', 'column', {
			media: theme.media.lteMedia
		});
	});
});