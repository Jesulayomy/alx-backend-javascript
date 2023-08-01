const weakMap = new WeakMap();

function queryAPI(endpoint) {
  if (weakMap.has(endpoint)) {
    const count = weakMap.get(endpoint);
    weakMap.set(endpoint, count + 1);
    if (count + 1 >= 5) throw new Error('Endpoint load is high');
  } else {
    weakMap.set(endpoint, 1);
  }
}

export { weakMap, queryAPI };
