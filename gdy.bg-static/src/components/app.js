const React = require('react');
const Radium = require('radium');
const { Style, StyleRoot } = Radium;
const Header = require('./header');
const SearchField = require('./searchField');

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
                    //     color: '#C00000',
                    //     textDecoration: 'none'
                    // },
                    'a:hover': {
                        textDecoration: 'underline'
                    },
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
                        fill: '#C00000'
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
                    '.n-main__nav-link:hover': {
                        color: '#C00000'
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
                    '.n-menu__nav a .n-menu__nav-item:hover, .n-menu__nav a .n-menu__nav-item:focus': {
                        color: '#C00000'
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
                        border: '1px solid #C00000',
                        color: '#C00000'
                    },
                    '.btn-single--light:hover, a.btn-single--light:hover': {
                        backgroundColor: '#C00000',
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
                    //media
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
                    ,
                    // -----------
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
                    }

                }
                }
                />
                <input type="checkbox" id="chkNavHamburger" className="n-main__checkbox" hidden />
                <input type="checkbox" id="chkNavSearch" className="n-main__checkbox" hidden />
                <Header />
                <SearchField isMobile={false} />
                
                {this.props.children}
            </StyleRoot>
        );
    }
}
