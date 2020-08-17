export {};
const request = require('supertest');
const app = require('../../../app');
const mongoose = require('mongoose');

const userSchema = require('../../../libs/mongo/userSchema');
const User = mongoose.model('user', userSchema, 'users');

const testUser1 = {
    userName: "test1",
    mail: "test1@test.com",
    pass: "test1"
}
const testUser2 = {
    userName: "test2",
    mail: "test2@test.com",
    pass: "test2"
}
const testUser3 = {
    userName: "test3",
    mail: "test3@test.com",
    pass: "test3"
}

beforeAll( done => {
    done()
})

beforeAll(async () => {
    console.info = jest.fn();
    await User.deleteMany({});
    await User(testUser1).save();
    await User(testUser2).save();
    expect(console.info).toHaveBeenCalled() // console.info about the mongo connection
})


test('POST to /api/users with userName, mail and pass ' +
    '- should add new user and send a response containing the credentials', async () => {
    const res = await request(app).post('/api/users')
        .send(testUser3)

    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
    expect(res.body).toHaveProperty(["user", "_id"]);
    expect(res.body).toHaveProperty(["user", "userName"],"test3");
    expect(res.body).toHaveProperty(["user", "mail"],"test3@test.com");
    expect(res.body).toHaveProperty(["user", "registerDate"]);
    expect(res.body).not.toHaveProperty(["user", "pass"]);
})

test('POST to /api/users with no userName ' +
    '- should send status 400 and msg "Please enter all fields" ', async () => {
    const res = await request(app).post('/api/users')
        .send({
                mail: "test1@test.com",
                pass: "test1"
            }
        )

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("msg","Please enter all fields");
})

test('POST to /api/users with no mail ' +
    '- should send status 400 and msg "Please enter all fields" ', async () => {
    const res = await request(app).post('/api/users')
        .send({
                userName: "test1",
                pass: "test1"
            }
        )

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("msg","Please enter all fields");
})

test('POST to /api/users with no pass ' +
    '- should send status 400 and msg "Please enter all fields" ', async () => {
    const res = await request(app).post('/api/users')
        .send({
                userName: "test1",
                mail: "test1@test.com"
            }
        )

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("msg","Please enter all fields");
})

test('POST to /api/users with existing user ' +
    '- should send status 400 and msg "User already exists" ', async () => {
    const res = await request(app).post('/api/users')
        .send({
            userName: "test1",
            mail: "test1@test.com",
            pass: "test1"
            }
        )

    expect(res.status).toBe(400);
    expect(res.body).toHaveProperty("msg","User already exists");
})


afterAll( async done=> {
    console.warn = jest.fn();
    await User.deleteMany({});
    await mongoose.connection.close();
    expect(console.warn).toHaveBeenCalled(); // warn when mongo is disconnected
    done();
})

