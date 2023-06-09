import { expect } from '@jest/globals'
import { html, css, run } from './run'

it('named z-index', () => {
    let config = {
        content: [
            {
                raw: html`
            <div class="z-header"></div>
            <div class="z-popup"></div>
            <div class="z-banner"></div>
        `,
            },
        ],
        theme: {
            zIndexLayers: [
                'banner',
                'popup',
                'header',
            ],
        },
        corePlugins: { preflight: false },
    }

    let input = css`
    @tailwind utilities;
  `

    return run(input, config).then((result) => {
        expect(result.css).toMatchFormattedCss(css`
      .z-banner {
        z-index: 3;
      }
      .z-header {
        z-index: 1;
      }
      .z-popup {
        z-index: 2;
      }
    `)
    })
})
