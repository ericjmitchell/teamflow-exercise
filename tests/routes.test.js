const request = require('supertest')
const app = require('../src/app')

const mockData = {
  name: 'test',
  message: 'This is a test'
}

describe('Test the home path', () => {
  test('It should save, get and delete data', async () => {
    // Save
    const saveResponse = await request(app).post('/').send(mockData)

    expect(saveResponse.statusCode).toBe(200)
    expect(saveResponse.body._id).toBeTruthy()

    // Get
    const getResponse = await request(app).get(`/${saveResponse._id}`)

    expect(getResponse.statusCode).toBe(200)
    expect(getResponse.body.message).toBe('This is a test')

    // Delete
    const deleteResponse = await request(app).delete(`/${saveResponse._id}`)

    expect(deleteResponse.statusCode).toBe(200)
    expect(deleteResponse.body.deletedCount).toBe(1)
  })
})
