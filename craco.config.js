module.exports = {
  style: {
    postcss: {
      plugins:[
        require('sass'),
        require('tailwindcss'),
        require('autoprefixer'),
      ]
    }
  }
}