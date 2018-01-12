const React = require('react');
const Radium = require('radium');
const { Style, StyleRoot } = Radium;
const Header = require('./header');
const SearchField = require('./searchField');
const CookieWarning = require('./cookieWarning');

export default class App extends React.Component {

    componentDidMount() {
        const script = document.createElement("script");

        script.src = `${process.env.PUBLIC_URL}/js/core.js`;
        script.async = true;

        document.body.appendChild(script);
    }

    render() {

        return (

            <StyleRoot>
                <Style rules={{
                    html: {
                        fontSize: 16
                    },
                    // a: {
                    //     color: 'deeppink',
                    //     textDecoration: 'none'
                    // },
                    // 'a:hover': {
                    //     textDecoration: 'underline'
                    // },
                    body: {
                        margin: 0,
                        WebkitTextSizeAdjust: 'none',
                        msTextSizeAdjust: 'none',
                        MozTextSizeAdjust: 'none',
                        OTextSizeAdjust: 'none',
                        textSizeAdjust: 'none'
                    },
                    '.global__hidden': {
                        display: 'none !important'
                    },
                    '.n-main': {
                        position: 'relative',
                        zIndex: 10
                    },
                    '.n-main__wrapper': {
                        margin: '0 auto',
                        maxWidth: 'none',
                        position: 'relative'
                    },
                    '.n-main__header a': {
                        display: 'block',
                        height: '100%'
                    },
                    '.n-main__header-logo': {
                        margin: '0 auto',
                        maxWidth: 'none',
                        padding: '30px 0 20px 0',
                        height: 90,
                        textAlign: 'center'
                    },
                    '.n-main__header-logo img': {
                        display: 'block',
                        margin: '0 auto',
                        height: '100%'
                    },
                    '.n-main__nav': {
                        position: 'relative',
                        backgroundColor: '#fff',
                        height: 60,
                        margin: '0 auto',
                        maxWidth: 1440
                    },
                    '.n-main__sticker': {
                        position: 'relative',
                        zIndex: 3
                    },
                    '.n-main__nav-group': {
                        bottom: 0,
                        position: 'absolute',
                        top: 0
                    },
                    '.n-main__nav-group--left': {
                        left: 0
                    },
                    '.n-main__nav-group--right': {
                        right: 0
                    },
                    '.n-visibility--desktop': {
                        display: 'none'
                    },
                    '.n-main__header': {
                        backgroundColor: '#FCFCFC',
                        borderBottom: '1px solid #EAEAEA'
                    },
                    '.n-main__nav-logo': {
                        height: 60,
                        left: 20,
                        overflow: 'hidden',
                        position: 'fixed',
                        width: 118
                    },
                    '.n-main__nav-logo a': {
                        bottom: 0,
                        // height: 60,
                        // lineHeight: 60,
                        position: 'absolute',
                        WebkitTransition: 'bottom 200ms ease-in-out',
                        transition: 'bottom 200ms ease-in-out',
                        verticalAlign: 'middle'
                    },
                    '.n-main__nav-logo img': {
                        verticalAlign: 'middle',
                        width: 118
                    },
                    '.n-main__nav-hamburger': {
                        borderLeft: '1px solid #EAEAEA',
                        WebkitBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        display: 'inline-block',
                        height: 60,
                        // lineHeight: 60,
                        textAlign: 'center',
                        width: 60
                    },
                    '#chkNavHamburger:checked ~ .n-main .n-menu': {
                        display: 'block'
                    },
                    '.n-main__covers': {
                        display: 'none',
                        position: 'absolute',
                        top: 60,
                        right: 0
                    },
                    mediaQueries: {
                        'screen and (min-width: 64em)': { //desktop
                            '.n-visibility--mobile': {
                                display: 'none'
                            },
                            '.n-visibility--desktop': {
                                display: 'block'
                            },
                            '.n-main__nav-logo.is-hidden a': {
                                bottom: -60
                            },
                            '.n-main__nav-hamburger': {
                                display: 'none'
                            },
                            ul: {
                                fontSize: '1.25rem',
                                lineHeight: '1.875rem'
                            },
                            'ul>li:before': {
                                top: 11
                            },
                            '#chkNavHamburger:checked ~ .n-main .n-menu': {
                                display: 'none'
                            }
                            ,
                            '.n-main__covers': {
                                display: 'block'
                            },
                            h4: {
                                fontSize: '1.25rem'
                            },
                            '.srch-main': {
                                padding: '45px 60px'
                            },
                            '.n-main__nav-search': {
                                borderLeft: '1px solid #EAEAEA'
                            },
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
                            },
                            p: {
                                fontSize: '1.25rem'
                            },
                            '.c-cookie-warning': {
                                left: 60,
                                width: 360
                            }
                        },
                        'screen and (min-width: 92.5em)': {
                            '.n-main__nav-logo': {
                                left: 'auto'
                            }
                        },
                        'screen and (min-width: 43.75em)': {
                            '.srch-main': {
                                padding: '45px 60px'
                            },
                            '.srch-textbox': {
                                fontSize: '3.125rem',
                                lineHeight: '3.125rem'
                            },
                            '.nl-main__wrapper': {
                                paddingLeft: 60,
                                paddingRight: 60
                            }
                        },
                        'screen and (max-width: 64em)': {
                            '#chkNavSearch:checked ~ .n-search': {
                                display: 'none'
                            }
                        },
                        'screen and (min-width: 90.0625em)': {
                            '.n-main__nav-search': {
                                borderRight: '1px solid #EAEAEA'
                            }
                        }
                    },
                    '.n-main__nav-hamburger label': {
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        display: 'block',
                        // height: 60,
                        lineHeight: '60px',
                        width: 60
                    },
                    '.n-main__nav-hamburger svg': {
                        display: 'inline-block',
                        height: 15,
                        // lineHeight: 60,
                        verticalAlign: 'middle'
                    },
                    '.n-main__nav-hamburger path': {
                        fill: '#000'
                    },
                    '.n-main__nav-hamburger:hover svg': {
                        fill: 'deeppink'
                    },
                    '.n-main__sticker-child': {
                        backgroundColor: '#fff',
                        borderBottom: '1px solid #EAEAEA',
                        WebkitBoxShadow: '0px 2px 5px 0px rgba(102, 102, 102, 0.06)',
                        boxShadow: '0px 2px 5px 0px rgba(102, 102, 102, 0.06)'
                    },

                    ul: {
                        fontFamily: '"adobe-caslon-pro", serif',
                        fontSize: '1.125rem',
                        fontWeight: 400,
                        lineHeight: '1.6875rem',
                        letterSpacing: 'normal',
                        margin: '20px 0',
                        color: '#333',
                        listStyleType: 'none',
                        paddingLeft: 20
                    },
                    // li: {
                    //     margin: '0.4em 0'
                    // },
                    'ul>li': {
                        position: 'relative'
                    },
                    'ul>li:before': {
                        background: '#222',
                        borderRadius: '50%',
                        content: '""',
                        display: 'block',
                        height: 8,
                        left: -20,
                        position: 'absolute',
                        top: 8,
                        width: 8
                    },
                    '.global__list-reset': {
                        fontWeight: 'normal',
                        lineHeight: 'normal',
                        listStyle: 'none',
                        margin: 0,
                        padding: 0
                    },
                    '.global__list-reset>li:before': {
                        background: 'none',
                        borderRadius: 0,
                        content: 'none',
                        height: 'auto',
                        left: 0,
                        position: 'initial',
                        top: 0,
                        width: 'auto'
                    },
                    '.global__list-reset>li': {
                        // margin: 0
                        // ,
                        // padding: 0
                    },
                    '.n-main__checkbox': {
                        left: -100,
                        position: 'absolute'
                    },
                    '.n-main__list': {
                        fontSize: 0,
                        height: 60,
                        textAlign: 'center'
                    },
                    '.n-main__list-item': {
                        display: 'inline-block',
                        fontSize: 'initial',
                        verticalAlign: 'top'
                    },
                    '.n-menu': {
                        display: 'none'
                    },
                    '.n-menu__nav a': {
                        color: '#000'
                    },
                    '.n-main__nav-link': {
                        color: '#111',
                        // display: 'block',
                        fontFamily: 'Nobel, sans-serif',
                        fontSize: '.75rem',
                        fontWeight: 700,
                        lineHeight: '.75rem',
                        letterSpacing: 1,
                        padding: '0 15px',
                        textTransform: 'uppercase'
                    },
                    '.n-main__nav-link span': {
                        display: 'inline-block',
                        height: 60,
                        lineHeight: '60px'
                    },
                    '.active a': {
                        backgroundColor: 'deeppink'
                    },
                    '.n-main__nav-link:hover': {
                        color: 'deeppink'
                    },
                    '.active:hover': {
                        color: '#111'
                    },
                    '.n-menu__nav .n-menu__nav__wrapper': {
                        margin: '0 20px',
                        overflow: 'hidden'
                    },
                    '.n-menu__nav a .n-menu__nav-item': {
                        borderBottom: '1px solid #EAEAEA',
                        float: 'left',
                        height: 60,
                        position: 'relative',
                        width: '100%'
                    },
                    '.n-menu__nav a .n-menu__nav-item .n-menu__nav-link': {
                        position: 'absolute',
                        top: '50%',
                        WebkitTransform: 'translateY(-50%)',
                        transform: 'translateY(-50%)',
                        fontFamily: 'Nobel, sans-serif',
                        fontSize: '.75rem',
                        fontWeight: 700,
                        // lineHeight: '.9375rem',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        wordBreak: 'break-word'
                    },
                    '.n-menu__nav .n-menu__nav-item .n-menu__nav-link a': {
                        position: 'absolute',
                        top: '50%',
                        WebkitTransform: 'translateY(-50%)',
                        transform: 'translateY(-50%)',
                        fontFamily: 'Nobel, sans-serif',
                        fontSize: '.75rem',
                        fontWeight: 700,
                        // lineHeight: '.9375rem',
                        letterSpacing: 1,
                        textTransform: 'uppercase',
                        wordBreak: 'break-word'
                    },
                    '.n-menu__nav .n-menu__nav-item': {
                        borderBottom: '1px solid #EAEAEA',
                        float: 'left',
                        height: 60,
                        position: 'relative',
                        width: '100%'
                    },
                    '.n-menu__nav a .n-menu__nav-item:hover, .n-menu__nav a .n-menu__nav-item:focus': {
                        color: 'deeppink'
                    },
                    'btn-single, a.btn-single': {
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
                        border: '1px solid deeppink',
                        color: 'deeppink'
                    },
                    '.btn-single--light:hover, a.btn-single--light:hover': {
                        backgroundColor: 'deeppink',
                        border: '1px solid transparent',
                        color: '#fff',
                        textDecoration: 'none'
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
                    // new
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

                    '.n-main__nav-search': {
                        display: 'inline-block',
                        float: 'right',
                        height: '60px',
                        lineHeight: '60px',
                        textAlign: 'center',
                        width: '60px',
                    },
                    '.n-main__nav-search label': {
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        display: 'block',
                        height: '60px',
                        lineHeight: '60px',
                        width: '60px',
                    },
                    '.n-main__nav-search svg': {
                        display: 'inline-block',
                        height: '20px',
                        lineHeight: '60px',
                        verticalAlign: 'middle'
                    },
                    '.n-main__nav-search path': {
                        fill: '#000'
                    },
                    '.n-main__nav-search:hover svg': {
                        fill: 'deeppink'
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
                        height: '60px',
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
                        height: '20px',
                        left: -2,
                        margin: '15px 0px',
                        position: 'absolute',
                        width: 1
                    },
                    '.n-main__dropdown__btn-share': {
                        display: 'inline-block',
                        height: '50px',
                        lineHeight: '45px',
                        paddingBottom: 0,
                        textAlign: 'center',
                        width: '50px',
                        position: 'relative'
                    },
                    '.n-main__dropdown__btn-share svg': {
                        height: '100%',
                        fill: '#fff',
                        width: '16px',
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
                        border: '1px solid deeppink',
                        color: 'deeppink'
                    },
                    '.n-main__dropdown__btn--newsletter:hover': {
                        borderBottom: 'none',
                        backgroundColor: 'deeppink',
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
                    },
                    '.srch-main': {
                        textAlign: 'center',
                        width: '100%',
                        backgroundColor: '#222',
                        WebkitBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        color: '#fff',
                        overflow: 'hidden',
                        padding: '55px 20px'
                    },
                    '.srch-textbox': {
                        textAlign: 'center',
                        fontFamily: '"ITC Caslon", Georgia, serif',
                        fontSize: '2.1875rem',
                        lineHeight: '2.25rem',
                        letterSpacing: '-0.01em',
                        WebkitAppearance: 'none',
                        msAppearance: 'none',
                        MozAppearance: 'none',
                        OAppearance: 'none',
                        appearance: 'none',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',
                        display: 'block',
                        margin: '0 auto',
                        maxWidth: 1440,
                        padding: '10px 20px',
                        width: '100%'
                    },
                    '.srch-main form': {
                        borderBottom: '1px solid #333'
                    },
                    '.srch-textbox::-webkit-input-placeholder': {
                        color: '#fff'
                    },
                    '.srch-textbox:-moz-placeholder': {
                        color: '#fff'
                    },
                    '.srch-textbox::-moz-placeholder': {
                        color: '#fff'
                    },
                    '.srch-textbox:-ms-input-placeholder': {
                        color: '#fff'
                    },
                    '.srch-textbox:focus': {
                        outline: 'none'
                    },
                    '.n-search': {
                        backgroundColor: 'rgba(17, 17, 17, 0.95)',
                        display: 'none'
                    },
                    '#chkNavSearch:checked ~ .n-search': {
                        display: 'block'
                    },

                    '.n-menu__search-textbox input': {
                        WebkitAppearance: 'none',
                        msAppearance: 'none',
                        MozAppearance: 'none',
                        OAppearance: 'none',
                        appearance: 'none',
                        backgroundColor: '#222',
                        border: 'none',
                        WebkitBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        color: '#666',
                        fontFamily: '"ITC Caslon", Georgia, serif',
                        fontSize: '1.0625rem',
                        lineHeight: '1.0625rem',
                        letterSpacing: '-0.01em',
                        height: 57,
                        padding: '0 20px',
                        marginTop: 3,
                        width: '100%'
                    },
                    '.n-menu__search': {
                        backgroundColor: '#222',
                        overflow: 'hidden',
                        position: 'relative'
                    },
                    '.n-menu__search path': {
                        fill: '#fff'
                    },
                    '.n-menu__search-textbox': {
                        display: 'inline-block',
                        left: 0,
                        height: 60,
                        position: 'absolute',
                        right: 60,
                        top: 0
                    },
                    '.n-menu__search-textbox input:focus': {
                        outline: 'none',
                        color: '#fff'
                    },
                    // -----------
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
                        border: '1px solid deeppink',
                        color: 'deeppink',
                        marginBottom: 40
                    },
                    '.n-menu__newsletter-btn:hover': {
                        borderBottom: 'none',
                        backgroundColor: 'deeppink',
                        border: '1px solid transparent',
                        color: '#fff',
                        textDecoration: 'none'
                    },
                    // h3: {
                    //     fontSize: '1.25rem',
                    //     fontWeight: 400
                    // },
                    // login page style

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
                    // h1: {
                    //     fontSize: '2.1875rem',
                    //     fontWeight: 400
                    // },
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
                        backgroundImage: 'url("https://s3-eu-west-1.amazonaws.com/swagbag.club/img/newsletter_checkbox.png")',
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
                        backgroundColor: 'deeppink',
                        border: '1px solid transparent',
                        color: '#fff',
                        textDecoration: 'none',
                        marginTop: 10,
                        marginBottom: 30,
                        textTransform: 'uppercase',
                        width: '100%',
                        height: 45
                    },
                    '.nl-form__checkbox-small': {
                        display: 'none'
                    },
                    '.nl-form__checkbox-small:checked+.nl-form__checkbox-small-box': {
                        backgroundPositionX: -16
                    },
                    '.nl-form__checkbox-small-box': {
                        backgroundImage: 'url("https://s3-eu-west-1.amazonaws.com/swagbag.club/img/newsletter_checkbox.png")',
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
                    },
                    // privacy policy style
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
                    '.docBody': {
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
                    },
                    // cookie warning
                    p: {
                        color: '#333',
                        fontFamily: '"adobe-caslon-pro", serif',
                        fontSize: '1.125rem',
                        fontWeight: 400,
                        lineHeight: '1.5em',
                        letterSpacing: 'normal'
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
                    },
                    '.Demo__container': {
                        textAlign:'right'
                    },
                    '.Demo__some-network': {
                        margin:'10px',
                        verticalAlign: 'top',
                        display: 'inline-block',
                        marginRight: 30,
                        textAlign: 'center'
                    },
                    '.Demo__some-network__share-count': {
                        marginTop: 3,
                        fontSize: 12
                    },
                    '.Demo__some-network__share-button': {
                        cursor: 'pointer'
                    },
                    '.Demo__some-network__share-button:hover:not(:active)': {
                        opacity: 0.75
                    }
                }

                }
                />
                <input type="checkbox" id="chkNavHamburger" className="n-main__checkbox" hidden />
                <input type="checkbox" id="chkNavSearch" className="n-main__checkbox" hidden />
                <Header />
                <SearchField isMobile={false} />
                <CookieWarning />

                {this.props.children}
            </StyleRoot>
        );
    }
}
