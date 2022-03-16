import { getRandomArrayElement } from '../utils'
import { nameDataset } from '../dataset/nameDataset'

export class Name {
  /**
   * Returns a random English last name.
   *
   * @example
   * mtFaker.name.lastName() // Abbott
   */
  lastName() {
    return getRandomArrayElement(nameDataset.lastName) as string
  }

  /**
   * Returns a random English first name.
   *
   * @example
   * mtFaker.name.firstName() // James
   */
  firstName() {
    return getRandomArrayElement(nameDataset.firstName) as string
  }

  /**
   *
   * @param options.startWithLastName Start with last name. Defaults to `true`.
   * @param options.divider Divider string. Defaults to ` ` (space).
   *
   * @example
   * mtFaker.name.fullName() // James Abbott
   * mtFaker.name.fullName({ startWithLastName: false }) // Abbott James
   * mtFaker.name.fullName({ divider: '-' }) // James-Abbott
   * mtFaker.name.fullName({ startWithLastName: false, divider: '-' }) // Abbott-James
   */
  fullName({ startWithLastName = true, divider = ' ' } = {}) {
    if (!startWithLastName) {
      return `${this.firstName()}${divider}${this.lastName()}`
    }

    return `${this.lastName()}${divider}${this.firstName()}`
  }

  /**
   * Returns a random transitional Chinese last name.
   *
   * @example
   * mtFaker.name.tLastName() // 李
   */
  tLastName() {
    return getRandomArrayElement(nameDataset.tLastName) as string
  }

  /**
   * Returns a random transitional Chinese first name.
   *
   * @example
   * mtFaker.name.tLastName() // 怡君
   */
  tFirstName() {
    return getRandomArrayElement(nameDataset.tFirstName) as string
  }

  /**
   *
   * @param options.startWithLastName Start with last name. Defaults to `true`.
   * @param options.divider Divider string. Defaults to `` (empty string).
   *
   * @example
   * mtFaker.name.tFullName() // 李怡君
   * mtFaker.name.tFullName({ startWithLastName: false }) // 怡君李
   * mtFaker.name.tFullName({ divider: '-' }) // 李-怡君
   * mtFaker.name.tFullName({ startWithLastName: false, divider: '-' }) // 怡君-李
   */
  tFullName({ startWithLastName = true, divider = '' } = {}) {
    if (!startWithLastName) {
      return `${this.tFirstName()}${divider}${this.tLastName()}`
    }

    return `${this.tLastName()}${divider}${this.tFirstName()}`
  }
}
