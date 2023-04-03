const mock = jest.mock('../../study/7_union-type/7_union-type');
const tee = require('../../study/7_union-type/union-type')

/**
 * https://stackoverflow.com/questions/55232833/how-to-test-if-a-void-async-function-was-successful-with-jest
 * https://stackoverflow.com/questions/67030994/cannot-spy-the-getnotification-property-because-it-is-not-a-function-undefine
 * */
beforeEach(() => {
    jest.restoreAllMocks();
});
// describe('', () => {
//     it('when_get_nike_brandbag_then_result_should_be_this', () => {
//         const spy = jest.spyOn(tee.logMessageString('Hello'), 'log')
//             .mockImplementation(tee.logMessageString)
//         spy.mockReturnValue('Hello')
//         // // .mockImplementation(() => 'Hello World.')
//         // const logMessage: string = tee.log('Hello World.');
//         // spy.mockReturnValue('Hello World.')
//         expect(spy).toHaveBeenCalled()
//         // expect(logMessage).toBe('Hello World.')
//     });
// })
