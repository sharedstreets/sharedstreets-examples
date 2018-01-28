module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
    ]
  },
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};