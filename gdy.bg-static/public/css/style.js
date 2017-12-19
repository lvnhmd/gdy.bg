{
	'.btn-single, a.btn-single': {
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
		transition: 'all 0.1s ease-in-out'
	},
	'.btn-single:hover, a.btn-single:hover': {
		borderBottom: 'none'
	},
	'.btn-single--light, a.btn-single--light': {
		border: '1px solid #C00000',
		color: '#C00000'
	},
	'.btn-single--light:hover, a.btn-single--light:hover': {
		backgroundColor: '#C00000',
		border: '1px solid transparent',
		color: '#fff',
		textDecoration: 'none'
	},
	'.n-main__dropdown': {
		position: 'relative'
	},
	'.n-main__dropdown-link:after': {
		borderLeft: '5px solid transparent',
		borderRight: '5px solid transparent',
		borderTop: '5px solid #000',
		content: '""',
		display: 'inline-block',
		height: 0,
		width: 0,
		left: 10,
		position: 'relative',
		top: -2
	},
	'.n-main__dropdown-list': {
		display: 'none',
		position: 'absolute',
		textAlign: 'left',
		top: '100%',
		backgroundColor: '#fff',
		border: '1px solid #EAEAEA',
		borderTop: 'none',
		WebkitBoxShadow: '0px 2px 5px 0px rgba(102, 102, 102, 0.06)',
		boxShadow: '0px 2px 5px 0px rgba(102, 102, 102, 0.06)'
	},
	'.n-main__dropdown-list:hover': {
		display: 'block'
	},
	'.n-main__dropdown-link:hover+.n-main__dropdown-list': {
		display: 'block'
	},
	'.n-main__dropdown-list--right': {
		right: -1
	},
	'.n-main__covers': {
		display: 'none',
		position: 'absolute',
		top: 60
	},
	mediaQueries: {
		'screen and (min-width: 64em)': {
			'.n-main__covers': {
				display: 'block'
			},
			'.n-main__nav-search': {
				borderLeft: '1px solid #EAEAEA'
			}
		},
		'screen and (min-width: 90.0625em)': {
			'.n-main__nav-search': {
				borderRight: '1px solid #EAEAEA'
			}
		}
	},
	'.n-main__covers__wrapper': {
		maxWidth: 1440,
		paddingLeft: 60,
		paddingRight: 60,
		margin: '0 auto'
	},
	'.n-main__cover__offer': {
		display: 'inline-block',
		verticalAlign: 'top',
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '.75rem',
		lineHeight: '.9375rem',
		letterSpacing: 'normal',
		color: '#666',
		whiteSpace: 'pre-line'
	},
	'.n-main__cover__btn, a.n-main__cover__btn': {
		display: 'inline-block',
		fontFamily: 'Nobel, sans-serif',
		fontSize: 10,
		lineHeight: '.625rem',
		letterSpacing: 1,
		padding: 4,
		marginTop: 10,
		textTransform: 'uppercase'
	},
	'.n-main__nav-search': {
		display: 'inline-block',
		float: 'right',
		height: 60,
		lineHeight: 60,
		textAlign: 'center',
		width: 60
	},
	'.n-main__nav-search label': {
		backgroundColor: 'transparent',
		cursor: 'pointer',
		display: 'block',
		height: 60,
		lineHeight: 60,
		width: 60
	},
	'.n-main__nav-search svg': {
		display: 'inline-block',
		height: 20,
		lineHeight: 60,
		verticalAlign: 'middle'
	},
	'.n-main__nav-search path': {
		fill: '#000'
	},
	'.n-main__nav-search:hover svg': {
		fill: '#C00000'
	},
	'.n-main__dropdown--follow .n-main__dropdown-link': {
		color: '#666',
		fontFamily: '"adobe-caslon-pro", serif',
		fontSize: '.875rem',
		lineHeight: '.875rem',
		letterSpacing: 'normal',
		fontStyle: 'italic',
		textTransform: 'capitalize',
		paddingRight: 30,
		WebkitBoxSizing: 'border-box',
		boxSizing: 'border-box',
		height: 60,
		paddingTop: 2
	},
	'.n-main__dropdown--follow .n-main__dropdown-list-item': {
		fontSize: '.75rem',
		textAlign: 'center'
	},
	'.n-main__dropdown--follow__group': {
		fontSize: 0,
		marginTop: 10
	},
	'.n-main__dropdown--follow__group:last-child': {
		marginTop: 23,
		paddingBottom: 30
	},
	'.n-main__dropdown--follow__group a+a::before': {
		backgroundColor: '#EAEAEA',
		content: '\'\'',
		display: 'inline-block',
		height: 20,
		left: -2,
		margin: '15px 0px',
		position: 'absolute',
		width: 1
	},
	'.n-main__dropdown__btn-share': {
		display: 'inline-block',
		height: 50,
		lineHeight: 45,
		paddingBottom: 0,
		textAlign: 'center',
		width: 50,
		position: 'relative'
	},
	'.n-main__dropdown__btn-share svg': {
		height: '100%',
		fill: '#fff',
		width: 16,
		display: 'block',
		margin: '0 auto'
	},
	'.n-main__dropdown__btn-share--facebook path': {
		fill: '#3B5998'
	},
	'.n-main__dropdown__btn-share--facebook:hover': {
		backgroundColor: '#3B5998'
	},
	'.n-main__dropdown__btn-share--facebook:hover path': {
		fill: '#fff'
	},
	'.n-main__dropdown__btn-share--instagram path': {
		fill: '#833AB4'
	},
	'.n-main__dropdown__btn-share--instagram:hover': {
		backgroundColor: '#833AB4'
	},
	'.n-main__dropdown__btn-share--instagram:hover path': {
		fill: '#fff'
	},
	'.n-main__dropdown__btn-share--twitter path': {
		fill: '#55ACEE'
	},
	'.n-main__dropdown__btn-share--twitter:hover': {
		backgroundColor: '#55ACEE'
	},
	'.n-main__dropdown__btn-share--twitter:hover path': {
		fill: '#fff'
	},
	'.n-main__dropdown__btn-share--youtube path': {
		fill: '#E52D27'
	},
	'.n-main__dropdown__btn-share--youtube:hover': {
		backgroundColor: '#E52D27'
	},
	'.n-main__dropdown__btn-share--youtube:hover path': {
		fill: '#fff'
	},
	'.n-main__dropdown__btn--newsletter': {
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
		color: '#C00000'
	},
	'.n-main__dropdown__btn--newsletter:hover': {
		borderBottom: 'none',
		backgroundColor: '#C00000',
		border: '1px solid transparent',
		color: '#fff',
		textDecoration: 'none'
	},
	'.n-main__dropdown-list--follow': {
		padding: '0 10px 10px 10px',
		zIndex: 3
	},
	'li.n-main__dropdown-list-item': {
		backgroundColor: '#fff',
		fontSize: '.9375rem',
		whiteSpace: 'nowrap',
		zIndex: 3
	}
}