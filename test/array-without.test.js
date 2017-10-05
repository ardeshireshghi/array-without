const expect = require('chai').expect;
const arrayWithout = require('../lib/array-without');

describe('arrayWithout', () => {
  it('should return array with excluded values', () => {
    expect(arrayWithout(['a','b','c'], 'c')).to.deep.equal(['a','b']);
    expect(arrayWithout(['a','b','c'], ['b','c'])).to.deep.equal(['a']);
    expect(arrayWithout(['a','b','c'], 'b','c')).to.deep.equal(['a']);
    expect(arrayWithout(['a','b','c'], {})).to.deep.equal(['a', 'b', 'c']);
    expect(arrayWithout([], {})).to.deep.equal([]);
    expect(arrayWithout([1])).to.deep.equal([1]);
  });

  describe('when `Map` is not supported', () => {
    let MapCache;

    before(() => {
      MapCache = global.Map;
      delete global.Map;
    });

    it('should return array with excluded values', () => {
      expect(arrayWithout(['a','b','c'], 'c')).to.deep.equal(['a','b']);
      expect(arrayWithout(['a','b','c'], ['b','c'])).to.deep.equal(['a']);
      expect(arrayWithout(['a','b','c'], 'b','c')).to.deep.equal(['a']);
      expect(arrayWithout(['a','b','c'], {})).to.deep.equal(['a', 'b', 'c']);
      expect(arrayWithout([], {})).to.deep.equal([]);
      expect(arrayWithout([1])).to.deep.equal([1]);
    });

    after(() => {
      global.Map = MapCache;
    });
  });
});
