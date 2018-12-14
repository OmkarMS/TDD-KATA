let pf = require('./PrimeFactor13-12-18');

test('', () => {
    expect(pf.PrimeFactor(1)).toEqual(null);
})

test('', () => {
    expect(pf.PrimeFactor(1)).toEqual(null);
})

test('', () => {
    expect(pf.PrimeFactor(2)).toEqual([2]);
})

test('', () => {
    expect(pf.PrimeFactor(4)).toEqual([2,2]);
})

test('', () => {
    expect(pf.PrimeFactor(8)).toEqual([2,2,2]);
})

test('', () => {
    expect(pf.PrimeFactor(9)).toEqual([3,3]);
})

test('', () => {
    expect(pf.PrimeFactor(1269)).toEqual([3,3,3,47]);
})