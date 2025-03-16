import { assert } from "jsr:@std/assert";
import { app } from "mfm/app.ts";

Deno.test("app", () => {
  assert(app);
});
