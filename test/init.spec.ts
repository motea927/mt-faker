import { describe, expect, it } from 'vitest'
import { mtFaker } from '../src'

describe('init', () => {
  it('init test', () => {
    const result = mtFaker.init()
    expect(result).toBe('hello world!')
  })
})
