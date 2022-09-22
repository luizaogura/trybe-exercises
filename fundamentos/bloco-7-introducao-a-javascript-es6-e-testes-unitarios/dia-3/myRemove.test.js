const myRemove = require('./myRemove.js');

describe('retorna uma cópia desse array sem o elemento', () => {
    it('deve eliminar o elemento 3', () => {
        expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
    })
    it('deve nao ser o array determinado', () => {
        expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
    })
    it('deve eliminar o elemento 5', () => {
        expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4])
    })
})