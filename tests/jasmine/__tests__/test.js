

describe("test", () => {
    it('has jasmine', () => {
        expect(typeof jasmine).toBe('object');
    }),
    it('unhandled', () => {
        new Promise((resolve, reject) => {
            reject(new Error('unhandled'));
        })
        expect(true).toBe(true)
    })
})