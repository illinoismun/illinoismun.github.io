/** @type {import('postcss-load-config').Config} */
const config = {
    plugins: [
      require('autoprefixer'),
      require('postcss-100vh-fix'),
      require('postcss-nested')
    ]
  }
  
  module.exports = config