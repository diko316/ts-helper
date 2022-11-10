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
export declare function polyfillMetadata(): PolyfilledMetadata;
export {};
