import { describe, expect, it } from 'vitest'
import { mtFaker } from '../src'

describe('dataType', () => {
  describe('number', () => {
    it('should return a random number given a maximum value of 0', () => {
      const max = 0
      const result = mtFaker.dataType.number({ max })
      expect(result).toBe(0)
    })

    it('should return a random number when given max params', () => {
      const max = 20
      const result = mtFaker.dataType.number({ max })
      expect(result).greaterThanOrEqual(0)
      expect(result).lessThanOrEqual(max)
    })

    it('should return a random number when given min params', () => {
      const min = 99
      const result = mtFaker.dataType.number({ min })
      expect(result).greaterThanOrEqual(min)
      expect(result).lessThanOrEqual(99999)
    })

    it('should return a random number when given precision', () => {
      const precision = 0.1
      const result = mtFaker.dataType.number({ precision })
      expect(result).toBe(Number(result.toFixed(1)))
    })

    it('should return a lower bound or Upper bound number', () => {
      const min = 1
      const max = 9
      const results = new Array(1000)
        .fill(null)
        .map(() => mtFaker.dataType.number({ min, max }))

      expect(results.includes(min)).toBe(true)
      expect(results.includes(max)).toBe(true)
    })
  })
})
