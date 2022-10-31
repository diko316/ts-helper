import { polyfillMetadata } from './polyfill-metadata.function';

export const {
  metadata,
  defineMetadata,
  getMetadata,
  hasMetadata,

  getOwnMetadata,
  hasOwnMetadata,
} = polyfillMetadata();
