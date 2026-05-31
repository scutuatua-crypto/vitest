const snapshot = timeoutErrorsIndexes.map((index) => {
  return [
    lines[index - 1].replace(/:(\d+):(\d+)$/, ':LINE:COL'),
    lines[index].replace(/Timeout \d+ms exceeded/, 'Timeout <ms> exceeded'),
    lines[index + 4] ? lines[index + 4].replace(/:(\d+):(\d+)$/, ':LINE:COL') : '',
  ].join('\n')
}).sort().join('\n\n')

expect(snapshot).toMatchInlineSnapshot(`
"FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > afterAll
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > afterEach > skipped
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > beforeAll
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > beforeEach > skipped
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > click on non-existing element fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > onTestFailed > fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > onTestFailed > fails global
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > onTestFinished > fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |chromium| hooks-timeout.test.ts > timeouts are failing correctly > onTestFinished > fails global
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > afterAll
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > afterEach > skipped
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > beforeAll
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > beforeEach > skipped
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > click on non-existing element fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > onTestFailed > fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > onTestFailed > fails global
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > onTestFinished > fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |firefox| hooks-timeout.test.ts > timeouts are failing correctly > onTestFinished > fails global
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > afterAll
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > afterEach > skipped
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > beforeAll
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > beforeEach > skipped
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > click on non-existing element fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > onTestFailed > fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > onTestFailed > fails global
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > onTestFinished > fails
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL

FAIL |webkit| hooks-timeout.test.ts > timeouts are failing correctly > onTestFinished > fails global
TimeoutError: locator.click: Timeout <ms> exceeded.
 ❯ hooks-timeout.test.ts:LINE:COL"
)
