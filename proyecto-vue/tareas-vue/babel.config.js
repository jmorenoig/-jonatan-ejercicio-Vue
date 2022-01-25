module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{js,vue}',
    'src/main.js' // No need to cover bootstrap file
]
},
module.exports = {
  presets: [
    '@vue/app'
  ],
  plugins: [
    ['babel-plugin-istanbul', {
      extension: ['.js', '.vue']
    }]
  ]
}
