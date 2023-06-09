# tailwindcss-named-z-index

By default, tailwindcss has numbered z-indexes (`z-10`, `z-20`, `z-30`, etc.).
This plugin allows you to use named z-indexes instead which have a index based on the position in the array.

## Installation

```bash
npm install tailwindcss-named-z-index
# or
yarn add tailwindcss-named-z-index
```

## Usage

```js
// tailwind.config.js
module.exports = {
    theme: {
        zIndexLayers: [
            'header',   // z-index: 40
            'sidebar',  // z-index: 30
            'modal',    // z-index: 20
            'dropdown', // z-index: 10
        ]
    },
    plugins: [require('tailwindcss-named-z-index')],
}
```

## Credits

- [Max Hoogenbosch](https://github.com/Xammie)
- [All Contributors](../../contributors)

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.

```
