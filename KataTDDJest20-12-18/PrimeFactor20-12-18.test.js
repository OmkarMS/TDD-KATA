let pf = require('./Primefactor20-12-18');

test('Prime Factor of 1 is given and expected is null', () => {
    expect(pf.PrimeFactor(1)).toEqual(null);
})

test('Prime Factor of 2 is given and expected is 2', () => {
    expect(pf.PrimeFactor(2)).toEqual([2]);
})

test('Prime Factor of 3 is given and expected is <3>', () => {
    expect(pf.PrimeFactor(3)).toEqual([3]);
})

test('Prime Factor of 4 is given and expected is <2,2>', () => {
    expect(pf.PrimeFactor(4)).toEqual([2,2]);
})

test('Prime Factor of 8 is given and expected is <3,3>', () => {
    expect(pf.PrimeFactor(9)).toEqual([3,3]);
})

test('Prime Factor of 1269 is given and expected is <3,3,3,47>', () => {
    expect(pf.PrimeFactor(1269)).toEqual([3,3,3,47]);
})