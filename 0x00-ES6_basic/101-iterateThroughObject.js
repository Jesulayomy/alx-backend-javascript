export default function iterateThroughObject(reportWithIterator) {
  const names = '';
  for (const name of reportWithIterator) {
    names += name + ' | ';
  }
  return names.slice(0, names.length - 3);
}
