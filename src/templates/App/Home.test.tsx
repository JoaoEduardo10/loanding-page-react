import { Home } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<Home />', () => {
	it('should render a Home', () => {
		renderTheme(<Home />);
	});
});
