import { screen } from '@testing-library/react';
import { SectionConteiner } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<SectionConteiner />', () => {
	it('should render a SectionConteiner', () => {
		const { container } = renderTheme(
			<SectionConteiner>
				<h1>Children</h1>
			</SectionConteiner>
		);

		expect(
			screen.getByRole('heading', { name: 'Children' }).parentElement
		).toBeInTheDocument();

		expect(container.firstChild).toMatchInlineSnapshot(`
      .c0 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      <section
        class="c0"
      >
        <h1>
          Children
        </h1>
      </section>
    `);
	});
});
