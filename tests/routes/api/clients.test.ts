export {};
const request = require('supertest');
const app = require('../../../app');
const mongoose = require('mongoose');

const clientSchema = require('../../../libs/mongo/clientSchema');
const Client = mongoose.model('client', clientSchema, 'clients');

// Auth middleware will be mocked here and tested separately
jest.mock('../../../middleware/auth', () => {
    return jest.fn((req: any, res: any, next: Function) => next()) ;
})

const testClient1 = {
    userName: "test1",
    mail: "test1@test.com",
    phone: "0544228667"
}
const testClient2 = {
    userName: "test2",
    mail: "test2@test.com",
    phone: "0544228667"
}
const testClient3 = {
    userName: "test3",
    mail: "test3@test.com",
    phone: "0544228667"
}

beforeEach(() => {
    jest.resetModules();
});

beforeAll( done => {
    done()
})

beforeAll(async () => {
    console.info = jest.fn();
    await Client.deleteMany({});
    await Client(testClient1).save();
    await Client(testClient2).save();
    // expect(console.info).toHaveBeenCalled() // console.info about the mongo connection
})

test('GET to /api/clients - Should respond with an array of clients', async () => {
    const res = await request(app).get('/api/clients')
        .send("")
        .expect(200);

    const resBody = JSON.parse(res.text);

    expect(Array.isArray(resBody)).toBeTruthy();
    expect(resBody.length).toEqual(2);
})

test('POST to /api/clients with userName, mail and phone ' +
    '- should add new client and send a response containing the credentials', async () => {
    const res = await request(app).post('/api/clients')
        .send({
                userName: "אנטון",
                mail: "test@gmail.com",
                phone: "0544228667"
            },
        )
        .expect('Content-Type', /json/)
        .expect(200);

    const resBody = JSON.parse(res.text);

    expect(resBody).toHaveProperty("creationDate");
    expect(resBody).toHaveProperty("_id");
    expect(resBody).toHaveProperty("userName", "אנטון");
    expect(resBody).toHaveProperty("mail", "test@gmail.com");
    expect(resBody).toHaveProperty("phone", "0544228667");

})

test('POST to /api/clients with no userName - should return empty string', async () => {
    const res = await request(app).post('/api/clients')
        .send({
                mail: "test@gmail.com",
                phone: "0544228667"
            }
        )
        .expect('Content-Type', /json/)
        .expect(200);

    expect(res.text).toBeFalsy();
})

test('POST to /api/clients with userName empty - should return empty string', async () => {
    const res = await request(app).post('/api/clients')
        .send({
                userName: "",
                mail: "test@gmail.com",
                phone: "0544228667"
            }
        )
        .expect('Content-Type', /json/)
        .expect(200);

    expect(res.text).toBeFalsy();

})

test('DELETE to /api/clients/ with client id - removes the client', async () => {
    const savedClient = await Client(testClient3).save();
    const res = await request(app).delete(`/api/clients/${savedClient._id}`)
        .expect(200)

    expect(res.text).toBe("{\"success\":true}");
})

test('DELETE to /api/clients/ with no client id - get status 404', async () => {
    await request(app).delete(`/api/clients/`)
        .expect(404)
})

test('DELETE to /api/clients/ with wrong client id - get status 404', async () => {
    await request(app).delete(`/api/clients/wrong_id`)
        .expect(404)
})

test('PUT to /api/clients/ with client id and client object' +
    ' - updates the client with new data and returns new updated client object', async () => {
    const savedClient = await Client(testClient3).save();
    const res = await request(app).put(`/api/clients/${savedClient._id}`)
        .send({
            userName: "test3-edited",
            mail: "test3-edited@test.com",
            phone: "0544228667"
        })
        .expect(200)

    const resBody = JSON.parse(res.text);

    expect(resBody).toHaveProperty("creationDate");
    expect(resBody).toHaveProperty("_id");
    expect(resBody).toHaveProperty("userName", "test3-edited");
    expect(resBody).toHaveProperty("mail", "test3-edited@test.com");
    expect(resBody).toHaveProperty("phone", "0544228667");

})

afterAll( async done => {
    console.warn = jest.fn();
    await Client.deleteMany({});
    await mongoose.connection.close();
    expect(console.warn).toHaveBeenCalled(); // warn when mongo is disconnected

    jest.resetModules()
    jest.restoreAllMocks()

    done();
})

