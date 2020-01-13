import faker from "faker";

export function validateEmail(email: string) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export function range(len: number) {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
}

interface Generator<D> {
  (instance: typeof faker): { [key in keyof D]: D[key] };
}
export function makeData<D>(generator: Generator<D>): ReturnType<typeof generator>;
export function makeData<D>(
  generator: Generator<D>,
  size: number
): Array<ReturnType<typeof generator>>;
export function makeData<D>(
  generator: Generator<D>,
  size?: number
): ReturnType<typeof generator> | Array<ReturnType<typeof generator>> {
  if (typeof size === "undefined") return generator(faker);
  return range(size).map(_ => generator(faker));
}
