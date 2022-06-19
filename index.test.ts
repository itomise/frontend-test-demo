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
    it('3 should be 3', () => {
        expect(sampleNumberFunc(3)).toBe(3)
    })
    it('4 should be 4', () => {
        expect(sampleNumberFunc(4)).toBe(4)
    })
    it('5 should be 5', () => {
        expect(sampleNumberFunc(5)).toBe(5)
    })
    it('6 should be 6', () => {
        expect(sampleNumberFunc(6)).toBe(6)
    })
    it('7 should be 7', () => {
        expect(sampleNumberFunc(7)).toBe(6)
    })

})