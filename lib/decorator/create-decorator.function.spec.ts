import { createDecorator } from './create-decorator.function';

describe('decorator/createDecorator(options: CreateDecoratorOptions): UnifiedDecorator', () => {
  it('should flag class, property, and static property decorator as working', () => {
    let workingClassDecorator = false;
    let workingPropertyDecorator = false;
    let workingMethodDecorator = false;
    let workingAccessorDecorator = false;
    let workingParameterDecorator = false;
    let workingStaticPropertyDecorator = false;
    let workingStaticMethodDecorator = false;
    let workingStaticAccessorDecorator = false;
    let workingStaticParameterDecorator = false;

    const SampleDecorator = createDecorator({
      classDecorator({ target }) {
        target;
        // console.log('class! ', target);
        workingClassDecorator = true;
      },

      propertyDecorator({ target, property }) {
        target;
        property;
        // console.log('property ', property, ' of ', target);
        workingPropertyDecorator = true;
      },

      methodDecorator({ target, property, descriptor }) {
        // console.log(`method name: ${property} descriptor `, descriptor);
        target;
        property;
        descriptor;
        workingMethodDecorator = true;
      },

      accessorDecorator({ target, property, descriptor }) {
        // console.log(`method name: ${property} descriptor `, descriptor);
        target;
        property;
        descriptor;
        workingAccessorDecorator = true;
      },

      parameterDecorator({ target, property, index }) {
        // console.log(`method name: ${property} descriptor `, descriptor);
        target;
        property;
        index;
        workingParameterDecorator = true;
      },

      staticPropertyDecorator({ target, property }) {
        target;
        property;
        // console.log('static property ', property, ' of ', target);
        workingStaticPropertyDecorator = true;
      },

      staticMethodDecorator({ target, property, descriptor }) {
        // console.log(`static name: ${property} descriptor `, descriptor);
        target;
        property;
        descriptor;
        workingStaticMethodDecorator = true;
      },

      staticAccessorDecorator({ target, property, descriptor }) {
        // console.log(`accessor name: ${property} descriptor `, descriptor);
        target;
        property;
        descriptor;
        workingStaticAccessorDecorator = true;
      },

      staticParameterDecorator({ target, property, index }) {
        target;
        property;
        index;
        workingStaticParameterDecorator = true;
      },
    });

    // class decorator
    @SampleDecorator
    class Sample {
      /////////////// Static

      // static property decorator
      @SampleDecorator
      static id = 1;

      // static accessor decorator
      @SampleDecorator
      static get staticGetter(): string {
        return 'test';
      }

      // static method decorator
      @SampleDecorator
      static go(
        // static parameter decorator
        @SampleDecorator index: number
      ): void {
        console.log('go! ', index);
      }

      /////////////// Prototype

      // property decorator
      @SampleDecorator
      name = 'diko';

      // accessor decorator
      @SampleDecorator
      set setter(input: string) {
        console.log('input sa test ', input);
      }

      // method decorator
      @SampleDecorator
      method(
        // parameter decorator
        @SampleDecorator
        index: number
      ): void {
        index;
      }
    }

    const testing = new Sample();

    testing.method(100);

    expect(workingClassDecorator).toBe(true);
    expect(workingPropertyDecorator).toBe(true);
    expect(workingMethodDecorator).toBe(true);
    expect(workingAccessorDecorator).toBe(true);
    expect(workingParameterDecorator).toBe(true);

    expect(workingStaticPropertyDecorator).toBe(true);
    expect(workingStaticMethodDecorator).toBe(true);
    expect(workingStaticAccessorDecorator).toBe(true);
    expect(workingStaticParameterDecorator).toBe(true);
  });
});
