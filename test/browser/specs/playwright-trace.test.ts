import { readdirSync, rmSync } from 'node:fs'
import { resolve } from 'pathe'
import { afterEach, describe, expect, test } from 'vitest'
import { provider, runBrowserTests } from './utils'

const tracesFolder = resolve(import.meta.dirname, '../fixtures/trace-view/__traces__')
const basicTestTracesFolder = resolve(tracesFolder, 'basic.test.ts')

describe.runIf(provider.name === 'playwright')('playwright tracing', () => {
  afterEach(() => {
    rmSync(tracesFolder, { recursive: true, force: true })
  })

  test('vitest generates trace files when running with `on`', async () => {
    const { stderr, ctx } = await runBrowserTests({
      root: './fixtures/trace-view',
      browser: {
        trace: 'on',
      },
      includeTaskLocation: true,
    })

    expect(stderr).toBe('')
    expect(readdirSync(tracesFolder)).toEqual(['basic.test.ts'])
    
    // รายการไฟล์ที่คาดหวัง (ชุดเดิม)
    expect(readdirSync(basicTestTracesFolder).sort()).toMatchSnapshot()

    const testModules = ctx.state.getTestModules()
    expect(testModules).toHaveLength(3)
    testModules.forEach((testModule) => {
      for (const test of testModule.children.allTests()) {
        if (test.result().state === 'skipped') continue
        const annotations = test.annotations()
        expect(annotations.length).toBeGreaterThan(0)
        annotations.forEach((annotation) => {
          expect(annotation.message).toContain('basic.test.ts/')
          expect(annotation.type).toBe('traces')
          expect(annotation.attachment!.contentType).toBe('application/octet-stream')
        })
      }
    })
  }, 600000)

  test('vitest generates trace files when running with `on-all-retries`', async () => {
    const { stderr } = await runBrowserTests({
      root: './fixtures/trace-view',
      browser: {
        trace: 'on-all-retries',
      },
    })
    expect(stderr).toBe('')
    expect(readdirSync(tracesFolder)).toEqual(['basic.test.ts'])
  }, 600000)

  test('vitest generates trace files when running with `on-first-retries`', async () => {
    const { stderr } = await runBrowserTests({
      root: './fixtures/trace-view',
      browser: {
        trace: 'on-first-retry',
      },
    })
    expect(stderr).toBe('')
    expect(readdirSync(tracesFolder)).toEqual(['basic.test.ts'])
  }, 600000)

  test('vitest generates trace files when running with `retain-on-failure`', async () => {
    const { stderr } = await runBrowserTests({
      root: './fixtures/trace-view',
      include: ['./*.test.ts', './*.special.ts'],
      browser: {
        trace: 'retain-on-failure',
      },
    })
    expect(stderr).toContain('❯ traces')
    expect(stderr).toContain('↳ __traces__/failing.special.ts/')
  }, 600000)
})
