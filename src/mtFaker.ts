import { DataType } from './api/dataType'

export class MtFaker {
  readonly init = () => {
    return 'hello world!'
  }

  readonly dataType: DataType = new DataType()
}
