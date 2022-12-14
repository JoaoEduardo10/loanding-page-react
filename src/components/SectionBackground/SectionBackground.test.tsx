import { SectionBackground } from ".";
import { theme } from "../../styles/theme";
import { renderTheme } from "../../utils/renderTheme";

describe("<SectionBackground />", () => {
  it("should render background color white", () => {
    const { container } = renderTheme(
      <SectionBackground>Children</SectionBackground>
    );

    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      theme.colors.white
    );
    expect(container.firstChild).toHaveStyleRule(
      "color",
      theme.colors.primaryColor
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c0 {
        background-color: #fff;
        color: #0A1128;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <section
        class="c0"
      >
        <div
          class="c1"
        >
          Children
        </div>
      </section>
    `);
  });

  it("should render background color black", () => {
    const { container } = renderTheme(
      <SectionBackground background>Children</SectionBackground>
    );

    expect(container.firstChild).toHaveStyleRule(
      "background-color",
      theme.colors.primaryColor
    );
    expect(container.firstChild).toHaveStyleRule("color", theme.colors.white);

    expect(container.firstChild).toMatchInlineSnapshot(`
      .c1 {
        max-width: 120rem;
        margin: 0 auto;
        padding: 3.2rem;
      }

      .c0 {
        background-color: #fff;
        color: #0A1128;
        background-color: #0A1128;
        color: #fff;
        min-height: 100vh;
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-align-items: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        align-items: center;
      }

      <section
        class="c0"
      >
        <div
          class="c1"
        >
          Children
        </div>
      </section>
    `);
  });
});
