const arrayWithout = (() => {
  const isArray = canBeArray => ('isArray' in Array)
    ? Array.isArray(canBeArray)
    : Object.prototype.toString.call(canBeArray) === '[object Array]';

  let mapIncludes = (map, key) => map.has(key);
  let objectIncludes = (obj, key) => key in obj;
  let includes;

  function arrayWithout(arr, ...thisArgs) {
    let withoutValues = isArray(thisArgs[0]) ? thisArgs[0] : thisArgs;

    if (typeof Map !== 'undefined') {
      withoutValues = withoutValues.reduce((map, value) => map.set(value, value), new Map());
      includes = mapIncludes;
    } else {
      withoutValues = withoutValues.reduce((map, value) => { map[value] = value; return map; } , {});
      includes = objectIncludes;
    }

    const arrCopy = [];
    const length = arr.length;

    for (let i = 0; i < length; i++) {
      // If value is not in exclude list
      if (!includes(withoutValues, arr[i])) {
        arrCopy.push(arr[i]);
      }
    }

    return arrCopy;
  }

  return arrayWithout;
})();

export default arrayWithout;
