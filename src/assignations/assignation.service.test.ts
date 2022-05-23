import { assertEquals } from "https://deno.land/std@0.140.0/testing/asserts.ts";
import { AssignationService } from "./assignation.service.ts";

Deno.test("should return hello world", () => {
  // given
  const service = new AssignationService();

  // when
  const result = service.hello();

  // then
  assertEquals(result, "hello world");
});
