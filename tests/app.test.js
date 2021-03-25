const app = require('../src/app')

describe('Test the app handler', () => {
  test('It should import the app handler', async () => {
    try {
      const app = require('../src/app')
      expect(app).toBeTruthy()
    } catch (err) {
      expect(err).toBeFalsy()
    }
  })
})
