import { page, server } from 'vitest/browser';
import { afterAll, afterEach, beforeAll, beforeEach, describe, expect, it, onTestFailed, onTestFinished } from 'vitest';

const TIMEOUT = server.provider === 'playwright' && typeof process !== 'undefined' && process.platform === 'win32' ? 500 : 150

describe.runIf(server.provider === 'playwright')('timeouts are failing correctly', () => {
  it('click on non-existing element fails', async () => {
    await page.getByRole('code').click()
  }, TIMEOUT)

  it('expect.element on non-existing element fails', async () => {
    await expect.element(page.getByRole('code')).toBeVisible()
  }, TIMEOUT)

  describe('beforeEach', () => {
    beforeEach(async () => {
      await page.getByTestId('non-existing').click()
    }, TIMEOUT)

    it('skipped', () => {})
  })

  describe('afterEach', () => {
    afterEach(async () => {
      await page.getByTestId('non-existing').click()
    }, TIMEOUT)

    it('skipped', () => {})
  })

  describe('beforeAll', () => {
    beforeAll(async () => {
      await page.getByTestId('non-existing').click()
    }, TIMEOUT)

    it('skipped', () => {})
  })

  describe('afterAll', () => {
    afterAll(async () => {
      await page.getByTestId('non-existing').click()
    }, TIMEOUT)

    it('skipped', () => {})
  })

  describe('onTestFinished', () => {
    it('fails', ({ onTestFinished }) => {
      onTestFinished(async () => {
        await page.getByTestId('non-existing').click()
      }, TIMEOUT)
    })

    it('fails global', () => {
      onTestFinished(async () => {
        await page.getByTestId('non-existing').click()
      }, TIMEOUT)
    })
  })

  describe('onTestFailed', () => {
    it('fails', ({ onTestFailed }) => {
      onTestFailed(async () => {
        await page.getByTestId('non-existing').click()
      }, TIMEOUT)

      expect.unreachable()
    })

    it('fails global', () => {
      onTestFailed(async () => {
        await page.getByTestId('non-existing').click()
      }, TIMEOUT)

      expect.unreachable()
    })
  })
})
