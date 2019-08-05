function findMinAndRemove(array){
  let min = array[0]
  let min_i = 0
  for(let i = 0; i < array.length; i++) {
    if(array[i] < min) {
      min = array[i]
      min_i = i
    }
  }
  array.splice(min_i, 1)
  return min
}

function insertionSort(array){
  let sortedArray = []
  while(array.length >= 1) {
    let newMin = findMinAndRemove(array)
    sortedArray.push(newMin)
  }
  return sortedArray
}
