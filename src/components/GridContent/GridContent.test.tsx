import { GridContent } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/renderTheme';

import { mockGridContent } from './mock';

describe('<GridContent />', () => {
	it('should render GridContent with backgournd white', () => {
		const { container } = renderTheme(<GridContent {...mockGridContent} />);
		
		expect(container).toMatchSnapshot();
	});

	it('should not render backgournd ', () => {
		const { container } = renderTheme(<GridContent {...mockGridContent} background={undefined} />);

		expect(container).toMatchSnapshot();
	});
});