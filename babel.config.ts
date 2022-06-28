module.exports = {
  "presets": [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript'
    ],
  "plugins": [
    [
      "styled-jsx/babel",
      { "plugins": ["styled-jsx-plugin-sass"] }
    ]
  ]
};

export {}