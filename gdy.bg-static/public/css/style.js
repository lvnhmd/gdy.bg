{
	'h3, h4': {
		color: '#111',
		fontFamily: '"ITC Caslon", Georgia, serif',
		fontWeight: 400,
		lineHeight: '1.2em',
		letterSpacing: '-0.01em',
		WebkitFontVariantLigatures: 'common-ligatures',
		fontVariantLigatures: 'common-ligatures',
		margin: '30px 0 20px 0'
	},
	h4: {
		fontSize: '1.0625rem',
		fontWeight: 400
	},
	mediaQueries: {
		'screen and (min-width: 64em)': {
			h4: {
				fontSize: '1.25rem'
			}
		}
	},
	'.global__a--center': {
		textAlign: 'center'
	},
	'.n-menu__social': {
		margin: '30px 20px 30px 20px',
		textAlign: 'center'
	},
	'.n-menu__social ul': {
		fontSize: 0
	},
	'.n-menu__social-title': {
		color: '#666',
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '.875rem',
		lineHeight: '.875rem',
		letterSpacing: 'normal',
		textTransform: 'capitalize',
		fontStyle: 'italic',
		margin: '0 0 10px 0'
	},
	'li.n-menu__social-item': {
		position: 'relative',
		display: 'inline-block'
	},
	'li.n-menu__social-item+.n-menu__social-item::before': {
		backgroundColor: '#EAEAEA',
		content: '\'\'',
		display: 'inline-block',
		height: 20,
		margin: '15px 0px',
		width: 1
	},
	'.n-menu__newsletter-btn': {
		borderBottom: 'none',
		display: 'inline-block',
		textDecoration: 'none',
		fontFamily: 'Nobel, sans-serif',
		fontSize: '.75rem',
		lineHeight: '1em',
		letterSpacing: 1,
		padding: 15,
		textTransform: 'uppercase',
		WebkitTransition: 'all 0.1s ease-in-out',
		transition: 'all 0.1s ease-in-out',
		border: '1px solid #C00000',
		color: '#C00000',
		marginBottom: 40
	},
	'.n-menu__newsletter-btn:hover': {
		borderBottom: 'none',
		backgroundColor: '#C00000',
		border: '1px solid transparent',
		color: '#fff',
		textDecoration: 'none'
	},
	h3: {
		fontSize: '1.25rem',
		fontWeight: 400
	}
}