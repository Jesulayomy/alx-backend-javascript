export default function iterateThroughObject(reportWithIterator) {
  let names = '';
  for (let name of reportWithIterator) {
    names += name + ' | ';
  }
  return names.slice(0, -2);
}
