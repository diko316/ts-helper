import { TYPEOF_FUNCTION, TYPEOF_OBJECT } from '../validation';
import { AnyObject, getGlobal } from '../misc';
import { defineMetadata } from './define-metadata.function';
import { getMetadata } from './get-metadata.function';
import { metadata } from './metadata.decorator';
import { getOwnMetadata } from './get-own-metadata.function';
import { hasMetadata } from './has-metadata.function';
import { hasOwnMetadata } from './has-own-metadata.function';

interface PolyfilledMetadata {
  metadata: typeof metadata;
  defineMetadata: typeof defineMetadata;
  getMetadata: typeof getMetadata;
  hasMetadata: typeof hasMetadata;

  getOwnMetadata: typeof getOwnMetadata;
  hasOwnMetadata: typeof hasOwnMetadata;
}

let APPLIED: PolyfilledMetadata | false = false;

function getOrSetReflectObject(scope: AnyObject): PolyfilledMetadata {
  if (typeof scope.Reflect === TYPEOF_OBJECT) {
    return scope.Reflect;
  }

  const filler = {} as PolyfilledMetadata;
  scope.Reflect = filler;

  return filler;
}

function applyReflectMethodIf<Name extends keyof PolyfilledMetadata>(
  methodName: Name,
  polyfill: PolyfilledMetadata[Name],
  reflect: PolyfilledMetadata,
  target: PolyfilledMetadata
): void {
  if (typeof reflect[methodName] === TYPEOF_FUNCTION) {
    target[methodName] = reflect[methodName];
    return;
  }

  target[methodName] = reflect[methodName] = polyfill;
}

export function polyfillMetadata(): PolyfilledMetadata {
  if (APPLIED) {
    return APPLIED;
  }

  const reflect = getOrSetReflectObject(getGlobal());

  APPLIED = {} as PolyfilledMetadata;

  applyReflectMethodIf('metadata', metadata, reflect, APPLIED);
  applyReflectMethodIf('defineMetadata', defineMetadata, reflect, APPLIED);
  applyReflectMethodIf('getMetadata', getMetadata, reflect, APPLIED);
  applyReflectMethodIf('hasMetadata', hasMetadata, reflect, APPLIED);

  applyReflectMethodIf('getOwnMetadata', getOwnMetadata, reflect, APPLIED);
  applyReflectMethodIf('hasOwnMetadata', hasOwnMetadata, reflect, APPLIED);

  return APPLIED;
}
