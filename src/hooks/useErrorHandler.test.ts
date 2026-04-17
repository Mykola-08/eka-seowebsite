import { expect, test, spyOn, afterEach } from "bun:test";
import { useErrorHandler } from "./useErrorHandler.ts";

const consoleSpy = spyOn(console, "error").mockImplementation(() => {});

afterEach(() => {
  consoleSpy.mockClear();
});

test("useErrorHandler returns a function", () => {
  const errorHandler = useErrorHandler();
  expect(typeof errorHandler).toBe("function");
});

test("useErrorHandler logs error to console", () => {
  const errorHandler = useErrorHandler();

  const error = new Error("Test error");
  const errorInfo = { componentStack: "Test stack" };

  errorHandler(error, errorInfo as any);

  expect(consoleSpy).toHaveBeenCalledWith(
    'Error caught by useErrorHandler:',
    error,
    errorInfo
  );
});

test("useErrorHandler logs error to console without errorInfo", () => {
  const errorHandler = useErrorHandler();

  const error = new Error("Test error without info");

  errorHandler(error);

  expect(consoleSpy).toHaveBeenCalledWith(
    'Error caught by useErrorHandler:',
    error,
    undefined
  );
});
