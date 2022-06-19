const sampleFunc = (bool: boolean) => bool

describe('test func', () => {
    it('true should be true', () => {
        expect(sampleFunc(true)).toBe(true)
    })
    it('false should be false', () => {
        expect(sampleFunc(false)).toBe(false)
    })
})