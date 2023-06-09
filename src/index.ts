import plugin from 'tailwindcss/plugin'

function getLayers(input: string[]) {
    const list: string[] = input.reverse();
    let layers: Record<string, number> = {};

    for (let i = 0; i < list.length; i++) {
        layers[list[i]] = (i + 1) * 10;
    }

    return layers;
}

export = plugin(
    function namedZIndex({matchUtilities, theme}) {
        const layers = getLayers(theme('zIndexLayers', []));

        matchUtilities(
            {
                // @ts-ignore
                z: (value) => {
                    return ({
                        zIndex: value
                    })
                },
            },
            {values: layers}
        )
    },
    {
        theme: {
            zIndexLayers: [],
        },
    }
)