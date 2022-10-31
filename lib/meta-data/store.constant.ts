import { MetadataStore } from './store.type';

export const METADATA_STORE: MetadataStore = new WeakMap();

export const DEFAULT_METADATA_PROPERTY_KEY = Symbol('metadata:property');
