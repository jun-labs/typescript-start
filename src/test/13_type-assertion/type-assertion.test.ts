// https://backend.cafe/should-you-use-jest-as-a-testing-library
describe('test', () => {
    it('test', () => {
        const developer = 'Jun';
        const str = developer as string;
        expect(str).toBe('Jun')
    });
})