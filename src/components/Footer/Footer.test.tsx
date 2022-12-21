import { screen } from '@testing-library/react';
import { Footer } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<Footer />', () => {
	it('should render a Footer', () => {
		const { container } = renderTheme(<Footer html='<h1>Children</h1>' />);

		expect(screen.getByRole('heading', { name: 'Children' })).toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});
});