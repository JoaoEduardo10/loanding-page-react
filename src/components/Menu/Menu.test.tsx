import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Menu } from '.';
import { theme } from '../../styles/theme';
import { renderTheme } from '../../utils/renderTheme';

import { LogoLinkProps } from '../LogoLink';
import { mockLinks } from '../NavLinks/mock';

const mockLogoData: LogoLinkProps = {
	text: 'Menu',
	srcImg: 'src/img',
	link: '#target'
};

describe('<Menu />', () => {
	it('should render Logo and Main menu nav', () => {
		const { container } = renderTheme(<Menu links={mockLinks} logoData={mockLogoData} />);

		expect(screen.getByRole('heading', {  name: 'Menu'})).toBeInTheDocument();
		expect(screen.getByRole('navigation', {  name: 'Main menu'})).toBeInTheDocument();

		expect(container).toMatchSnapshot();

	});

	it('should render menu mobile and button for open and close the menu', () => {
		renderTheme(<Menu links={mockLinks} logoData={mockLogoData} />);

		const button = screen.getByLabelText('Open/Close menu');
		const conteinerMenu = screen.getByLabelText('Conteiner menu');

		expect(button).toHaveStyleRule('display', 'none');
		expect(button).toHaveStyleRule('display', 'flex', {
			media: theme.media.lteMedia
		});
		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

		expect(conteinerMenu).toHaveStyleRule('opacity', '0', {
			media: theme.media.lteMedia
		});

		userEvent.click(button);

		expect(conteinerMenu).toHaveStyleRule('opacity', '1', {
			media: theme.media.lteMedia
		});
		expect(screen.getByLabelText('Close menu')).toBeInTheDocument();

		userEvent.click(conteinerMenu);
		
		expect(conteinerMenu).toHaveStyleRule('opacity', '0', {
			media: theme.media.lteMedia
		});
		expect(screen.getByLabelText('Open menu')).toBeInTheDocument();

	});

	it('should not render links', () => {
		const { container } = renderTheme(<Menu logoData={mockLogoData} />);

		expect(screen.getByRole('navigation', {  name: 'Main menu'}).firstChild).not.toBeInTheDocument();

		expect(container).toMatchSnapshot();
	});
});