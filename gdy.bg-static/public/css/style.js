{
	'.firstList': {
		counterReset: 'chapter'
	},
	'ol.clauses, ol.parties, ol.recitals': {
		marginLeft: 0,
		padding: '0 0 0 2em'
	},
	'ol.clauses ol, ol.parties ol, ol.recitals ol': {
		marginLeft: 0,
		padding: '0 0 0 2em'
	},
	'ol.clauses li, ol.parties li, ol.recitals li': {
		fontSize: 15,
		marginTop: '.5em',
		marginBottom: '.5em'
	},
	'ol.clauses>li>ol>li': {
		listStyle: 'lower-alpha'
	},
	'ol.clauses>li>ol>li>ol>li': {
		listStyle: 'lower-roman'
	},
	'ol.clauses>li, ol.parties>li': {
		listStyleType: 'none',
		counterIncrement: 'chapter'
	},
	'ol.parties>li:before, ol.clauses>li:before': {
		width: '2em',
		marginLeft: '-2em',
		display: 'inline-block'
	},
	'ol.clauses>li:before': {
		content: 'counter(chapter) ".    "'
	},
	'ol.parties>li:before': {
		content: '"(" counter(chapter) ") "'
	},
	'ol.recitals': {
		listStyle: 'upper-alpha'
	},
	'ol.clausesNested, ol.clausesNested ol': {
		counterReset: 'item',
		marginLeft: 0,
		paddingLeft: 0
	},
	'ol.clausesNested': {
		padding: '0 5em 0 5em'
	},
	'ol.clausesNested li': {
		fontWeight: 'bold'
	},
	'ol.clausesNested li p, ol.clausesNested li li': {
		fontWeight: 'normal'
	},
	'ol.clausesNested li ol>li': {
		marginTop: '1em',
		marginBottom: '1em'
	},
	'ol.clausesNested li p': {
		marginTop: 0
	},
	'ol.clausesNested>li, ol.clausesNested ol>li': {
		display: 'block',
		position: 'relative'
	},
	'ol.clausesNested>li:before, ol.clausesNested ol>li:before': {
		display: 'inline-block',
		content: 'counters(item, ".") ". "',
		counterIncrement: 'item',
		width: '4em',
		marginLeft: '-4em'
	},
	body: {
		fontFamily: '\'Volkhov\', serif',
		fontSize: 15,
		margin: '2em 4em 4em 4em'
	},
	h1: {
		fontFamily: '\'Volkhov\', serif',
		fontSize: 'x-large',
		marginTop: '1em',
		marginBottom: '1.5em',
		textAlign: 'center',
		fontWeight: 'bold'
	},
	h2: {
		fontSize: 15,
		fontFamily: '\'Volkhov\', serif',
		marginTop: '2em',
		fontWeight: 'bold'
	},
	h3: {
		fontWeight: 'bold',
		fontSize: 15,
		marginTop: '2em'
	},
	'table.definitions, div.schedule table': {
		borderCollapse: 'collapse',
		margin: '1em 0 2em -2em'
	},
	'table.definitions tr:nth-child(odd), div.schedule table tr:nth-child(odd)': {
		backgroundColor: '#eee'
	},
	'table.definitions td, table.definitions th, div.schedule table td, div.schedule table th': {
		borderTop: '1px solid black',
		borderBottom: '1px solid black',
		padding: 5,
		verticalAlign: 'top',
		textAlign: 'left'
	},
	'table.definitions th, div.schedule table th': {
		width: '25%'
	},
	'table.signature, table.signature2, div.signature table': {
		marginTop: '1em',
		marginBottom: '1em'
	},
	'table.signature th, table.signature td, table.signature2 th, table.signature2 td, div.signature table th, div.signature table td': {
		padding: '1em 0 0 0'
	},
	'table.signature th, table.signature2 th, div.signature table th': {
		fontWeight: 'normal',
		textAlign: 'right',
		paddingRight: '1em',
		minWidth: 90
	},
	'table.signature td.signatureBox, table.signature2 td.signatureBox, div.signature table td.signatureBox': {
		borderBottom: '1px solid black',
		minWidth: 300
	},
	'.witness table th, .witness table td': {
		border: 'none',
		verticalAlign: 'text-top'
	},
	'.witness table th': {
		fontWeight: 'normal'
	},
	'ol.letterList': {
		listStyle: 'lower-alpha'
	},
	'div.schedule': {
		borderTop: '1px solid black'
	},
	'div.schedule h2': {
		textAlign: 'center',
		textTransform: 'uppercase',
		marginBottom: '1em'
	},
	'div.schedule h3': {
		marginTop: '1em',
		textAlign: 'center',
		marginBottom: '3em'
	}
}