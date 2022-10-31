import { TYPEOF_OBJECT } from '../validation';

export function getGlobal(): typeof globalThis {
  if (typeof globalThis === TYPEOF_OBJECT) {
    return globalThis;
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof self === TYPEOF_OBJECT) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return self;
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (typeof window === TYPEOF_OBJECT) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    return window;
  }

  if (typeof global === TYPEOF_OBJECT) {
    return global;
  }

  return new Function('return this')();
}
