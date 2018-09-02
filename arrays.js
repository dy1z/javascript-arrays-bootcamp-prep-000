var chocolateBars = ["snickers", "hundred grand", "kitkat", "kittles"]
function addElementToBeginningOfArray(imArray,element) {
  N = ["element",...imArray]
  return N
}

function addElementToBeginningOfArray(imArray,element) {
  N = imArray.unshift(element)
  return N
}