import { theme } from '../src/styles/theme'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "ligth",
    values: [
      {
      name: "ligth",
      value: theme.colors.white,
      },
      {
        name: "dark",
        value: theme.colors.primaryColor,
        },
    ]
  }
}
