export class DataType {
  /**
   *
   * @param options.min Lower bound for generated number. Defaults to `0`.
   * @param options.max Upper bound for generated number. Defaults to `99999`.
   * @param options.precision Precision of the generated number. Defaults to `1`.
   *
   * @example
   * mtFaker.datatype.number({ min: 1 }) // 52
   * mtFaker.datatype.number({ max: 20 }) // 15
   * mtFaker.datatype.number({ precision: 0.1 }) // 3.5
   * mtFaker.datatype.number({ min: 4, max: 100, precision: 0.1 }) // 36.7
   */
  number({ min = 0, max = 99999, precision = 1 } = {}) {
    const randomNumber = Math.round(
      Math.random() * (max / precision - min / precision) + min / precision
    )
    return randomNumber / (1 / precision)
  }
}
