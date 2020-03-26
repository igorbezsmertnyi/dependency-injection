import { Foo } from './Foo'
import { Injectable } from './Injectable'

@Injectable()
export class Bar {
  constructor(foo: Foo) {}

  public writeText() {
    document.write("Hello world")
  }
}
