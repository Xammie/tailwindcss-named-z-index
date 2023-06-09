const plugin = require('tailwindcss/plugin')

function namedIndex({ matchUtilities, theme }) {
  const layers = Object.values(theme('zIndexLayers'));
  let values = {};

  for (let i = 0; i < layers.length; i++) {
    values[layers[i]] = i + 1;
  }

  matchUtilities(
      {
        z: (value) => {
          return ({
            zIndex: value
          })
        },
      },
      { values: values }
  )
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './index.html',
  ],
  theme: {
    extend: {
      zIndexLayers: [
        'header',
        'popup',
      ],
    },
  },
  plugins: [
    plugin(namedIndex),
  ],
  corePlugins: {
    preflight: false,
  }
}

