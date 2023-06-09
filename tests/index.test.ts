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
                'popup',
                'banner',
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
        z-index: 20;
      }
      .z-header {
        z-index: 10;
      }
      .z-popup {
        z-index: 30;
      }
    `)
    })
})
