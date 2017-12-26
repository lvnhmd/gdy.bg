{
	'h1, h3, h4': {
		color: '#111',
		fontFamily: '"ITC Caslon", Georgia, serif',
		fontWeight: 400,
		lineHeight: '1.2em',
		letterSpacing: '-0.01em',
		WebkitFontVariantLigatures: 'common-ligatures',
		fontVariantLigatures: 'common-ligatures',
		margin: '30px 0 20px 0'
	},
	h1: {
		fontSize: '2.1875rem',
		fontWeight: 400
	},
	mediaQueries: {
		'screen and (min-width: 64em)': {
			h1: {
				fontSize: '3.125rem'
			},
			'.nl-main__wrapper': {
				paddingLeft: 60,
				paddingRight: 60
			},
			'.nl-main__title': {
				fontSize: '3.125rem',
				lineHeight: '3.125rem',
				margin: '60px 0 20px 0'
			},
			'.nl-main__content': {
				fontSize: '1.125rem',
				lineHeight: '1.5625rem',
				margin: '20px 0 50px 0'
			},
			'.nl-form__checkbox-title': {
				fontSize: '1.8125rem',
				lineHeight: '2rem'
			},
			'.nl-form__checkbox-content': {
				marginBottom: 30
			},
			'.nl-form__email': {
				display: 'inline-block',
				marginBottom: 30,
				marginRight: 10,
				marginTop: 0,
				width: 420
			},
			'.nl-form__email-label': {
				marginTop: 60
			},
			'.nl-form__submit': {
				display: 'inline-block',
				marginBottom: 30,
				marginTop: 0,
				width: 120
			},
			'.nl-main__separator': {
				marginTop: 40
			},
			'.nl-main__footer': {
				marginBottom: 60
			}
		},
		'screen and (min-width: 43.75em)': {
			'.nl-main__wrapper': {
				paddingLeft: 60,
				paddingRight: 60
			}
		}
	},
	'.global__button-reset': {
		WebkitAppearance: 'none',
		msAppearance: 'none',
		MozAppearance: 'none',
		OAppearance: 'none',
		appearance: 'none',
		background: 'transparent',
		border: 'none',
		borderRadius: 0,
		cursor: 'pointer',
		padding: 0
	},
	'.nl-main__wrapper': {
		margin: '0 auto',
		maxWidth: 560,
		paddingLeft: 20,
		paddingRight: 20
	},
	'.nl-main__title': {
		fontFamily: '"ITC Caslon", Georgia, serif',
		fontSize: '2.1875rem',
		lineHeight: '2.25rem',
		letterSpacing: '-0.01em',
		margin: '40px 0 15px 0',
		textAlign: 'center'
	},
	'.nl-main__content': {
		color: '#666',
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '1rem',
		lineHeight: '1.25rem',
		letterSpacing: 'normal',
		margin: '15px 0 30px 0',
		textAlign: 'center'
	},
	'.nl-form__option': {
		borderBottom: '1px solid #EAEAEA'
	},
	'.nl-form__checkbox': {
		display: 'none'
	},
	'.nl-form__checkbox:checked+.nl-form__checkbox-box': {
		backgroundPositionX: -20
	},
	'.nl-form__label': {
		cursor: 'pointer',
		display: 'block'
	},
	'.nl-form__checkbox-box': {
		backgroundImage: 'url("https://www.vogue.co.uk/static/img/newsletter_checkbox.png")',
		backgroundSize: '40px 20px',
		border: '1px solid #E0E0E0',
		display: 'block',
		float: 'left',
		height: 20,
		width: 20
	},
	'.nl-form__checkbox-title': {
		fontFamily: '"ITC Caslon", Georgia, serif',
		fontSize: '1.5rem',
		lineHeight: '1.75rem',
		letterSpacing: '-0.01em',
		marginBottom: 10,
		marginLeft: 50
	},
	'.nl-form__checkbox-content': {
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '1rem',
		lineHeight: '1.5rem',
		letterSpacing: 'normal',
		marginBottom: 25,
		marginLeft: 50
	},
	'.nl-form__email': {
		backgroundColor: '#F9F9F9',
		border: '1px solid #E0E0E0',
		WebkitBoxSizing: 'border-box',
		boxSizing: 'border-box',
		display: 'block',
		fontFamily: 'Nobel, sans-serif',
		fontSize: '.875rem',
		lineHeight: '.9375rem',
		letterSpacing: '0.025em',
		height: 45,
		margin: '25px 0 10px 0',
		padding: 15,
		width: '100%'
	},
	'.nl-form__email-label': {
		display: 'block',
		fontFamily: 'Nobel, sans-serif',
		fontSize: '.9375rem',
		fontWeight: 700,
		lineHeight: '.9375rem',
		letterSpacing: '0.025em',
		marginTop: 40,
		marginBottom: 25,
		textTransform: 'uppercase'
	},
	'.nl-form__submit': {
		display: 'block',
		backgroundColor: '#C00000',
		border: '1px solid transparent',
		color: '#fff',
		textDecoration: 'none',
		marginTop: 10,
		marginBottom: 30,
		textTransform: 'uppercase',
		width: '100%'
	},
	'.nl-form__checkbox-small': {
		display: 'none'
	},
	'.nl-form__checkbox-small:checked+.nl-form__checkbox-small-box': {
		backgroundPositionX: -16
	},
	'.nl-form__checkbox-small-box': {
		backgroundImage: 'url("https://www.vogue.co.uk/static/img/newsletter_checkbox.png")',
		backgroundSize: '32px 16px',
		border: '1px solid #E0E0E0',
		display: 'block',
		float: 'left',
		height: 16,
		width: 16
	},
	'.nl-form__checkbox-small-content': {
		color: '#666',
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '.75rem',
		lineHeight: '1.125rem',
		letterSpacing: 'normal',
		margin: 0,
		marginBottom: 20,
		marginLeft: 31
	},
	'.nl-main__separator': {
		backgroundColor: '#EAEAEA',
		height: 1,
		marginTop: 10,
		marginBottom: 20,
		width: '100%'
	},
	'.nl-main__footer': {
		color: '#BDBDBD',
		fontFamily: 'Nobel, sans-serif',
		fontSize: '.6875rem',
		lineHeight: '1.125rem',
		letterSpacing: '0.025em',
		marginBottom: 40
	},
	'.nl-main__privacy': {
		color: 'inherit',
		fontWeight: 700
	}
}