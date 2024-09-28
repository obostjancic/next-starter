import { render, screen } from "@testing-library/react";
import { expect, test } from "vitest";

import Page from "../../src/app/page";

test("Page", async () => {
  // render(<Page />) will throw an error because the function is async
  const Result = await Page();
  await render(Result);

  expect(
    screen.getByRole("heading", { level: 1, name: "Hello, NextUI!" })
  ).toBeDefined();
});
