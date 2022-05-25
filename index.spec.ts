// @ts-ignore
import { jsonStringifyCompact } from './index.cjs'
import { expect, describe, it } from 'vitest'

describe('parseUrl', () => {
  it('basics', () => {
    const str = jsonStringifyCompact({
      pageId: '/pages/hello/index',
      filesystemRoute: null,
      pageRouteFile: {
        filePath: '/pages/hello/index.page.route.ts',
        fileExports: {
          default: 'foo'
        },
        routeValue: 'bar'
      }
    })
    try {
    expect(str).toMatchInlineSnapshot(`
     euihwq`)
    } catch(err) {
      console.log(str)
      throw new Error('Fail')
    }
  })
})
