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

    return arr.filter((e, key) => !includes(withoutValues, arr[key]));
  }

  return arrayWithout;
})();

export default arrayWithout;
