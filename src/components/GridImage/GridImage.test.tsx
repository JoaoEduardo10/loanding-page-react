import { GridImage } from '.';
import { renderTheme } from '../../utils/renderTheme';

import { mockGridImage } from './mock';

describe('<GridText />', () => {
	it('should render a GridText', () => {
		const { container } = renderTheme(<GridImage {...mockGridImage}/>);

		expect(container.firstChild).toMatchSnapshot();
	});

	it('should render props background', () => {
		const { container } = renderTheme(<GridImage {...mockGridImage} background={undefined}/>);

		expect(container.firstChild).toMatchSnapshot();
	});
});