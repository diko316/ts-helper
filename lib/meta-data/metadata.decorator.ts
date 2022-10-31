import {
  BasePropertyDecoratorInfo,
  createDecoratorFactory,
} from '../decorator';
import { defineMetadata } from './define-metadata.function';
import { isMetadataKey } from './is-metadata-key.function';
import { MetadataKey, MetadataTarget, MetadataValue } from './meta-data.type';

interface MetadataSettings {
  key: MetadataKey;
  value: MetadataValue;
}

interface CommonMetadataDecoratorParams
  extends Partial<BasePropertyDecoratorInfo> {
  target: MetadataTarget;
  settings: MetadataSettings;
}

function metaDecorator<Info extends CommonMetadataDecoratorParams>({
  target,
  property,
  settings: { key, value },
}: Info): void {
  defineMetadata(key, value, target, property);
}

export const metadata = createDecoratorFactory({
  initialize(key: MetadataKey, value: MetadataValue): MetadataSettings {
    if (!isMetadataKey(key)) {
      throw new TypeError(`Invalid metadata key ${key}`);
    }

    return { key, value };
  },
  classDecorator: metaDecorator,
  staticAccessorDecorator: metaDecorator,
  staticMethodDecorator: metaDecorator,
  staticPropertyDecorator: metaDecorator,
  staticParameterDecorator: metaDecorator,

  accessorDecorator: metaDecorator,
  methodDecorator: metaDecorator,
  propertyDecorator: metaDecorator,
  parameterDecorator: metaDecorator,
});
