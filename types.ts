export interface Constructor<T> {
  new (...args: any[]): T;
}

export type ClassDecorator<T extends Function> = (Target: Constructor<T>) => T | void;
