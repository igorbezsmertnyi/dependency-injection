import 'reflect-metadata'
import { ClassDecorator } from './types'

export const Injectable = (): ClassDecorator<any> => {
  return target => {};
};
