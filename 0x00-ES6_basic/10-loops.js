export default function appendToEachArrayValue(array, appendString) {
  const arr = [];
  for (let idx of array) { arr.push(appendString + idx); }
  return arr;
}
