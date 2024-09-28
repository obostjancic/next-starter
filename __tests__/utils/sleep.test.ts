import { expect, test } from "vitest";

import { sleep } from "../../src/utils/sleep";

test("sleep", async () => {
  const start = Date.now();
  await sleep(1000);
  const end = Date.now();

  expect(end - start).toBeGreaterThanOrEqual(1000);
});
