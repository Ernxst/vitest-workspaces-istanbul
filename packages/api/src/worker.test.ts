import { SELF } from "cloudflare:test";
import { describe, expect, test } from "vitest";

describe("api", () => {
  test("should return response", async () => {
    const response = await SELF.fetch("https://example.com")

    await expect(response.json()).resolves.toEqual({ message: 'Hello World!' })
  })
})
