module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    "transform-vue-jsx", 
    "transform-runtime",
    ["import",{"libraryName":"vant","style":true}]
  ],
  presets: [
    '@vue/app'
  ],
  plugins: ["@babel/plugin-transform-runtime"],
  comments: false,
  env: {
    test: {
      presets: ["@babel/preset-env"],
      plugins: ["istanbul"]
    }
  }
}
