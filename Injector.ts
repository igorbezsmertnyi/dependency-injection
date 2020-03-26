import { Constructor } from './types'

export const Injector = new class {
  resolve<T>(Target: Constructor<T>): T {
    const requiredParams = Reflect.getMetadata('design:paramtypes', Target) || [];
    const resolvedParams = requiredParams.map((param: any) => Injector.resolve(param));
    const instance = new Target(...resolvedParams);
    return instance;
  }
}();
