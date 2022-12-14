import { screen } from '@testing-library/react';
import { LogoLink } from '.';
import { renderTheme } from '../../utils/renderTheme';

describe('<LogoLink  />', () => {
	it('should render a text Logo', () => {
		const { container } = renderTheme(
			<LogoLink link="https://localhost" text="LogoLink" />
		);

		expect(screen.getByRole('link', { name: 'LogoLink' })).toHaveAttribute(
			'href',
			'https://localhost'
		);

		expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: #0A1128;
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c1 > img {
        max-height: 3rem;
      }

      <div>
        <h1
          class="c0"
        >
          <a
            class="c1"
            href="https://localhost"
          >
            LogoLink
          </a>
        </h1>
      </div>
    `);
	});

	it('should render a img Logo', () => {
		const { container } = renderTheme(
			<LogoLink link="https://localhost" srcImg="src/img" text="LogoLink" />
		);

		expect(
			screen.getByRole('img', { name: 'LogoLink' })
		).toHaveAttribute('src', 'src/img');

		expect(container).toMatchInlineSnapshot(`
      .c0 {
        color: #0A1128;
        font-size: 2.4rem;
        text-transform: uppercase;
      }

      .c1 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
        -webkit-text-decoration: none;
        text-decoration: none;
        color: inherit;
      }

      .c1 > img {
        max-height: 3rem;
      }

      <div>
        <h1
          class="c0"
        >
          <a
            class="c1"
            href="https://localhost"
          >
            <img
              alt="LogoLink"
              src="src/img"
            />
          </a>
        </h1>
      </div>
    `);
	});
});
