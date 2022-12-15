import { GridText } from '.';
import { renderTheme } from '../../utils/renderTheme';

import { mockGridText } from './mock';

describe('<GridText />', () => {
	it('should render a GridText', () => {
		const { container } = renderTheme(<GridText {...mockGridText}/>);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render props background', () => {
		const { container } = renderTheme(<GridText {...mockGridText} background={undefined}/>);

		expect(container.firstChild).toMatchSnapshot();
	});
});