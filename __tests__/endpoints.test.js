const { app } = require('../app.js');
const { doughnuts } = require('../donuts.js');
const supertest = require('supertest');
const request = supertest(app);

it('should respond with the doughnuts from my list', async done => {
    const myData = { results: doughnuts };
    const response = await request.get('/donuts');
  
    expect(response.status).toBe(200);
    expect(response.body.message).toEqual(myData);
    done();
});