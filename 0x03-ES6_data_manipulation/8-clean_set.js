export default function cleanSet(set, startString) {
  let str = '';
  for (const item of set) {
    if (startString && item.startsWith(startString)) {
      str += item.slice(startString.length);
      str += '-';
    }
  }

  return str.slice(0, str.length - 1);
}
