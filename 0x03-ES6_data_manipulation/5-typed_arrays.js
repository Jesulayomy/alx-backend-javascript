export default function createInt8TypedArray(length, position, value) {
  const buff = new ArrayBuffer(length);
  const dView = new DataView(buff);
  const iView = new Int8Array(buff);

  if (position >= iView.length) throw new Error('Position outside range');
  iView[position] = value;
  return dView;
}
