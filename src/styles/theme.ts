import { string } from 'prop-types';

export type ThemeProps = {
    colors: {
        primaryColor: string
        secondaryColor: string
        white: string
    },
    font: {
        family: {
            default: string,
            secondary: string
        },
        size: {
            small: string
            xsmall: string
            medium: string
            large: string
            xlarge: string
            xxlarge: string
            huge: string
            xhuge: string
        }
    },
    media: {
        lteMedia: string
    }
}

export const theme: ThemeProps = {
	colors: {
		primaryColor: '#0A1128',
		secondaryColor: '#dc143c',
		white: '#fff',
	},
	font: {
		family: {
			default: '"Open Sans", sans-serif' ,
			secondary: '"Montserrat", sans-serif'
		},
		size: {
			small: '1.6rem',
			xsmall: '8rem',
			medium: '2.4rem',
			large: '3.2rem',
			xlarge: '4.0rem',
			xxlarge: '4.8rem',
			huge: '5.6rem',
			xhuge: '6.4rem',
		}
	},
	media: {
		lteMedia: '(max-width: 768px)'
	}
};