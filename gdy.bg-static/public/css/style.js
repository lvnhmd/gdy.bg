{
	p: {
		color: '#333',
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '1.125rem',
		fontWeight: 400,
		lineHeight: '1.5em',
		letterSpacing: 'normal'
	},
	mediaQueries: {
		'screen and (min-width: 64em)': {
			p: {
				fontSize: '1.25rem'
			},
			'.c-cookie-warning': {
				left: 60,
				width: 360
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
	'.c-cookie-warning': {
		bottom: 0,
		WebkitBoxSizing: 'border-box',
		boxSizing: 'border-box',
		left: 0,
		position: 'fixed',
		width: '100%',
		zIndex: 2,
		backgroundColor: '#FFF',
		border: '2px solid #EAEAEA',
		borderRadius: '4px 4px 0 0',
		WebkitBoxShadow: '0px 2px 6px 2px rgba(102, 102, 102, 0.06)',
		boxShadow: '0px 2px 6px 2px rgba(102, 102, 102, 0.06)',
		padding: '16px 20px'
	},
	'.c-cookie-warning.is-hidden': {
		display: 'none'
	},
	'.c-cookie-warning__table': {
		display: 'table',
		tableLayout: 'fixed',
		width: '100%'
	},
	'.c-cookie-warning__table-cell': {
		display: 'table-cell'
	},
	'.c-cookie-warning__table-cell--cta': {
		textAlign: 'right',
		width: 30
	},
	'.c-cookie-warning__message': {
		display: 'inline-block',
		verticalAlign: 'middle',
		color: '#666',
		fontFamily: 'Nobel, sans-serif',
		fontSize: '.75rem',
		lineHeight: '1rem',
		letterSpacing: '0.025em',
		marginBottom: 0,
		marginTop: 0
	},
	'.c-cookie-warning__button': {
		display: 'inline-block',
		height: 22,
		verticalAlign: 'middle',
		width: 22,
		backgroundColor: 'transparent',
		border: '1px solid #666',
		borderRadius: '50%',
		padding: 0
	},
	'.c-cookie-warning__message a': {
		color: 'inherit',
		textDecoration: 'underline'
	},
	'.c-cookie-warning__button svg': {
		display: 'inline-block',
		height: 10,
		margin: '0 auto',
		width: 8
	}
}