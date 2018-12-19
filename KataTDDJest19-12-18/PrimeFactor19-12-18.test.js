let pf = require('./PrimeFactor19-12-18');

test('PrimeFactor of given number 1 and expected is null', () => {
    expect(pf.PrimeFactor(1)).toEqual(null);
});

test('PrimeFactor of given number 2 and expected is 2', () => {
    expect(pf.PrimeFactor(2)).toEqual([2]);
});

test('PrimeFactor of given number 3 and expected is <3>', () => {
    expect(pf.PrimeFactor(3)).toEqual([3]);
});

test('PrimeFactor of given number 4 and expected is <2,2>', () => {
    expect(pf.PrimeFactor(4)).toEqual([2,2]);
});

test('PrimeFactor of given number 8 and expected is <2,2,2>', () => {
    expect(pf.PrimeFactor(8)).toEqual([2,2,2]);
});

test('PrimeFactor of given number 9 and expected is <3,3>', () => {
    expect(pf.PrimeFactor(9)).toEqual([3,3]);
});

test('PrimeFactor of given number 1269 and expected is <3,3,3,47>', () => {
    expect(pf.PrimeFactor(1269)).toEqual([3,3,3,47]);
});