import { screen } from '@testing-library/react';
import { TextComponent } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<TextComponent />', () => {
	it('should render a TextComponent', () => {
		const { container } = renderTheme(<TextComponent>Children</TextComponent>);

		expect(screen.getByText('Children')).toBeInTheDocument();
		expect(container).toMatchInlineSnapshot(`
      .c0 {
        font-size: 2.4rem;
      }

      <div>
        <p
          class="c0"
        >
          Children
        </p>
      </div>
    `);
	});
});
