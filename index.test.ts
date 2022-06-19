const sampleFunc = (bool: boolean) => bool
const sampleNumberFunc = (number: number) => number

describe('test func', () => {
    it('true should be true', () => {
        expect(sampleFunc(true)).toBe(true)
    })
    it('false should be false', () => {
        expect(sampleFunc(false)).toBe(false)
    })

    it('1 should be 1', () => {
        expect(sampleNumberFunc(1)).toBe(1)
    })
    it('2 should be 2', () => {
        expect(sampleNumberFunc(2)).toBe(2)
    })

})