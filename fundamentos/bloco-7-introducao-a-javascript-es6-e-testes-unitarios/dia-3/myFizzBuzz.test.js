const myFizzBuzz = require('./myFizzBuzz.js')

describe('Verificar se um numero é divisível', () => {
    it('Verifica se o numero é divisível por 3 e 5', () => {
        expect(myFizzBuzz(15)).toEqual('fizzbuzz')
    })
    it('Verifica se o numero é divisível por 3 apenas', () => {
        expect(myFizzBuzz(18)).toEqual('fizz')
    })
    it('Verifica se o numero é divisível por 5 apenas', () => {
        expect(myFizzBuzz(35)).toEqual('buzz')
    })
})