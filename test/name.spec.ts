import { describe, expect, it } from 'vitest'
import { mtFaker } from '../src'
import { nameDataset } from '../src/dataset/nameDataset'

describe('name', () => {
  describe('name', () => {
    it('should return a English last name', () => {
      const result = mtFaker.name.lastName()
      expect(nameDataset.lastName.includes(result)).toBe(true)
    })

    it('should return a English first name', () => {
      const result = mtFaker.name.firstName()
      expect(nameDataset.firstName.includes(result)).toBe(true)
    })

    it('should return a English fullName with default params', () => {
      const result = mtFaker.name.fullName()
      const nameArray = result.split(' ')
      const [lastName, firstName] = nameArray

      expect(nameDataset.lastName.includes(lastName)).toBe(true)
      expect(nameDataset.firstName.includes(firstName)).toBe(true)
    })

    it('should return a English fullName with startWithLastName params', () => {
      const result = mtFaker.name.fullName({ startWithLastName: false })
      const nameArray = result.split(' ')
      const [firstName, lastName] = nameArray

      expect(nameDataset.lastName.includes(lastName)).toBe(true)
      expect(nameDataset.firstName.includes(firstName)).toBe(true)
    })

    it('should return a English fullName with divider params', () => {
      const divider = '~'
      const result = mtFaker.name.fullName({ divider })
      const nameArray = result.split(divider)
      const [lastName, firstName] = nameArray

      expect(nameDataset.lastName.includes(lastName)).toBe(true)
      expect(nameDataset.firstName.includes(firstName)).toBe(true)
    })
  })

  describe('tName', () => {
    it('should return a transitional Chinese last name', () => {
      const result = mtFaker.name.tLastName()
      expect(nameDataset.tLastName.includes(result)).toBe(true)
    })

    it('should return a transitional Chinese first name', () => {
      const result = mtFaker.name.tFirstName()
      expect(nameDataset.tFirstName.includes(result)).toBe(true)
    })

    it('should return a transitional Chinese fullName with default params', () => {
      const result = mtFaker.name.tFullName()
      const nameArray = result.split('')
      const lastName = nameArray[0]
      const firstName = nameArray.splice(1).join('')

      expect(nameDataset.tLastName.includes(lastName)).toBe(true)
      expect(nameDataset.tFirstName.includes(firstName)).toBe(true)
    })

    it('should return a transitional Chinese fullName with startWithLastName params', () => {
      const result = mtFaker.name.tFullName({ startWithLastName: false })
      const nameArray = result.split('')
      const lastName = nameArray.splice(-1).join('')
      const firstName = [...nameArray].join('')

      expect(nameDataset.tLastName.includes(lastName)).toBe(true)
      expect(nameDataset.tFirstName.includes(firstName)).toBe(true)
    })

    it('should return a transitional Chinese fullName with divider params', () => {
      const divider = 'x'
      const result = mtFaker.name.tFullName({ divider })
      const nameArray = result.split('')
      const lastName = nameArray[0]

      const firstNameArrayContainsDivider = nameArray.splice(1)
      const firstName = firstNameArrayContainsDivider
        .filter((_) => _ !== divider)
        .join('')

      expect(firstNameArrayContainsDivider[0]).toBe(divider)
      expect(nameDataset.tLastName.includes(lastName)).toBe(true)
      expect(nameDataset.tFirstName.includes(firstName)).toBe(true)
    })
  })
})
