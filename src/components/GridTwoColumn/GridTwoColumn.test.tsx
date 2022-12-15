import { GridTwoColumn } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/renderTheme';

import { mockGrid } from './mock';

describe('<GridTwoColumn />', () => {
	it('should render GridTwoColumn with background white', () => {
		const { container } = renderTheme(<GridTwoColumn {...mockGrid} />);

		expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.white);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render GridTwoColumn with background black', () => {
		const { container } = renderTheme(<GridTwoColumn background {...mockGrid} />);

		expect(container.firstChild).toHaveStyleRule('background-color', theme.colors.primaryColor);

		expect(container.firstChild).toMatchSnapshot();

	});
});