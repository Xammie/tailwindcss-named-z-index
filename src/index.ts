import plugin from 'tailwindcss/plugin'

export = plugin(
    function namedZIndex({matchUtilities, theme}) {
        const layers: string[] = Object.values(theme('zIndexLayers', [])).reverse();

        let values: Record<string, number> = {};

        for (let i = 0; i < layers.length; i++) {
            values[layers[i]] = i + 1;
        }

        matchUtilities(
            {
                // @ts-ignore
                z: (value) => {
                    return ({
                        zIndex: value
                    })
                },
            },
            {values: values}
        )
    },
    {
        theme: {
            zIndexLayers: [],
        },
    }
)