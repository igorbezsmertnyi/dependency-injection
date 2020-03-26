import { Foo } from './Foo'
import { Bar } from './Bar'
import { Injectable } from './Injectable'

@Injectable()
export class Foobar {
  constructor(public foo: Foo, public bar: Bar) {}
}
