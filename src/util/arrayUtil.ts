export const swapElements = (
  array: Array<unknown>,
  index1: number,
  index2: number
) => {
  array[index1] = array.splice(index2, 1, array[index1])[0]

  return array
}

export const arrayMove = (
  array: Array<unknown>,
  fromIndex: number,
  toIndex: number
) => {
  if (toIndex >= array.length) {
    var k = toIndex - array.length + 1
    while (k--) {
      array.push(undefined)
    }
  }
  array.splice(toIndex, 0, array.splice(fromIndex, 1)[0])

  return array
}
