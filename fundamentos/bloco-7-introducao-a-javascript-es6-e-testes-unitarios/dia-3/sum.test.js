const sum = require('./sum.js')

describe('testa se a função soma', () => {
    it('deve retornar o valor da soma', () => {
        expect(sum(4, 5)).toBe(9);
        expect(sum(0, 0)).toBe(0);
    });
    it('deve disparar um erro caso receba como parâmetro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
      })
})