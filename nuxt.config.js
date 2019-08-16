const pkg = require('./package')

/*
 * Configure the meta variables for the Nuxt application.
 */
const metaVars = {
  title: "Tian Hao (Thomas) Wang's Business Profile",
  url: 'https://paced.me',
  lang: 'en',
  locale: 'en_AU',
  image: '/social-image.png',
  twitter: {
    cardType: 'summary',
    creator: 'bigpapapastry',
    publisher: 'bigpapapastry',
  },
  og: {
    type: 'website',
    siteName: 'paced.me',
  },
};

/*
 * Configure the inner workings of the Nuxt application.
 */
export default {
  mode: 'universal',
  loading: {
    color: "#3d2f62",
  },
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: []
  },
  css: [],
  plugins: [],
  devModules: [],
  modules: [
    '@nuxtjs/markdownit',
  ],
  build: {},
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true,
    use: []
  },
};

/* 
 * Separately set various head tags to declutter the main configuration while allowing configuration for SEO.
 * 
 * It is likely nothing below will need to be modified.
 */
module.exports.head = {
  title: metaVars.title,
  htmlAttrs: {
    lang: metaVars.lang,
  },
  meta: [
    {
      charset: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      hid: 'description',
      name: 'description',
      content: pkg.description,
    },
    {
      hid: 'twitter:card',
      name: 'twitter:card',
      content: metaVars.twitter.cardType,
    },
    {
      hid: 'twitter:creator',
      name: 'twitter:creator',
      content: metaVars.twitter.creator,
    },
    {
      hid: 'twitter:site',
      name: 'twitter:site',
      content: metaVars.twitter.publisher,
    },
    {
      hid: 'og:type',
      property: 'og:type',
      content: metaVars.og.type,
    },
    {
      hid: 'og:site_name',
      property: 'og:site_name',
      content: metaVars.og.siteName,
    },
    {
      hid: 'og:title',
      property: 'og:title',
      content: metaVars.title,
    },
    {
      hid: 'og:locale',
      property: 'og:locale',
      content: metaVars.locale,
    },
    {
      hid: 'og:url',
      property: 'og:url',
      content: metaVars.url,
    },
    {
      hid: 'og:description',
      property: 'og:description',
      content: pkg.description,
    },
    {
      hid: 'og:image',
      property: 'og:image',
      content: metaVars.image,
    },
  ],
  link: [
    {
      rel: 'canonical',
      href: metaVars.url,
    },
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-32x32.png',
    },
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon-16x16.png',
    },
  ],
};