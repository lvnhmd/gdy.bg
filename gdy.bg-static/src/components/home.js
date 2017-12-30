import React from 'react';
import { Component } from 'react';
const Radium = require('radium');
const { Style, StyleRoot } = Radium;
// import CompetitionList from '../containers/competition_list';
const CompetitionList = require('./competitionList');
export default class Home extends Component {
    render() {
        return (
            <StyleRoot>
                <Style rules={{
                    h3: {
                        color: '#111',
                        fontFamily: '"ITC Caslon", Georgia, serif',
                        fontWeight: 400,
                        lineHeight: '1.2em',
                        letterSpacing: '-0.01em',
                        WebkitFontVariantLigatures: 'common-ligatures',
                        fontVariantLigatures: 'common-ligatures',
                        margin: '30px 0 20px 0',
                        fontSize: '1.25rem'
                    },
                    mediaQueries: {
                        'screen and (min-width: 64em)': {
                            h3: {
                                fontSize: '1.5rem'
                            },
                            p: {
                                fontSize: '1.25rem'
                            },
                            '.c-card-section': {
                                paddingLeft: 60,
                                paddingRight: 60,
                                marginTop: 60,
                                marginBottom: 60
                            }
                        },
                        'screen and (min-width: 37.5em)': {
                            '.c-card__image__icon': {
                                height: 40,
                                width: 40
                            },
                            '.c-card__title': {
                                fontSize: '1.25rem',
                                lineHeight: '1.5625rem',
                                margin: '0 0 10px 0'
                            },
                            '.c-card__byline': {
                                fontSize: '.6875rem',
                                lineHeight: '.9375rem',
                                margin: '10px 0 15px 0'
                            },
                            '.c-card__byline-name': {
                                fontSize: '.6875rem'
                            },
                            '.c-card__meta': {
                                borderBottom: '1px solid #EAEAEA',
                                fontSize: '.6875rem',
                                lineHeight: '1.25rem',
                                // paddingTop: 8
                            },
                            '.c-card--hero .c-card__image--picture': {
                                paddingTop: '100%'
                            },
                            '.c-card-list--c-curated .c-card-list__item': {
                                display: 'inline-block',
                                marginBottom: 30,
                                width: '50%'
                            }
                        },
                        'screen and (min-width: 68.75em)': {
                            '.c-card-list--c-curated .c-card-list__item': {
                                width: '25%'
                            }
                        },
                        'screen and (min-width: 43.75em)': {
                            '.c-card-section': {
                                paddingLeft: 60,
                                paddingRight: 60,
                                marginTop: 60,
                                marginBottom: 60
                            }
                        }
                    },
                    hr: {
                        borderTop: '1px solid #EAEAEA',
                        height: 0,
                        margin: '10px 0'
                    },
                    p: {
                        color: '#333',
                        fontFamily: '"adobe-caslon-pro", serif',
                        fontSize: '1.125rem',
                        fontWeight: 400,
                        lineHeight: '1.5em',
                        letterSpacing: 'normal'
                    },
                    '.global__image': {
                        display: 'block',
                        maxWidth: '100%'
                    },
                    '.img-lazyload': {
                        opacity: 0
                    },
                    '.n-menu': {
                        display: 'none',
                        backgroundColor: '#fff',
                        WebkitOverflowScrolling: 'touch'
                    },
                    '.c-card': {
                        color: '#000',
                        position: 'relative'
                    },
                    '.c-card__link--article': {
                        backgroundColor: 'rgba(255, 255, 255, 0.01)',
                        bottom: 0,
                        fontSize: 0,
                        left: 0,
                        opacity: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        zIndex: 1
                    },
                    '.c-card__images': {
                        position: 'relative'
                    },
                    '.c-card__image': {
                        display: 'block',
                        position: 'relative',
                        width: '100%',
                        background: '#EAEAEA',
                        opacity: 1,
                        filter: 'alpha(opacity=100)',
                        WebkitTransition: 'all 0.3s ease',
                        transition: 'all 0.3s ease'
                    },
                    '.c-card__image img': {
                        display: 'block',
                        width: '100%'
                    },
                    '.c-card__image--picture img': {
                        bottom: 0,
                        height: '100%',
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0
                    },
                    '.c-card__image__icon': {
                        position: 'absolute',
                        backgroundColor: '#fff',
                        bottom: 0,
                        height: 30,
                        left: 0,
                        lineHeight: 30,
                        textAlign: 'center',
                        width: 30
                    },
                    '.c-card__title': {
                        wordWrap: 'break-word',
                        margin: '0 0 6px 0',
                        fontFamily: '"ITC Caslon", Georgia, serif',
                        fontSize: '1.0625rem',
                        lineHeight: '1.25rem',
                        letterSpacing: '-0.01em',
                        WebkitTransition: 'all 0.3s ease',
                        transition: 'all 0.3s ease'
                    },
                    '.c-card__byline': {
                        fontSize: '.625rem',
                        lineHeight: '.875rem',
                        margin: '6px 0 8px 0'
                    },
                    '.c-card__meta': {
                        borderBottom: '1px solid #EAEAEA',
                        fontSize: '.625rem',
                        color: '#666',
                        fontFamily: 'Nobel, sans-serif',
                        lineHeight: '1rem',
                        letterSpacing: '0.025em'
                        // ,
                        // display: 'inline-block'
                    },
                    'li.c-card__meta-item': {
                        display: 'inline-block'
                    },
                    '.c-card:hover .c-card__title, .c-card:hover .c-card__byline-name,  .c-card:focus .c-card__title, .c-card:focus .c-card__byline-name': {
                        opacity: 0.7,
                        textDecoration: 'none'
                    },
                    '.c-card:hover .c-card__image, .c-card:focus .c-card__image': {
                        opacity: 0.8,
                        filter: 'alpha(opacity=80)'
                    },
                    '.c-card__image__icon svg': {
                        display: 'block',
                        height: '100%',
                        margin: '0 auto',
                        verticalAlign: 'middle',
                        width: 16
                    },
                    '.c-card__image__icon path': {
                        fill: '#666'
                    },
                    '.c-card__separator': {
                        display: 'none'
                    },
                    '.c-card__byline-prefix': {
                        color: '#666',
                        fontFamily: '"adobe-caslon-pro", serif',
                        fontSize: '.75rem',
                        lineHeight: '1.5em',
                        letterSpacing: 'normal',
                        fontStyle: 'italic',
                        textTransform: 'lowercase',
                        marginRight: 2
                    },
                    '.c-card__byline-name': {
                        color: '#111',
                        fontFamily: 'Nobel, sans-serif',
                        fontSize: '.625rem',
                        lineHeight: '1em',
                        letterSpacing: 1,
                        textTransform: 'uppercase'
                    },
                    '.c-card__meta-item--tag': {
                        color: 'deeppink',
                        letterSpacing: 1,
                        textTransform: 'uppercase'
                    },
                    '.c-card__meta-item--date': {
                        color: 'deeppink'
                    },
                    'li.c-card__meta-item:not(:last-child)': {
                        paddingRight: 8
                    },
                    'li.c-card__meta-item+li.c-card__meta-item': {
                        borderLeft: '1px solid #EAEAEA',
                        paddingLeft: 8
                    },
                    '.c-card--hero .c-card__obj__header': {
                        display: 'block',
                        marginBottom: 20,
                        padding: 0,
                        width: 'auto'
                    },
                    '.c-card--hero .c-card__image__icon': {
                        bottom: 0,
                        height: 40,
                        left: 0,
                        width: 40
                    },
                    '.c-card--hero .c-card__image__icon svg': {
                        display: 'block',
                        height: '100%',
                        margin: '0 auto',
                        verticalAlign: 'middle',
                        width: 16
                    },
                    '.c-card--hero .c-card__obj__body': {
                        display: 'block',
                        marginTop: 10,
                        padding: 0,
                        width: '100%'
                    },
                    '.c-card--hero .c-card__separator': {
                        display: 'none'
                    },
                    '.c-card--hero .c-card__title': {
                        marginBottom: 15,
                        fontSize: '1.25rem',
                        lineHeight: '1.5625rem'
                    },
                    '.c-card--hero .c-card__image--picture img': {
                        bottom: 0,
                        height: '100%',
                        left: 0,
                        position: 'absolute',
                        right: 0,
                        top: 0,
                        width: '100%'
                    },
                    '.c-card--hero .c-card__image--picture': {
                        paddingTop: '66.66666%'
                    },
                    '.c-card-list': {
                        fontSize: 0,
                        position: 'relative'
                    },
                    '.c-card-list__item': {
                        WebkitBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        fontSize: 'initial',
                        verticalAlign: 'top',
                        width: '100%'
                    },
                    '.c-card-list--c-curated': {
                        margin: '0 -20px'
                    },
                    '.c-card-list--c-curated .c-card-list__item': {
                        padding: '20px 20px'
                        // ,
                        // width: '100%'
                    },
                    '.c-card-list--c-curated .c-card-list__item:nth-last-child(-n+2)': {
                        marginBottom: 0
                    },
                    '.c-card-list--c-curated .c-card-list__item:nth-last-child(-n+4)': {
                        marginBottom: 0
                    },
                    '.c-card-section': {
                        WebkitBoxSizing: 'border-box',
                        boxSizing: 'border-box',
                        margin: '0 auto',
                        maxWidth: 1560,
                        paddingLeft: 20,
                        paddingRight: 20,
                        marginTop: 40,
                        marginBottom: 40
                    },
                    '.c-card-section__constrain': {
                        margin: '0 auto',
                        maxWidth: 1440,
                        position: 'relative',
                        width: '100%'
                    }
                }} />
                <CompetitionList />
            </StyleRoot>



        );
    }
}
