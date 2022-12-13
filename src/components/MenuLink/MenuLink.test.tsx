import { screen } from '@testing-library/react';
import { MenuLink } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<MenuLink />', () => {
	it('should render a link', () => {
		renderTheme(<MenuLink link='https://localhost'>Children</MenuLink>);

		expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('href', 'https://localhost');
	});
	it('should render a new tab', () => {
		const { container } = renderTheme(<MenuLink link='https://localhost' newTab={true}>Children</MenuLink>);

		expect(screen.getByRole('link', { name: 'Children' })).toHaveAttribute('target', '_blank');
		expect(container).toMatchSnapshot();
	});
});