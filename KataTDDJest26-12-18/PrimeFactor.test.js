let pf = require('./PrimeFactor');

// test('PrimeFactor of null is given and expected is null', () => {
//     expect(pf.PrimeFactor(null)).toEqual(null);
// });

test('PrimeFactor of 1 is given and expected is null', () => {
    expect(pf.PrimeFactor(1)).toEqual(null);
});

test('PrimeFactor of 2 is given and expected is 2', () => {
    expect(pf.PrimeFactor(2)).toEqual([2]);
});

test('PrimeFactor of 3 is given and expected is 3', () => {
    expect(pf.PrimeFactor(3)).toEqual([3]);
});

test('PrimeFactor of 4 is given and expected is <2,2>', () => {
    expect(pf.PrimeFactor(4)).toEqual([2,2]);
});

test('PrimeFactor of 8 is given and expected is <2,2,2>', () => {
    expect(pf.PrimeFactor(8)).toEqual([2,2,2]);
});

test('PrimeFactor of 9 is given and expected is <3,3>', () => {
    expect(pf.PrimeFactor(9)).toEqual([3,3]);
});

test('PrimeFactor of 1269 is given and expected is <3,3,3,47>', () => {
    expect(pf.PrimeFactor(1269)).toEqual([3,3,3,47]);
});