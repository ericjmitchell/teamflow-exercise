const request = require('supertest')
const app = require('../src/app')

describe('Test the home path', () => {
  test('It should return the home response', async () => {
    const response = await request(app).get('/')

    expect(response.statusCode).toBe(200)
    expect(response.body.message).toBe('Hello World!')
  })
})
