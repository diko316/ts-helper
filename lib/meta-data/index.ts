import { polyfillMetadata } from './polyfill-metadata.function';

const {
  metadata,
  defineMetadata,
  getMetadata,
  hasMetadata,

  getOwnMetadata,
  hasOwnMetadata,
} = polyfillMetadata();

export {
  metadata,
  defineMetadata,
  getMetadata,
  hasMetadata,
  getOwnMetadata,
  hasOwnMetadata,
};
