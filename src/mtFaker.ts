import { DataType } from './api/dataType'
import { Name } from './api/name'

export class MtFaker {
  readonly init = () => {
    return 'hello world!'
  }

  readonly dataType: DataType = new DataType()

  readonly name: Name = new Name()
}
