export const getRandomArrayElement = (dataSet: string[] | number[]) => {
  const min = 0
  const max = dataSet.length - 1
  const randomIndex = Math.floor(Math.random() * (max - min) + min)
  return dataSet[randomIndex]
}
