export const vague = <T>(
  proc: ($: typeof verify) => T
): T | null | undefined => {
  try {
    return proc(verify);
  } catch (e) {
    if (e instanceof EmptyError) {
      return e.value;
    }
    throw e;
  }
};

const verify = <T>(nullableValue?: T | null): T => {
  if (nullableValue === null) {
    throw new EmptyError(null);
  }
  if (nullableValue === undefined) {
    throw new EmptyError(undefined);
  }
  return nullableValue;
};

class EmptyError extends Error {
  constructor(public value: null | undefined) {
    super();
  }
}
