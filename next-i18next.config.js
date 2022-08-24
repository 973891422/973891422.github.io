const path = require('path')
module.exports = {
  i18n: {
    locales: ['zh', 'en'],
    defaultLocale: 'zh',
    localePath: path.resolve('./public/locales'),
  },
}
