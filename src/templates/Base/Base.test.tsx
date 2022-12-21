import { Base } from '.';
import { renderTheme } from '../../utils/renderTheme';
import { mockBase } from './mock';

describe('<Base />', () => {
	it('should', () => {
		renderTheme(<Base {...mockBase} />);
	});
});