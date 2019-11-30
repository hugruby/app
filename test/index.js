const sum = require('../sum')
const assert = require('assert')

describe('sum', () => {
  it('Suma numeros positivos', () => {
    assert.equal(sum(3, 5), 8)
  })
  it('Suma numeros negativos',  () => {
    assert.equal(sum(3, -5), -2)
  })
  it('Suma numeros decimales', () => {
    assert.equal(sum(3.5, 7.1), 10.6)
  })
})